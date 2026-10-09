
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

import {
  menu,
  categories,
  filterMenu,
  priceLabel
} from '../src/data/menu.js';

import { copy } from '../src/i18n/translations.js';

test('exact 20-item menu, category counts and supplied EGP prices', () => {
  assert.equal(menu.length, 20);
  assert.equal(new Set(menu.map(x => x.id)).size, 20);

  assert.deepEqual(menu.map(x => x.price), [
    85, 105, 125, 135, 150,
    115, 145, 160, 170, 165,
    165, 185, 175, 195,
    110, 135, 155,
    195, 185, 205
  ]);

  assert.deepEqual(
    categories.slice(1).map(c =>
      menu.filter(x => x.category === c.id).length
    ),
    [5, 5, 4, 3, 3]
  );

  for (const item of menu) {
    assert.ok(
      item.en &&
      item.ar &&
      item.description.en &&
      item.description.ar
    );

    assert.ok(
      existsSync(
        new URL('../public/' + item.image, import.meta.url)
      ),
      item.image
    );

    assert.match(priceLabel(item.price, 'en'), /EGP$/);
    assert.match(priceLabel(item.price, 'ar'), /جنيه$/);
  }
});

test('bilingual search, category combinations and no-match handling', () => {
  assert.equal(filterMenu('hot', 'latte').length, 1);
  assert.equal(filterMenu('all', '  MATCHA  ').length, 2);
  assert.equal(filterMenu('all', 'ماتشا').length, 2);
  assert.equal(filterMenu('all', 'اسبريسو').length, 9);
  assert.equal(filterMenu('bakery', 'chocolat').length, 1);
  assert.equal(filterMenu('all', 'nonexistent').length, 0);
});

test('all interface strings have both languages and currency values agree', () => {
  assert.deepEqual(
    Object.keys(copy.en).sort(),
    Object.keys(copy.ar).sort()
  );

  for (const v of Object.values(copy.ar)) {
    assert.ok(v.length);
  }

  assert.equal(priceLabel(155, 'ar'), '١٥٥ جنيه');
});

test('project-subpath build and Pages workflow are configured', () => {
  assert.match(
    readFileSync(
      new URL('../vite.config.js', import.meta.url),
      'utf8'
    ),
    /base: '\/NOIR-BEAN\/'/
  );

  const y = readFileSync(
    new URL('../.github/workflows/deploy.yml', import.meta.url),
    'utf8'
  );

  for (const x of [
    'branches: [main]',
    'npm ci',
    'npm test',
    'npm run build',
    'actions/upload-pages-artifact@v4',
    'actions/deploy-pages@v4',
    'pages: write',
    'id-token: write'
  ]) {
    assert.ok(y.includes(x), x);
  }
});

export const categories = [
  {id:'all',en:'All creations',ar:'كل الأصناف'},
  {id:'hot',en:'Hot Coffee',ar:'قهوة ساخنة'},
  {id:'iced',en:'Iced Coffee',ar:'قهوة مثلجة'},
  {id:'specialty',en:'Specialty & Matcha',ar:'قهوة مختصة وماتشا'},
  {id:'bakery',en:'Fresh Bakery',ar:'مخبوزات طازجة'},
  {id:'dessert',en:'Signature Desserts',ar:'حلوياتنا المميزة'},
];
// Every price is a fictional demonstration price in EGP.
// Images are relative to public/assets; the component adds Vite's base path.
export const menu = [
  {id:'espresso',category:'hot',price:85,en:'Espresso',ar:'إسبريسو',description:{en:'A small cup, a full expression. Rich espresso with a golden crema.',ar:'فنجان صغير بنكهة عميقة وطبقة كريما ذهبية.'}},
  {id:'americano',category:'hot',price:105,en:'Americano',ar:'أمريكانو',description:{en:'Espresso lengthened with hot water. Clean, deep, unhurried.',ar:'إسبريسو مع الماء الساخن، لمذاق صافٍ وعميق.'}},
  {id:'cappuccino',category:'hot',price:125,en:'Cappuccino',ar:'كابتشينو',description:{en:'Rich espresso under a cloud of silky steamed milk and foam.',ar:'إسبريسو غني مع الحليب المبخر ورغوة ناعمة.'}},
  {id:'flat-white',category:'hot',price:135,en:'Flat White',ar:'فلات وايت',featured:true,description:{en:'Bold espresso, velvety microfoam. Beautifully balanced, to the last sip.',ar:'إسبريسو قوي ورغوة حليب مخملية، بتوازن رائع حتى آخر رشفة.'}},
  {id:'spanish-latte',category:'hot',price:150,en:'Spanish Latte',ar:'سبانش لاتيه',description:{en:'Espresso and warm milk, softened with a little condensed milk.',ar:'إسبريسو وحليب دافئ بلمسة حلوة من الحليب المكثف.'}},
  {id:'iced-americano',category:'iced',price:115,en:'Iced Americano',ar:'أمريكانو مثلج',description:{en:'Espresso, cool water, clear ice. Refreshingly straightforward.',ar:'إسبريسو مع الماء البارد والثلج، لبساطة منعشة.'}},
  {id:'iced-latte',category:'iced',price:145,en:'Iced Latte',ar:'لاتيه مثلج',description:{en:'Espresso poured over chilled milk and generous ice.',ar:'إسبريسو يُسكب فوق الحليب البارد ومكعبات الثلج.'}},
  {id:'iced-spanish-latte',category:'iced',price:160,en:'Iced Spanish Latte',ar:'سبانش لاتيه مثلج',featured:true,description:{en:'Creamy, cool and gently sweet. Espresso meets condensed milk over ice.',ar:'إسبريسو مع الحليب المكثف والثلج، بقوام كريمي وحلاوة خفيفة.'}},
  {id:'iced-caramel-macchiato',category:'iced',price:170,en:'Iced Caramel Macchiato',ar:'كراميل ماكياتو مثلج',description:{en:'Layers of chilled milk and espresso, finished with caramel.',ar:'طبقات من الحليب البارد والإسبريسو، تكتمل بلمسة كراميل.'}},
  {id:'cold-brew',category:'iced',price:165,en:'Cold Brew',ar:'كولد برو',description:{en:'Slow-steeped coffee served cold. Rounded, mellow and refreshing.',ar:'قهوة تُنقع على البارد وتُقدم مثلجة، بنكهة هادئة ومنعشة.'}},
  {id:'v60',category:'specialty',price:165,en:'V60 Pour Over',ar:'قهوة مقطرة V60',description:{en:'A deliberate pour, a delicate cup. Filter coffee with room to shine.',ar:'قهوة مقطرة بعناية، لتظهر تفاصيل النكهة في كل رشفة.'}},
  {id:'chemex',category:'specialty',price:185,en:'Chemex Brew',ar:'قهوة كيمكس',description:{en:'Paper-filtered coffee, brewed slowly for a clear, elegant finish.',ar:'قهوة تُحضر ببطء بفلتر ورقي، لمذاق نقي ولمسة ناعمة.'}},
  {id:'iced-matcha',category:'specialty',price:175,en:'Iced Matcha Latte',ar:'ماتشا لاتيه مثلجة',description:{en:'Earthy green matcha whisked smooth, with chilled milk and ice.',ar:'ماتشا خضراء مخفوقة بنعومة مع الحليب البارد والثلج.'}},
  {id:'strawberry-matcha',category:'specialty',price:195,en:'Strawberry Matcha',ar:'ماتشا بالفراولة',featured:true,description:{en:'Strawberry, cool milk and green matcha. A little unexpected harmony.',ar:'فراولة وحليب بارد وماتشا خضراء، بتناغم غير متوقع.'}},
  {id:'butter-croissant',category:'bakery',price:110,en:'Butter Croissant',ar:'كرواسون بالزبدة',description:{en:'Golden, crisp layers with a soft, buttery heart.',ar:'طبقات ذهبية هشة وقلب طري غني بالزبدة.'}},
  {id:'pain-au-chocolat',category:'bakery',price:135,en:'Pain au Chocolat',ar:'بان أو شوكولا',description:{en:'Flaky pastry wrapped around a rich dark chocolate centre.',ar:'عجينة مورقة هشة تحتضن حشوة من الشوكولاتة الداكنة.'}},
  {id:'almond-croissant',category:'bakery',price:155,en:'Almond Croissant',ar:'كرواسون باللوز',description:{en:'Buttery pastry, almond filling and a delicate toasted crunch.',ar:'كرواسون بالزبدة وحشوة اللوز، مع شرائح لوز محمصة.'}},
  {id:'cheesecake',category:'dessert',price:195,en:'San Sebastian Cheesecake',ar:'تشيز كيك سان سيباستيان',featured:true,description:{en:'A deeply caramelised top gives way to a soft, creamy centre.',ar:'وجه غني بالكراميل يخفي قلبًا كريميًا ناعمًا.'}},
  {id:'tiramisu',category:'dessert',price:185,en:'Classic Tiramisu',ar:'تيراميسو كلاسيكي',description:{en:'Coffee-soaked layers, mascarpone cream and a dusting of cocoa.',ar:'طبقات مشبعة بالقهوة وكريمة ماسكاربوني ورشة كاكاو.'}},
  {id:'molten-cake',category:'dessert',price:205,en:'Molten Chocolate Cake',ar:'مولتن كيك بالشوكولاتة',description:{en:'Warm chocolate cake with a flowing, dark chocolate heart.',ar:'كيك شوكولاتة دافئ بقلب سائل من الشوكولاتة الداكنة.'}},
].map(item=>({...item,image:`assets/${item.id}.webp`,alt:{en:`${item.en} — illustrative menu photograph`,ar:`${item.ar} — صورة توضيحية للقائمة`}}));
export const priceLabel=(value,lang)=>lang==='ar'?`${new Intl.NumberFormat('ar-EG').format(value)} جنيه`:`${value} EGP`;
export const normalize=value=>value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f\u064B-\u065F\u0670]/g,'').replace(/[أإآ]/g,'ا');
export const filterMenu=(category,query)=>menu.filter(item=>(category==='all'||item.category===category)&&normalize([item.en,item.ar,item.description.en,item.description.ar].join(' ')).includes(normalize(query.trim())));

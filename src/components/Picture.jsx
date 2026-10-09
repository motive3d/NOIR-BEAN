import { useState } from 'react';
export default function Picture({src,alt,className='',eager=false,...props}) {
  const [failed,setFailed]=useState(false);
  return failed ? <div className={`image-fallback ${className}`} role="img" aria-label={alt}><span>NOIR & BEAN</span></div> : <img src={`${import.meta.env.BASE_URL}${src}`} alt={alt} className={className} loading={eager?'eager':'lazy'} fetchPriority={eager?'high':'auto'} decoding="async" onError={()=>setFailed(true)} {...props}/>;
}

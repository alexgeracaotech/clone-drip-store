import './Logo.css'
export default function Logo({cor, src}){
  return (
    <div className='box-logo'>
      <a href="">
        <img src={src}/>
      </a>
      <h1 style={{color: cor }}>Drip Store</h1>
    </div>
  );
}
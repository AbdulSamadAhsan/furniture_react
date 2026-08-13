import { useState } from 'react';

const RAW = 'https://raw.githubusercontent.com/OksanaZhuravel/Funiro/master/img';

const products = [
  { name: 'Syltherine', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', old: 'Rp 3.500.000', badge: '-30%', img: `${RAW}/products/01.jpg` },
  { name: 'Leviosa', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', img: `${RAW}/products/02.jpg` },
  { name: 'Lolito', desc: 'Luxury big sofa', price: 'Rp 7.000.000', old: 'Rp 14.000.000', badge: '-50%', img: `${RAW}/products/03.jpg` },
  { name: 'Respira', desc: 'Minimalist fan', price: 'Rp 500.000', badge: 'New', img: `${RAW}/products/04.jpg` },
  { name: 'Grifo', desc: 'Night lamp', price: 'Rp 1.500.000', img: `${RAW}/products/05.jpg` },
  { name: 'Muggo', desc: 'Small mug', price: 'Rp 150.000', badge: 'New', img: `${RAW}/products/06.jpg` },
  { name: 'Pingky', desc: 'Cute bed set', price: 'Rp 7.000.000', old: 'Rp 14.000.000', badge: '-50%', img: `${RAW}/products/07.jpg` },
  { name: 'Potty', desc: 'Minimalist flower pot', price: 'Rp 500.000', badge: 'New', img: `${RAW}/products/08.jpg` },
];

const tips = [
  ['How to create a living room to love', '20 jan 2020', `${RAW}/tips/01.jpg`],
  ['Solution for clean look working space', '10 jan 2020', `${RAW}/tips/02.jpg`],
  ['Make your cooking activity more fun', '20 jan 2020', `${RAW}/tips/03.jpg`],
];

function Icon({ children }) { return <span className="feature-icon">{children}</span>; }

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header-wrap">
      <div className="container header">
        <a className="brand" href="#">Funiro.</a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        <nav className={`nav ${open ? 'open' : ''}`}>
          <a href="#products">Products <span>⌄</span></a>
          <a href="#rooms">Rooms <span>⌄</span></a>
          <a href="#tips">Inspirations</a>
        </nav>
        <label className="search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"/></svg>
          <input placeholder="Search for minimalist chair" />
        </label>
        <div className="header-actions">
          <button aria-label="heart">♡</button>
          <button aria-label="cart">🛒</button>
          <span className="avatar">F</span>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-palette palette-left" />
      <div className="hero-palette palette-right" />
      <div className="container hero-stage">
        <img className="hero-img" src={`${RAW}/main-slider/01.jpg`} alt="Modern living room" />
        <div className="hero-card">
          <h1>High-Quality<br/>Furniture Just<br/>For You</h1>
          <p>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
          <a className="primary-btn" href="#products">Shop Now</a>
        </div>
        <div className="hero-dots"><i className="active"/><i/><i/><i/></div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    ['♕', 'High Quality', 'crafted from top materials'],
    ['✓', 'Warranty Protection', 'Over 2 years'],
    ['▣', 'Free Shipping', 'Order over 150 $'],
    ['☎', '24 / 7 Support', 'Dedicated support'],
  ];
  return <section className="features container">{features.map(([ico,t,d]) => <div className="feature" key={t}><Icon>{ico}</Icon><div><h3>{t}</h3><p>{d}</p></div></div>)}</section>;
}

function ProductCard({ p }) {
  return <article className="product-card">
    <div className="product-image">
      <img src={p.img} alt={p.name}/>
      {p.badge && <span className={`badge ${p.badge === 'New' ? 'new' : ''}`}>{p.badge}</span>}
      <div className="product-overlay"><button>Add to cart</button><div><span>↗ Share</span><span>♡ Like</span></div></div>
    </div>
    <div className="product-info"><h3>{p.name}</h3><p>{p.desc}</p><div className="price"><strong>{p.price}</strong>{p.old && <del>{p.old}</del>}</div></div>
  </article>;
}

function Products() {
  const [all, setAll] = useState(false);
  return <section id="products" className="products-section container">
    <h2 className="section-title">Our Products</h2>
    <div className="products-grid">{(all ? products : products.slice(0,8)).map(p => <ProductCard key={p.name} p={p}/>)}</div>
    <button className="outline-btn" onClick={() => setAll(!all)}>{all ? 'Show Less' : 'Show More'}</button>
  </section>;
}

function Rooms() {
  return <section id="rooms" className="rooms-section">
    <div className="container rooms-grid">
      <div className="rooms-copy"><h2>50+ Beautiful rooms inspiration</h2><p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p><button className="secondary-btn">Explore More</button></div>
      <div className="room-main"><img src={`${RAW}/rooms/01.jpg`} alt="Inner Peace"/><div className="room-caption"><small>01 <span/> Bed Room</small><strong>Inner Peace</strong></div><button className="room-next">→</button></div>
      <div className="room-side"><img src={`${RAW}/rooms/02.jpg`} alt="Room inspiration"/><div className="room-dots"><i className="active"/><i/><i/><i/></div></div>
    </div>
  </section>;
}

function Tips() {
  return <section id="tips" className="tips-section container"><h2 className="section-title">Tips &amp; Tricks</h2><div className="tips-grid">{tips.map(([t,d,img]) => <article className="tip-card" key={t}><img src={img} alt=""/><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="dots"><i/><i className="active"/><i/><i/></div></section>;
}

function Gallery() {
  const imgs = Array.from({length: 9}, (_,i)=>`${RAW}/furniture/${String(i+1).padStart(2,'0')}.jpg`);
  return <section className="gallery-section"><div className="gallery-heading"><p>Share your setup with</p><h2>#FuniroFurniture</h2></div><div className="gallery-mosaic">{imgs.map((src,i)=><img key={src} className={`g${i+1}`} src={src} alt="Funiro furniture setup"/>)}</div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div className="footer-about"><h3>Funiro.</h3><p>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p><p>⌖ Sawojajar Malang, Indonesia</p><p>☎ +6289 456 3455</p><a href="#">www.funiro.com</a></div>
    <div><h4>Menu</h4><a href="#products">Products</a><a href="#rooms">Rooms</a><a href="#tips">Inspirations</a><a href="#">About Us</a><a href="#">Terms &amp; Policy</a></div>
    <div><h4>Account</h4><a href="#">My Account</a><a href="#">Checkout</a><a href="#">My Cart</a><a href="#">My catalog</a></div>
    <div><h4>Stay Connected</h4><a href="#">Facebook</a><a href="#">Instagram</a><a href="#">Twitter</a></div>
    <div><h4>Stay updated</h4><div className="email-box"><input placeholder="Enter your email"/><button>→</button></div></div>
  </div></footer>;
}

export default function App(){
  return <><Header/><main><Hero/><Features/><Products/><Rooms/><Tips/><Gallery/></main><Footer/></>;
}

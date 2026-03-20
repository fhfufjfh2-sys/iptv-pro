import React from 'react';
import './Showcase.css';

const moviesMarquee1 = [
  { id: 1, title: 'أفلام أكشن', img: '/posters/action.png' },
  { id: 2, title: 'خيال علمي', img: '/posters/scifi.png' },
  { id: 3, title: 'دراما', img: '/posters/drama.png' },
  { id: 4, title: 'جريمة وإثارة', img: '/posters/crime.png' },
  { id: 5, title: 'رعب وإثارة', img: '/posters/horror.png' },
];

// Series-specific - mood matched images from Unsplash
const moviesMarquee2 = [
  {
    id: 6,
    title: 'الموتى السائرون',
    // Post-apocalyptic abandoned city — matches Walking Dead perfectly
    img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&q=80&fit=crop'
  },
  {
    id: 7,
    title: 'Stranger Things',
    // Dark foggy spooky forest with dramatic red glow — matches the Upside Down
    img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&q=80&fit=crop'
  },
  {
    id: 8,
    title: 'Silo',
    // Dark underground industrial structures — matches the underground bunker world
    img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&q=80&fit=crop'
  },
  {
    id: 9,
    title: 'Breaking Bad',
    // Desert desolate landscape at dusk — New Mexico desert vibes
    img: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=500&q=80&fit=crop'
  },
  {
    id: 10,
    title: 'Game of Thrones',
    // Epic snowy mountain castle — matches Westeros winter landscapes
    img: 'https://images.unsplash.com/photo-1481026469463-66327c86e544?w=500&q=80&fit=crop'
  },
];

const Showcase = () => {
  return (
    <section id="showcase" className="showcase">
      <div className="container-fluid">
        <h2 className="section-title">مكتبة <span className="text-yellow">محتوى لا حصر لها</span></h2>
        <p className="showcase-subtitle">أحدث الأفلام والمسلسلات العالمية المترجمة والمدبلجة تتحدث يومياً بجودة 4K</p>
        
        <div className="showcase-marquee-container">
          {/* الشريط الأول يتحرك لليمين */}
          <div className="showcase-marquee marquee-left">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="showcase-track">
                {moviesMarquee1.map(movie => (
                  <div key={`${i}-${movie.id}`} className="poster-card">
                    <img src={movie.img} alt={movie.title} className="poster-img" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* الشريط الثاني يتحرك لليسار */}
          <div className="showcase-marquee marquee-right" style={{marginTop: '25px'}}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className="showcase-track">
                {moviesMarquee2.map(movie => (
                  <div key={`${i}-${movie.id}`} className="poster-card">
                    <img src={movie.img} alt={movie.title} className="poster-img" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ChromaGrid.css';

export const ChromaGrid = ({
  items,
  className = '',
  radius = 300,
  columns = 3,
  rows = 2,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out'
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const programmingLanguages = [
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      title: 'Python',
      subtitle: 'Programming Language',
      borderColor: '#3776AB',
      gradient: 'linear-gradient(145deg, #3776AB, #000)',
      url: 'https://www.python.org/'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      title: 'C',
      subtitle: 'Programming Language',
      borderColor: '#A8B9CC',
      gradient: 'linear-gradient(210deg, #A8B9CC, #000)',
      url: 'https://en.wikipedia.org/wiki/C_(programming_language)'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      title: 'C++',
      subtitle: 'Programming Language',
      borderColor: '#00599C',
      gradient: 'linear-gradient(165deg, #00599C, #000)',
      url: 'https://isocpp.org/'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      title: 'HTML',
      subtitle: 'Markup Language',
      borderColor: '#E34F26',
      gradient: 'linear-gradient(195deg, #E34F26, #000)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      title: 'CSS',
      subtitle: 'Styling Language',
      borderColor: '#1572B6',
      gradient: 'linear-gradient(225deg, #1572B6, #000)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      title: 'JavaScript',
      subtitle: 'Programming Language',
      borderColor: '#F7DF1E',
      gradient: 'linear-gradient(135deg, #F7DF1E, #000)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      title: 'React',
      subtitle: 'JavaScript Framework',
      borderColor: '#61DAFB',
      gradient: 'linear-gradient(150deg, #61DAFB, #000)',
      url: 'https://react.dev/'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      title: 'Java',
      subtitle: 'Programming Language',
      borderColor: '#ED8B00',
      gradient: 'linear-gradient(160deg, #ED8B00, #000)',
      url: 'https://www.java.com/'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      title: 'SQL',
      subtitle: 'Database Language',
      borderColor: '#4479A1',
      gradient: 'linear-gradient(180deg, #4479A1, #000)',
      url: 'https://en.wikipedia.org/wiki/SQL'
    }
  ];
  const data = items?.length ? items : programmingLanguages;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardClick = url => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={{
        '--r': `${radius}px`,
        '--cols': columns,
        '--rows': rows
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(c.url)}
          style={{
            '--card-border': c.borderColor || 'transparent',
            '--card-gradient': c.gradient,
            cursor: c.url ? 'pointer' : 'default'
          }}
        >
          <div className="chroma-img-wrapper">
            {c.image ? (
              <img src={c.image} alt={c.title} loading="lazy" />
            ) : (
              <div className="chroma-icon-placeholder">{c.title.charAt(0)}</div>
            )}
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
          </footer>
        </article>
      ))}
      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  );
};

export default ChromaGrid;

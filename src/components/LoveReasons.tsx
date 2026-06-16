import { CSSProperties, useState } from 'react';
import { loveReasons } from '../data/birthdayData';
import { useReveal } from '../hooks/useReveal';

function LoveReasons() {
  const revealRef = useReveal<HTMLElement>();
  const [caught, setCaught] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);

  const catchFirefly = (index: number) => {
    setCaught((prev) => (prev.includes(index) ? prev : [...prev, index]));
    setActive((prev) => (prev === index ? null : index));
  };

  const releaseFireflies = () => {
    setCaught([]);
    setActive(null);
  };

  const hideReveal = () => {
    setActive(null);
  };

  const allCaught = caught.length === loveReasons.length;

  return (
    <section className="section section--narrow reveal" id="love" ref={revealRef}>
      <div className="section-heading">
        <p className="eyebrow">Love query result</p>
        <h2>За что мы тебя любим</h2>
        <p>Поймай светлячков: в каждом спрятана причина, почему ты для нас такая особенная.</p>
      </div>

      <div className="firefly-game" aria-label="Интерактивные светлячки с причинами" onClick={hideReveal}>
        <div className="firefly-game__sky" aria-hidden="true" />

        {loveReasons.map((reason, index) => {
          const isCaught = caught.includes(index);
          const isActive = active === index;
          const orbit = index % 4;

          return (
            <div
              className={[
                'firefly-cluster',
                `firefly-cluster--orbit-${orbit + 1}`,
                isActive ? 'is-active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              key={reason}
              style={
                {
                  '--x': `${10 + ((index * 19) % 74)}%`,
                  '--y': `${12 + ((index * 31) % 48)}%`,
                  '--float-delay': `${index * -0.72}s`,
                  '--float-duration': `${11 + orbit * 1.4}s`,
                } as CSSProperties
              }
            >
              <button
                aria-label={`Поймать светлячок ${index + 1}`}
                className={isCaught ? 'firefly is-caught' : 'firefly'}
                onClick={(event) => {
                  event.stopPropagation();
                  catchFirefly(index);
                }}
                type="button"
              >
                <span className="firefly__wing firefly__wing--left" />
                <span className="firefly__wing firefly__wing--right" />
                <span className="firefly__body" />
              </button>
            </div>
          );
        })}

        <div className="firefly-reveal" aria-live="polite">
          {active === null ? (
            <p className="firefly-reveal__hint">поймай светлячка</p>
          ) : (
            <div className="firefly-reveal__card" key={active}>
              <span className="firefly-reveal__index">
                {String(active + 1).padStart(2, '0')} / {String(loveReasons.length).padStart(2, '0')}
              </span>
              <p>{loveReasons[active]}</p>
            </div>
          )}
        </div>

        <div className="firefly-progress" aria-hidden="true">
          {loveReasons.map((reason, index) => (
            <span key={reason} className={caught.includes(index) ? 'is-on' : ''} />
          ))}
        </div>
      </div>

      <div className="love-actions">
        {allCaught && <p className="firefly-done">Все причины пойманы ♡ но на самом деле их бесконечно больше.</p>}
        {caught.length > 0 && (
          <button className="button button--ghost" type="button" onClick={releaseFireflies}>
            Вернуть светлячков
          </button>
        )}
      </div>
    </section>
  );
}

export default LoveReasons;

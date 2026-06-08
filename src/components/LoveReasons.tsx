import { CSSProperties, MouseEvent, useEffect, useState } from 'react';
import { compliments, loveReasons } from '../data/birthdayData';
import { useReveal } from '../hooks/useReveal';

function LoveReasons() {
  const revealRef = useReveal<HTMLElement>();
  const [caughtReasons, setCaughtReasons] = useState<number[]>([]);
  const [openReasons, setOpenReasons] = useState<number[]>([]);
  const [complimentIndex, setComplimentIndex] = useState(0);

  const catchReason = (index: number) => {
    setCaughtReasons((caught) => (caught.includes(index) ? caught : [...caught, index]));
    setOpenReasons((open) => (open.includes(index) ? open.filter((item) => item !== index) : [...open, index]));
  };

  const nextCompliment = () => {
    setComplimentIndex((index) => (index + 1) % compliments.length);
  };

  useEffect(() => {
    const closeOpenNotes = () => setOpenReasons([]);

    document.addEventListener('click', closeOpenNotes);
    return () => document.removeEventListener('click', closeOpenNotes);
  }, []);

  const closeNotes = () => {
    setOpenReasons([]);
  };

  const stopGameClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <section className="section section--narrow reveal" id="love" ref={revealRef}>
      <div className="section-heading">
        <p className="eyebrow">Love query result</p>
        <h2>За что мы тебя любим</h2>
        <p>Поймай светлячков: в каждом спрятана причина, почему ты для нас такая особенная.</p>
      </div>

      <div className="firefly-game" aria-label="Интерактивные светлячки с причинами" onClick={closeNotes}>
        <div className="firefly-game__sky" aria-hidden="true" />
        {loveReasons.map((reason, index) => {
          const isCaught = caughtReasons.includes(index);
          const isOpen = openReasons.includes(index);
          const opensLeft = index % 4 === 3;
          const orbit = index % 4;

          return (
            <div
              className={[
                'firefly-cluster',
                `firefly-cluster--orbit-${orbit + 1}`,
                opensLeft ? 'firefly-cluster--left' : '',
                isOpen ? 'is-open' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              key={reason}
              style={
                {
                  '--x': `${10 + ((index * 19) % 74)}%`,
                  '--y': `${14 + ((index * 31) % 58)}%`,
                  '--float-delay': `${index * -0.72}s`,
                  '--float-duration': `${11 + orbit * 1.4}s`,
                } as CSSProperties
              }
            >
              <button
                aria-expanded={isOpen}
                aria-label={`Поймать светлячок ${index + 1}`}
                className={isCaught ? 'firefly is-caught' : 'firefly'}
                onClick={(event) => {
                  event.stopPropagation();
                  catchReason(index);
                }}
                type="button"
              >
                <span className="firefly__wing firefly__wing--left" />
                <span className="firefly__wing firefly__wing--right" />
                <span className="firefly__body" />
              </button>
              {isOpen && (
                <article className="firefly-note" onClick={stopGameClick}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{reason}</p>
                </article>
              )}
            </div>
          );
        })}

      </div>

      <div className="love-actions">
        {caughtReasons.length > 0 && (
          <button
            className="button button--ghost"
            type="button"
            onClick={() => {
              setCaughtReasons([]);
              setOpenReasons([]);
            }}
          >
            Вернуть светлячков
          </button>
        )}
        <div className="compliment-generator">
          <p>{compliments[complimentIndex]}</p>
          <button className="button button--primary" type="button" onClick={nextCompliment}>
            Сгенерировать комплимент
          </button>
        </div>
      </div>
    </section>
  );
}

export default LoveReasons;

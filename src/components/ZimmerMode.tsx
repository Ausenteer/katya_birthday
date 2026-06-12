import { CSSProperties } from 'react';
import { trackList } from '../data/birthdayData';
import { useReveal } from '../hooks/useReveal';

type ZimmerModeProps = {
  isEpic: boolean;
  onToggleEpic: () => void;
};

function ZimmerMode({ isEpic, onToggleEpic }: ZimmerModeProps) {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section className="section reveal zimmer" id="zimmer" ref={revealRef}>
      <div className="zimmer__content">
        <div className="section-heading section-heading--left">
          <p className="eyebrow">Zimmer Mode</p>
          <h2>Когда обычное поздравление становится эпичным.</h2>
          <p>
            Саундтрек этого года: больше побед, больше красоты, больше спокойствия, меньше созвонов
            без смысла, и финальная сцена, где ты счастливая идёшь по Лимасолу в закат.
          </p>
        </div>
        <button className="button button--primary" type="button" onClick={onToggleEpic}>
          {isEpic ? 'Оставить эпичность включённой' : 'Включить эпичность'}
        </button>
      </div>

      <div className="audio-card" aria-label="Декоративные аудио-волны">
        <div className="waveform" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, index) => (
            <span key={index} style={{ '--wave-index': index } as CSSProperties} />
          ))}
        </div>
        <ol className="tracklist">
          {trackList.map((track, index) => (
            <li key={track}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {track}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ZimmerMode;

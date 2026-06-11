import { CSSProperties, Fragment, useEffect, useState } from 'react';
import { predictions } from '../data/birthdayData';
import { useReveal } from '../hooks/useReveal';
import PredictionCard, { PredictionCardFront } from './PredictionCard';

const getColumns = () => {
  if (window.matchMedia('(max-width: 620px)').matches) return 2;
  if (window.matchMedia('(max-width: 920px)').matches) return 3;
  return 6;
};

function PredictionCards() {
  const revealRef = useReveal<HTMLElement>();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [burstKey, setBurstKey] = useState(0);
  const [columns, setColumns] = useState(() => getColumns());
  const selectedPrediction = predictions.find((p) => p.id === selectedId);

  const selectedIndex = predictions.findIndex((p) => p.id === selectedId);
  const revealAfterIndex =
    selectedIndex === -1
      ? -1
      : Math.min(predictions.length - 1, Math.ceil((selectedIndex + 1) / columns) * columns - 1);

  const selectPrediction = (id: string) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
      setBurstKey((v) => v + 1);
    }
  };

  useEffect(() => {
    const onResize = () => setColumns(getColumns());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedId]);

  return (
    <section className="section section--narrow reveal" id="cards" ref={revealRef}>
      <div className="section-heading">
        <p className="eyebrow">Analyst Tarot</p>
        <h2>
          Выбери карту
          <span>и узнай свое предсказание ♡</span>
        </h2>
        <p>Сегодня аналитика, магия и дружба сошлись в одном дашборде судьбы. Только проверенные предсказания.</p>
      </div>

      <div className="prediction-stage">
        <div className="cards-grid">
          {predictions.map((prediction, index) => (
            <Fragment key={prediction.id}>
              <PredictionCard
                isDimmed={selectedId !== null && selectedId !== prediction.id}
                isSelected={selectedId === prediction.id}
                prediction={prediction}
                onSelect={() => selectPrediction(prediction.id)}
              />
              {index === revealAfterIndex && selectedPrediction && (
                <div className="prediction-reveal" key={selectedPrediction.id}>
                  <div className="prediction-reveal__card" aria-hidden="true">
                    <PredictionCardFront prediction={selectedPrediction} />
                  </div>
                  <div className="prediction-reveal__panel">
                    <p className="prediction-result__label">Толкование карты</p>
                    <h3>{selectedPrediction.title}</h3>
                    <p>{selectedPrediction.text}</p>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <div className="spark-burst" key={burstKey} aria-hidden="true">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} style={{ '--burst-index': index } as CSSProperties} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PredictionCards;

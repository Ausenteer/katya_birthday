import { CSSProperties, useEffect, useState } from 'react';
import { predictions } from '../data/birthdayData';
import { useReveal } from '../hooks/useReveal';
import PredictionCard from './PredictionCard';

function PredictionCards() {
  const revealRef = useReveal<HTMLElement>();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [burstKey, setBurstKey] = useState(0);
  const [modalId, setModalId] = useState<string | null>(null);
  const selectedPrediction = predictions.find((p) => p.id === modalId);

  const selectPrediction = (id: string) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
      setBurstKey((v) => v + 1);
      setTimeout(() => setModalId(id), 500);
    }
  };

  const closeModal = () => {
    setModalId(null);
    setSelectedId(null);
  };

  useEffect(() => {
    if (!modalId) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalId]);

  return (
    <section className="section section--narrow reveal" id="cards" ref={revealRef}>
      <div className="section-heading">
        <p className="eyebrow">Analyst Tarot</p>
        <h2>
          Выбери карту
          <span>и узнай свое предсказание ♡</span>
        </h2>
        <p>Сегодня аналитика, магия и дружба сошлись в одном дашборде судьбы.</p>
      </div>

      <div className="prediction-stage">
        <div className="cards-grid">
          {predictions.map((prediction) => (
            <PredictionCard
              isSelected={selectedId === prediction.id}
              key={prediction.id}
              prediction={prediction}
              onSelect={() => selectPrediction(prediction.id)}
            />
          ))}
        </div>
        <div className="spark-burst" key={burstKey} aria-hidden="true">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} style={{ '--burst-index': index } as CSSProperties} />
          ))}
        </div>
      </div>

      {selectedPrediction && (
        <div className="prediction-modal" role="dialog" aria-modal="true" onClick={closeModal}>
          <div className="prediction-modal__card" onClick={(e) => e.stopPropagation()}>
            <p className="prediction-result__label">Толкование карты</p>
            <h3>{selectedPrediction.title}</h3>
            <p>{selectedPrediction.text}</p>
            <small>Спойлер: все карты хорошие. Потому что это про тебя.</small>
            <button className="button button--ghost" type="button" onClick={closeModal}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default PredictionCards;

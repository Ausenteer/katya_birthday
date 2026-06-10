import { PredictionIcon } from '../data/birthdayData';

type Prediction = {
  id: string;
  number: string;
  arcana: string;
  title: string;
  icon: PredictionIcon;
  text: string;
};

type PredictionCardProps = {
  prediction: Prediction;
  isSelected: boolean;
  onSelect: () => void;
};

const iconMap: Record<PredictionIcon, string> = {
  cake: '✦',
  gift: '◆',
  star: '★',
  chart: '▣',
  bolt: 'ϟ',
  sea: '≈',
};

function PredictionCard({ prediction, isSelected, onSelect }: PredictionCardProps) {
  return (
    <button
      aria-pressed={isSelected}
      className={isSelected ? 'prediction-card is-flipped' : 'prediction-card'}
      onClick={onSelect}
      type="button"
    >
      <span className="prediction-card__inner">
        <span className="prediction-card__face prediction-card__back">
          <span className="prediction-card__back-top">✦</span>
          <span className="prediction-card__back-seal">
            <span className="prediction-card__back-seal-inner">♡</span>
          </span>
          <span className="prediction-card__back-bottom">
            <span className="prediction-card__mark">Birthday Tarot</span>
            <span className="prediction-card__bottom">Katya Arcana</span>
          </span>
        </span>
        <span className="prediction-card__face prediction-card__front">
          <span className="prediction-card__number">{prediction.number}</span>
          <span className="prediction-card__icon">{iconMap[prediction.icon]}</span>
          <span className="prediction-card__arcana">{prediction.arcana}</span>
          <span className="prediction-card__title">{prediction.title}</span>
          <span className="prediction-card__bottom">birthday reading</span>
        </span>
      </span>
    </button>
  );
}

export default PredictionCard;

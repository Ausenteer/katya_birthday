import { useState } from 'react';

type GreetingCardProps = {
  greeting: {
    from: string;
    text: string;
  };
  index: number;
};

function GreetingCard({ greeting, index }: GreetingCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const initials = greeting.from.replace('От ', '').slice(0, 2);

  return (
    <article className={isOpen ? 'greeting-card is-open' : 'greeting-card'}>
      <div className="greeting-card__top">
        <span className="avatar">{initials}</span>
        <div>
          <p>Письмо {String(index + 1).padStart(2, '0')}</p>
          <h3>От {greeting.from}</h3>
        </div>
      </div>
      <p className="greeting-card__preview">{isOpen ? greeting.text : `${greeting.text.slice(0, 118)}...`}</p>
      <button className="button button--ghost" type="button" onClick={() => setIsOpen((value) => !value)}>
        {isOpen ? 'Свернуть письмо' : 'Открыть письмо'}
      </button>
    </article>
  );
}

export default GreetingCard;

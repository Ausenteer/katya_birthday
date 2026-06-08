import { limassolWishes } from '../data/birthdayData';
import { useReveal } from '../hooks/useReveal';

function LimassolWishes() {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section className="section section--narrow reveal" id="limassol" ref={revealRef}>
      <div className="limassol-card">
        <div className="section-heading">
          <p className="eyebrow">Limassol prophecy</p>
          <h2>Лимасольское предсказание</h2>
          <p>
            В этом году Лимасол официально назначается городом твоих красивых прогулок, внезапных
            радостей, вкусных ужинов, морского воздуха и вечеров, когда все наконец-то хорошо.
          </p>
        </div>
        <div className="wish-grid">
          {limassolWishes.map(([label, value]) => (
            <article className="wish-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LimassolWishes;

import katyaLemonPortrait from '../assets/katya-lemon-doll.webp';
import { birthdayGirl } from '../data/birthdayData';
import { useReveal } from '../hooks/useReveal';

type HeroSectionProps = {
  onStart: () => void;
};

function HeroSection({ onStart }: HeroSectionProps) {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section className="hero section reveal" id="hero" ref={revealRef}>
      <div className="hero__copy">
        <p className="eyebrow">{birthdayGirl.company} birthday edition</p>
        <h1>С днем рождения, {birthdayGirl.name}!</h1>
        <p className="script-line">Сегодня все для тебя</p>
        <p className="hero__lead">
          От нас троих с любовью, восхищением и полной уверенностью: ты невероятная.
        </p>
        <div className="hero__actions">
          <button className="button button--primary" type="button" onClick={onStart}>
            Начать расклад
          </button>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="portrait">
          <img className="portrait__photo" src={katyaLemonPortrait} alt="" />
          <div className="portrait__spark portrait__spark--one" />
          <div className="portrait__spark portrait__spark--two" />
          <div className="portrait__spark portrait__spark--three" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

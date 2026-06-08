import { greetings } from '../data/birthdayData';
import { useReveal } from '../hooks/useReveal';
import GreetingCard from './GreetingCard';

function GreetingsSection() {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section className="section reveal" id="greetings" ref={revealRef}>
      <div className="section-heading">
        <p className="eyebrow">Three friends theme</p>
        <h2>Поздравления от нас</h2>
        <p>Три письма, которые можно открыть в любом порядке.</p>
      </div>
      <div className="greetings-grid">
        {greetings.map((greeting, index) => (
          <GreetingCard greeting={greeting} index={index} key={greeting.from} />
        ))}
      </div>
    </section>
  );
}

export default GreetingsSection;

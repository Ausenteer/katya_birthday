import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

function FinalSection() {
  const revealRef = useReveal<HTMLElement>();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section final reveal" id="final" ref={revealRef}>
      <div className="final__card">
        <p className="eyebrow">Final prediction</p>
        <h2>Катя, с днем рождения ♡</h2>
        <p>
          Мы очень тебя любим. Ты умная, красивая, добрая, сильная, смешная, настоящая и невероятно
          ценная. Пусть этот год будет к тебе бережным. Пусть в нем будет много радости, любви,
          отдыха, красивых моментов и людей, рядом с которыми можно быть собой.
        </p>
        <button className="button button--primary" type="button" onClick={() => setIsOpen(true)}>
          Получить финальное предсказание
        </button>
      </div>

      {isOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="final-title">
          <button className="modal__backdrop" type="button" aria-label="Закрыть" onClick={() => setIsOpen(false)} />
          <div className="modal__card">
            <p className="eyebrow">Финальное предсказание</p>
            <h3 id="final-title">Год, в котором ты будешь много жить</h3>
            <p>
              Тебя ждет год, в котором ты будешь не только много успевать, но и много жить. И мы
              будем рядом, чтобы напоминать тебе, какая ты классная.
            </p>
            <button className="button button--ghost" type="button" onClick={() => setIsOpen(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FinalSection;

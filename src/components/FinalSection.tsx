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
          Говорят, с возрастом мир расколдовывается. Особенно у BI-аналитиков: у всего есть
          причина, следствие и, если очень повезет, дашборд. Любое «чудо» раскладывается на
          метрики, а необъяснимое — это просто то, к чему еще не подвели данные.
        </p>
        <p>
          Но мы, как видишь, построили целый сайт вопреки этому. Придумали тебе таро, нарисовали
          дашборд судьбы, честно посчитали в твоем составе бегемотиков Kinder, и вообще-то ни
          секунды не считаем это самообманом. Это осознанное сопротивление серости: когда любишь
          человека, хочется заколдовать мир обратно, хотя бы вокруг него.
        </p>
        <p>
          Умные книжки пишут, что истории превращают мир в родной дом. У тебя это уже получилось:
          ты прошла путь от пгт Грибановский до острова, который стал домиком, и сама разрулила
          все, что попадалось по дороге. Поэтому желаем тебе не «настоящих чудес», ты сама их
          автор. Желаем смелости и дальше быть автором собственных смыслов: сочинять свои истории
          и танцевать в солнечных лучах. Лучше всего, КИПРСКИХ.
        </p>
        <p>Мы очень тебя любим. И будем рядом, чтобы напоминать, какая ты невероятная.</p>
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
              Все карты, метрики и прочие надежные источники сходятся в одном: впереди год, в
              котором ты будешь не только много успевать, но и много жить. А если мир однажды
              покажется слишком расколдованным — у тебя есть люди, которые в любой момент готовы
              сочинить для тебя сказку. Например, вот эту.
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

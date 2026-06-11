import { chartBars, metrics, useCssNumber } from '../data/dashboardHelpers';
import { kpis, migrationStops } from '../data/birthdayData';
import { useReveal } from '../hooks/useReveal';
import KpiCard from './KpiCard';

function BirthdayDashboard() {
  const revealRef = useReveal<HTMLElement>();

  return (
    <section className="section reveal" id="dashboard" ref={revealRef}>
      <div className="section-heading">
        <p className="eyebrow">Servers.com x Birthday Analytics</p>
        <h2>Birthday BI Dashboard</h2>
        <p>Аналитика по самому ценному активу команды - Кате.</p>
      </div>

      <div className="dashboard">
        <div className="kpi-grid">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </div>

        <div className="dashboard__panel chart-panel">
          <div>
            <p className="panel-label">Work vs Rest</p>
            <h3>Баланс года</h3>
          </div>
          <div className="bar-chart">
            {chartBars.map((bar) => (
              <div className="bar-chart__row" key={bar.label}>
                <span>{bar.label}</span>
                <div className="bar-chart__track">
                  <span style={useCssNumber('--bar-width', bar.value)} />
                </div>
                <strong>{bar.value}%</strong>
              </div>
            ))}
          </div>
          <p className="dashboard-note">
            Вывод подружек: хоть аналитики считают, что всё в порядке. Наши графики показывают
            обратное. Следуй рекомендациям: уютного гнёздышка, больше встреч и тус с подружками и
            прогулок после обеда.
          </p>
        </div>

        <div className="dashboard__panel pie-panel">
          <div>
            <p className="panel-label">Composition</p>
            <h3>Из чего состоит Катя</h3>
          </div>
          <div className="pie-wrap">
            <div className="pie-chart-container">
              <div
                className="pie-chart"
                aria-label="25% любовь к красному, 25% мемология, 25% Kinder PR-менеджер, 125% исключительной притягательности"
              />
              <span className="pie-chart__kinder-label">
                <span className="pie-chart__kinder-k">k</span>inder
              </span>
              <span className="pie-chart__mem-label">мем</span>
              <svg className="pie-icon pie-icon--brain" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5a3 3 0 0 0-3 3 2.5 2.5 0 0 0-1.5 4.5A2.5 2.5 0 0 0 9 17a2.5 2.5 0 0 0 3 1 2.5 2.5 0 0 0 3-1 2.5 2.5 0 0 0 1.5-4.5A2.5 2.5 0 0 0 15 8a3 3 0 0 0-3-3Z" />
                <path d="M12 5v13" />
              </svg>
              <svg className="pie-icon pie-icon--book" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" />
              </svg>
              <svg className="pie-icon pie-icon--flower" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
              </svg>
              <svg className="pie-icon pie-icon--dress" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.5 3 12 6l3.5-3" />
                <path d="M8.5 3 7 8l2.5 1L7 20h10l-2.5-11L17 8l-1.5-5" />
              </svg>
              <svg className="pie-icon pie-icon--heart" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <svg className="pie-icon pie-icon--sparkle" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6Z" />
              </svg>
              <svg className="pie-icon pie-icon--inner pie-icon--sun" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
              </svg>
              <svg className="pie-icon pie-icon--inner pie-icon--crown" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 6l4 4 6-7 6 7 4-4-2 13H4Z" />
                <path d="M5 21h14" />
              </svg>
              <svg className="pie-icon pie-icon--inner pie-icon--coffee" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                <path d="M6 2v2M10 2v2M14 2v2" />
              </svg>
              <svg className="pie-icon pie-icon--inner pie-icon--music" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <ul>
              <li><span className="legend legend--one" />25% любовь к красному<small>если машину выбирал Коля, то почему она очень подходит к твоим балеткам?</small></li>
              <li><span className="legend legend--two" />25% мемология<small>ты могла бы говорить исключительно рилсами и шуточками, если бы не твои 5 уроков английского в неделю</small></li>
              <li><span className="legend legend--three" />25% Kinder PR-менеджер<small>бегемотики, карточки, криспи — это всё сюдаааа</small></li>
              <li><span className="legend legend--flower" aria-hidden="true">✿</span>125% исключительной притягательности</li>
            </ul>
          </div>
          <p className="dashboard-note">* Да, наш график выбился за 100%, но пусть в этом прекрасном BI-аналитике будет хоть что-то неидеально.</p>
        </div>

        <div className="dashboard__panel migration-panel">
          <div>
            <p className="panel-label">Migration history</p>
            <h3>Путь до домика</h3>
          </div>
          <div className="migration-track">
            {migrationStops.map((stop) => (
              <div className={stop.isHome ? 'migration-stop is-home' : 'migration-stop'} key={stop.place}>
                <span className="migration-stop__dot" aria-hidden="true" />
                <span className="migration-stop__text">
                  <strong>{stop.place}</strong>
                  <small>{stop.note}</small>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard__panel table-panel">
          <p className="panel-label">Data quality check</p>
          <h3>Birthday validation</h3>
          <div className="metric-table" role="table" aria-label="Метрики Кати">
            {metrics.map(({ metric, status, mark }) => (
              <div className="metric-table__row" role="row" key={metric}>
                {mark === 'heart' ? (
                  <svg className="metric-mark metric-mark--heart" viewBox="0 0 24 24" role="cell" aria-label="любим">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                ) : (
                  <svg className="metric-mark metric-mark--check" viewBox="0 0 24 24" role="cell" aria-label="проверено">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <path d="m8 12 3 3 5-6" />
                  </svg>
                )}
                <span role="cell">{metric}</span>
                <span className="metric-table__leader" aria-hidden="true" />
                <strong role="cell">{status}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BirthdayDashboard;

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
                  <span style={useCssNumber('--bar-width', Math.min(bar.value, 100))} />
                </div>
                <strong>{bar.value}%</strong>
              </div>
            ))}
          </div>
          <p className="dashboard-note">
            Вывод аналитиков: показатель отдыха требует срочного увеличения. Рекомендация: больше
            моря, красивых мест и вкусной еды. В данных обнаружена аномалия: необъяснимый рост
            запасов Kinder перед дедлайнами. Расследование продолжается.
          </p>
        </div>

        <div className="dashboard__panel pie-panel">
          <div>
            <p className="panel-label">Composition</p>
            <h3>Из чего состоит Катя</h3>
          </div>
          <div className="pie-wrap">
            <div
              className="pie-chart"
              aria-label="25% ум, 20% красота, 15% доброта, 15% бегемотики Kinder, 10% печеньки Kinder Cards, 10% чувство юмора, 5% магия"
            />
            <ul>
              <li><span className="legend legend--one" />25% ум</li>
              <li><span className="legend legend--two" />20% красота</li>
              <li><span className="legend legend--three" />15% доброта</li>
              <li><span className="legend legend--four" />15% бегемотики Kinder</li>
              <li><span className="legend legend--five" />10% печеньки Kinder Cards</li>
              <li><span className="legend legend--six" />10% чувство юмора</li>
              <li><span className="legend legend--seven" />5% магия</li>
            </ul>
          </div>
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
            {metrics.map(([metric, status]) => (
              <div className="metric-table__row" role="row" key={metric}>
                <span role="cell">{metric}</span>
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

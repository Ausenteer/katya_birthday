import { chartBars, metrics, useCssNumber } from '../data/dashboardHelpers';
import { kpis } from '../data/birthdayData';
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
            моря, красивых мест, вкусной еды и дней без "quick question".
          </p>
        </div>

        <div className="dashboard__panel pie-panel">
          <div>
            <p className="panel-label">Composition</p>
            <h3>Из чего состоит Катя</h3>
          </div>
          <div className="pie-wrap">
            <div className="pie-chart" aria-label="35% ум, 25% красота, 20% доброта, 10% юмор, 10% магия" />
            <ul>
              <li><span className="legend legend--one" />35% ум</li>
              <li><span className="legend legend--two" />25% красота</li>
              <li><span className="legend legend--three" />20% доброта</li>
              <li><span className="legend legend--four" />10% чувство юмора</li>
              <li><span className="legend legend--five" />10% магия</li>
            </ul>
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

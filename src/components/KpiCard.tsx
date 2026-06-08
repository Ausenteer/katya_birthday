type KpiCardProps = {
  label: string;
  value: string;
  caption: string;
};

function KpiCard({ label, value, caption }: KpiCardProps) {
  return (
    <article className="kpi-card">
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{caption}</span>
    </article>
  );
}

export default KpiCard;

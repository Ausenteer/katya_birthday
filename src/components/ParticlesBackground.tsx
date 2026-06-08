type ParticlesBackgroundProps = {
  isEpic: boolean;
};

function ParticlesBackground({ isEpic }: ParticlesBackgroundProps) {
  return (
    <div className={isEpic ? 'particles particles--epic' : 'particles'} aria-hidden="true">
      {Array.from({ length: 26 }).map((_, index) => (
        <span key={index} className={`particle particle--${(index % 7) + 1}`} />
      ))}
      <span className="orb orb--wine" />
      <span className="orb orb--gold" />
      <span className="orb orb--soft" />
    </div>
  );
}

export default ParticlesBackground;

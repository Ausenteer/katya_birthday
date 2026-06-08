import { sections } from '../data/birthdayData';

type SectionNavProps = {
  activeSection: string;
  onSelect: (id: string) => void;
};

function SectionNav({ activeSection, onSelect }: SectionNavProps) {
  return (
    <nav className="section-nav" aria-label="Навигация по поздравлению">
      {sections.map((section) => (
        <button
          className={activeSection === section.id ? 'section-nav__item is-active' : 'section-nav__item'}
          key={section.id}
          onClick={() => onSelect(section.id)}
          type="button"
        >
          <span>{section.number}</span>
          <span>{section.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default SectionNav;

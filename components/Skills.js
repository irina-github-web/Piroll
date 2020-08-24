const SKILLS_LIST = [
  {
    label: "UI/UX Design - 75%",
    percentage: "75%",
  },
  {
    label: "web development - 90%",
    percentage: "90%",
  },
  {
    label: "marketing - 65%",
    percentage: "65%",
  },
];

const ProgressLine = ({ label, percentage }) => {
  const [widths, setWidths] = React.useState(0);

  React.useEffect(() => {
    requestAnimationFrame(() => setWidths(percentage));
  }, [percentage]);

  return (
    <div className="skills__line">
      <span className="skills__line-label">{label}</span>
      <div className="skills__line-outer">
        <div
          className="skills__line-inner"
          style={{
            width: widths,
            transition: "width 2s",
          }}
        />
      </div>
    </div>
  );
};

export const Skills = () => (
  <div className="skills__list">
    {SKILLS_LIST.map((
      skill,
      index // index: static values
    ) => (
      <ProgressLine
        key={index}
        label={skill.label}
        percentage={skill.percentage}
      />
    ))}
  </div>
);

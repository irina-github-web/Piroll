const SKILLS_LIST = [
  {
    label: "UI/UX Design",
    percentage: "75%",
  },
  {
    label: "web development",
    percentage: "90%",
  },
  {
    label: "marketing",
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
      <div className="skills__line-label">{label}<span>{percentage}</span></div>
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

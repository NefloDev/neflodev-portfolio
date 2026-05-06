export default function ExperienceItem(title: string, startYear: string, endYear: string, tasks: Array<string>) {
  return (
    <div className="experience-item">
      <h2>{title}</h2>
      <h3>{startYear} - {endYear}</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

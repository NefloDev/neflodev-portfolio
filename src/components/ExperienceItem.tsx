import { ArrowUpRight } from ".";
import "../static/ExperienceItem.css";

interface ExperienceItemProps {
  title: string;
  startYear: string;
  endYear: string;
  description: string;
  url: string;
}

export default function ExperienceItem({
  title,
  startYear,
  endYear,
  description,
  url,
}: ExperienceItemProps) {
  return (
    <a
      className="experience-item"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ArrowUpRight />
      <div className="experience-date">
        <h3>
          {startYear} - {endYear}
        </h3>
      </div>
      <div className="experience-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}

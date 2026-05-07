import { ArrowUpRight } from ".";
import "../static/ProjectItem.css";

export default function ProjectItem( {title, description, url}: {
  title: string,
  description: string,
  url: string
}) {
  return (
    <a
      className="project-item"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ArrowUpRight />
      <div className="project-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}

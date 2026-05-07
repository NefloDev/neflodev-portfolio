import ExperienceBlock from "./ExperienceBlock";
import type { RepoInfo } from "../models/RepoInfo";
import ProjectItem from "./ProjectItem";

export default function RightPanel({ arrayItems }: { arrayItems: RepoInfo[] }) {
  return (
    <div>
      <div className="about">
        <p className="about-desc">
          Desarrollador de software especializado en el diseño, implementación y
          optimización de microservicios con Spring Boot. Poseo experiencia
          centrada en la construcción de soluciones escalables, la mejora del
          rendimiento y el tratamiento de grandes volúmenes de datos.
          <br />
          <br />
          Actualmente estoy trabajando en desarrollo de microservicios dentro de
          <strong>
            <a href="https://es.nttdata.com/"> NTT Data </a>
          </strong>
          donde me encargo de desarrollar y mantener aplicaciones backend,
          optimizar procesos y dar soporte técnico en proyectos con alto volumen
          de datos, colaborando con equipos y clientes en el seguimiento y
          evolución de soluciones.
          <br />
          <br />
          En mi tiempo libre suelo variar entre el gimnasio, la música, planes
          con amigos, pasar tiempo con mi gata o perder demasiadas horas entre
          videojuegos y series en las que “solo iba a ver un capítulo”.
        </p>
      </div>

      <div className="experience">
        <h2>Experiencia</h2>
        <ExperienceBlock />
      </div>

      <div className="projects">
        <h2>Proyectos</h2>
        <div className="project-list">
          {arrayItems
            .filter(
              (repo: RepoInfo) =>
                repo.visibility.match("public") != null &&
                repo.name !== "NefloDev",
            )
            .map((repo) => (
              <ProjectItem
                title={repo.name}
                description={repo.description}
                url={repo.html_url}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

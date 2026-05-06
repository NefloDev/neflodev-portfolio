import { useState, useEffect } from "react";
import pfp from "./static/assets/Geto.jpg";
import "./App.css";
import PictureCard from "./components/PictureCard";
import ExperienceBlock from "./components/ExperienceBlock";
import * as constants from "./constants";
import KnowledgeBlock from "./components/KnowledgeBlock";
import { RepoInfo } from "./models/RepoInfo";

export default function App() {
  const birthDate = new Date("2004-01-27");
  var timeDiff = Math.abs(Date.now() - birthDate.getTime());
  var age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);

  const [arrayItems, setArrayItems] = useState<RepoInfo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/NefloDev/repos`,
      );
      const data = await response.json();
      const mappedData = data.map(
        (item: {
          id: number;
          name: string;
          description: string;
          html_url: string;
          visibility: string;
        }) =>
          new RepoInfo(
            item.id,
            item.name,
            item.description,
            item.html_url,
            item.visibility,
          ),
      );
      setArrayItems(mappedData);
    };

    fetchRepos();
  }, []);

  return (
    <>
      <div className="web-app">
        <section id="introduction">
          <PictureCard img={pfp} />
          <div className="info">
            <h1>NefloDev</h1>
            <h2>Alejandro Nebot Flores</h2>
            <p>{age} años</p>
          </div>
        </section>

        <section id="about">
          <h1>Sobre mí</h1>
          <p className="about-desc">
            Desarrollador de software especializado en el diseño, implementación y optimización de microservicios con Spring Boot, con experiencia en entornos 
            empresariales de alta exigencia técnica. Poseo experiencia centrada en la construcción de soluciones escalables, la mejora del rendimiento y el tratamiento 
            de grandes volúmenes de datos.<br/><br/>

            Mi trayectoria se caracteriza por la rápida adquisición de responsabilidades técnicas, logrando ascensos anticipados gracias a la calidad, eficiencia 
            y consistencia de mi trabajo. Disfruto especialmente del análisis lógico complejo, la depuración avanzada, la optimización de recursos y el desarrollo 
            de arquitecturas orientadas a datos.<br/><br/>

            Mi objetivo profesional es evolucionar hacia roles técnicos especializados en Big Data o Data Science, contribuyendo al diseño de soluciones que 
            integren procesamiento masivo, ingeniería del dato e inteligencia artificial aplicada.<br/><br/>

            Busco siempre aportar valor a través de código limpio, decisiones técnicas fundamentadas y un enfoque orientado al rendimiento, la fiabilidad y la escalabilidad.
          </p>
        </section>

        <section id="experience">
          <h1>Experiencia</h1>
          <ExperienceBlock />
        </section>

        <section id="languages">
          <KnowledgeBlock itemList={constants.knownLanguages} title="Idiomas" />
        </section>

        <section id="technologies">
          <h1>Tecnologías</h1>
          <div className="technologies-block">
            {constants.techSkills.map((skill) => (
              <KnowledgeBlock itemList={skill.items} title={skill.title} />
            ))}
          </div>
        </section>

        <section id="projects">
          <h1>Proyectos</h1>
          <div className="project-list">
            {arrayItems
              .filter((repo: RepoInfo) => repo.visibility.match("public") != null && repo.name !== "NefloDev")
              .map((repo) => (
                <div key={repo.id}>
                  <a
                    className="title-link"
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                  <p>{repo.description}</p>
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}

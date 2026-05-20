import ExperienceBlock from "./ExperienceBlock";
import type { RepoInfo } from "../models/RepoInfo";
import ProjectItem from "./ProjectItem";
import { useTranslation } from "../i18n";

export default function RightPanel({ arrayItems }: { arrayItems: RepoInfo[] }) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="about">
        <p className="about-desc">{t("about.p1")}</p>
        <p className="about-desc">
          {t("about.p2_before")}
          <strong>
            <a href="https://es.nttdata.com/"> {t("about.p2_company")} </a>
          </strong>
          {t("about.p2_after")}
        </p>
        <p className="about-desc">{t("about.p3")}</p>
      </div>

      <div className="experience">
        <h2>{t("section.experience")}</h2>
        <ExperienceBlock />
      </div>

      <div className="projects">
        <h2>{t("section.projects")}</h2>
        <div className="project-list">
          {arrayItems
            .filter(
              (repo: RepoInfo) =>
                repo.visibility.match("public") != null &&
                repo.name !== "NefloDev" &&
                repo.name !== "neflodev-portfolio",
            )
            .map((repo) => (
              <ProjectItem
                key={repo.id}
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

import ExperienceItem from "./ExperienceItem";
import { useTranslation } from "../i18n";

export default function ExperienceBlock() {
  const { experienceItems } = useTranslation();

  return (
    <div className="experience-block">
      {experienceItems.map((item, i) => (
        <ExperienceItem
          key={`${item.title}-${i}`}
          title={item.title}
          startYear={item.startYear}
          endYear={item.endYear}
          description={item.description}
          url={item.url}
        />
      ))}
    </div>
  );
}

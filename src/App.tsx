import { useState, useEffect } from "react";
import "./App.css";
import { RepoInfo } from "./models/RepoInfo";
import RightPanel from "./components/RightPanel";
import { GithubLogo, LinkedinLogo, LanguageDropdown } from "./components";
import { I18nProvider, useTranslation } from "./i18n";

function AppContent() {
  const [arrayItems, setArrayItems] = useState<RepoInfo[]>([]);
  const { t, locale, setLocale } = useTranslation();

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
    <div className="web-app">
      <section id="left-panel">
        <div className="info">
          <h1>Alejandro Nebot Flores</h1>
          <h2 className="smaller-heading">{t("nav.subtitle")}</h2>
          <h2 className="secondary-heading">{t("nav.tagline")}</h2>
        </div>
        <LanguageDropdown locale={locale} setLocale={setLocale} />
        <div className="links">
          <GithubLogo />
          <LinkedinLogo />
        </div>
      </section>

      <section id="right-panel">
        <RightPanel arrayItems={arrayItems} />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}

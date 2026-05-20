/* eslint-disable react-refresh/only-export-components */

/**
 * ─── How to add a new language ───────────────────────────────────────────
 * 1. Create src/i18n/{code}.json  (e.g. fr.json for French)
 *    Copy the structure from en.json and translate all values.
 *
 * 2. Import the file below:        import fr from "./fr.json";
 *
 * 3. Register it in the object:    const translations = { en, es, fr };
 *
 * That's it. No other file needs to change.
 * ──────────────────────────────────────────────────────────────────────────
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

import en from "./en.json";
import es from "./es.json";

interface ExperienceItem {
  title: string;
  startYear: string;
  endYear: string;
  description: string;
  url: string;
}

interface I18nContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
  experienceItems: ExperienceItem[];
}

const translations: Record<string, unknown> = { en, es };

const DEFAULT_LOCALE = "es";
const FALLBACK_LOCALE = "en";

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState(() => {
    try {
      return localStorage.getItem("locale") || DEFAULT_LOCALE;
    } catch {
      return DEFAULT_LOCALE;
    }
  });

  const setLocale = useCallback((newLocale: string) => {
    if (!translations[newLocale]) return;
    setLocaleState(newLocale);
    try {
      localStorage.setItem("locale", newLocale);
    } catch {
      /* localStorage may be unavailable */
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      const current = translations[locale];
      if (current) {
        const value = getNestedValue(current, key);
        if (typeof value === "string") return value;
      }
      const fallback = translations[FALLBACK_LOCALE];
      if (fallback) {
        const value = getNestedValue(fallback, key);
        if (typeof value === "string") return value;
      }
      return key;
    },
    [locale],
  );

  const raw = translations[locale] ?? translations[FALLBACK_LOCALE];
  const experienceItems = (
    getNestedValue(raw, "experience") as ExperienceItem[] | undefined
  ) ?? [];

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, t, experienceItems }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return ctx;
}

import { useState, useEffect, useRef } from "react";

interface LanguageDropdownProps {
  locale: string;
  setLocale: (locale: string) => void;
}

const options = [
  { value: "es", label: "ES" },
  { value: "en", label: "EN" },
];

export default function LanguageDropdown({
  locale,
  setLocale,
}: LanguageDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={ref}>
      <button
        className="dropdown-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {locale.toUpperCase()}
        <span className={`dropdown-arrow ${open ? "open" : ""}`}>▾</span>
      </button>
      {open && (
        <div className="dropdown-menu" role="listbox">
          {options.map((opt) => (
            <button
              key={opt.value}
              role="option"
              aria-selected={locale === opt.value}
              className={`dropdown-item ${locale === opt.value ? "active" : ""}`}
              onClick={() => {
                setLocale(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

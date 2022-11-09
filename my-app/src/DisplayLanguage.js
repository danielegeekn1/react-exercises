import { useContext } from "react";
import { DisplayLanguage } from "./LanguageContext";
export function DisplayLanguageContext() {
  const language = useContext(DisplayLanguage);
  return (
    <div>
      <h3>Current language;{language}</h3>
    </div>
  );
}

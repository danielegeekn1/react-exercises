import { createContext } from "react";
export const DisplayLanguage = createContext("en");

//Create a LanguageContext and wrap a DisplayLanguage component within its provider
// Add a select tag to the component containing the DisplayLanguage component
//that allows the user to select the language, and pass it as a value to the Provider.

// I added the DisplayLanguage.Consumer in ClickCounter

//useContext ex
//Rewrite the DisplayLanguage component from Context 02 to be a function component
//and access the LanguageContext through the useContext hook.

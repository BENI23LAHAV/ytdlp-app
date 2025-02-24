import React, { useState } from "react";
import Input from "./Input";
import "../css/home.css";
import Select from "./Select";
import { type Format, type Quality } from "../lib/types";
import { CreateCommand } from "./CreateCommand";
import TugleBtn from "./TugleBtn";

function Home() {
  const [url, setUrl] = useState<string>("");
  const [format, setFormat] = useState<Format>("mp3");
  const [quality, setQuality] = useState<Quality>("128k");

  const [darkMode, setDarkMode] = useState(false);
  
  const [showUrl, setShowUrl] = useState<string | undefined>();
  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    if (url.startsWith("http://") || !url.startsWith("https://")) {
      alert("Please enter a valid url");
      setUrl("");
      return;
    }
    e.preventDefault();
    console.log(url, format, quality);
    setShowUrl(CreateCommand(url, format, quality));
    setUrl("");
  }

  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
      <TugleBtn darkMode={darkMode} setDarkMode={setDarkMode} />
      <h1>Home</h1>
      <Input url={url} setUrl={setUrl} />
      <Select
        format={format}
        setFormat={setFormat}
        quality={quality}
        setQuality={setQuality}
      />
      <button type="submit" onClick={handleSubmit}>
        ⬇️⬇️⬇️
      </button>
      <h2>your command is:</h2>
      <button
        onClick={() => {
          showUrl && navigator.clipboard.writeText(showUrl!);
        }}>
        Copy
      </button>
      <br />

      {showUrl && <p>{showUrl}</p>}
    </div>
  );
}
export default Home;

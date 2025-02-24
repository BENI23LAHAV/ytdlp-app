import React, { useState } from "react";
import Input from "./Input";
import "../css/home.css";

function Home() {
  const [url, setUrl] = useState<string>("");
  const [format, setFormat] = useState("");
  const [quality, setQuality] = useState("");
  return (
    <div className="home-container">
      <h1>Home</h1>
      <Input url={url} setUrl={setUrl} />
    </div>
  );
}

export default Home;

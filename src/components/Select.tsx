import { useEffect, useState } from "react";
import {
  Mp3Quality,
  type Format,
  type Quality,
  Mp4Quality,
} from "../lib/types";
function Select() {
  const [format, setFormat] = useState<Format>("mp3");
  const [quality, setQuality] = useState<Quality>("128k");
  useEffect(() => {
    if (format === "mp3") {
      if (Mp3Quality[quality]) {
        console.log(Mp3Quality[quality]);
      } else {
        console.log("Invalid quality, setting to 128k");
        setQuality(Mp3Quality["128k"]);
      }
    }
    if (format === "mp4") {
      if (Mp4Quality[quality]) {
        console.log(Mp4Quality[quality]);
      } else {
        console.log("Invalid quality, setting to 144p");
        setQuality(Mp4Quality["144p"]);
      }
    }
  }, [format, quality]);

  return (
    <div className="select">
      <h1>Select</h1>
      <div className="radio-format">
        {" "}
        <label htmlFor="format">Select your format</label>
        <br />
        MP3
        <input
          id="format"
          type="radio"
          value={"mp3"}
          name="format"
          onChange={() => setFormat("mp3")}
        />
        MP4
        <input
          id="format"
          type="radio"
          value={"mp4"}
          name="format"
          onChange={() => setFormat("mp4")}
        />
      </div>
      <div>
        <label htmlFor="quality">Select your quality</label>
        <br />
        <select
          name="quality"
          id="quality"
          onChange={(e) => setQuality(e.target.value as Quality)}>
          {format === "mp3" ? (
            <>
              <option value="128k"> 128k</option>
              <option value="192k"> 192k</option>
              <option value="320k"> 320k</option>
            </>
          ) : (
            <>
              <option value="144p"> 144p</option>
              <option value="240p"> 240p</option>
              <option value="360p"> 360p</option>
              <option value="720p"> 720p</option>
              <option value="1080p"> 1080p</option>
              <option value="1440p"> 1440p</option>
              <option value="2160p"> 2160p</option>
            </>
          )}
        </select>
      </div>
    </div>
  );
}

export default Select;

import { type Format, type Quality } from "../lib/types";

export function CreateCommand(url: string, format: Format, quality: Quality) {
  let command = "yt-dlp";

  switch (format) {
    case "mp3":
      command += ` -x --audio-format mp3 --audio-quality `;

      switch (quality) {
        case "128k":
          command += "8";
          break;
        case "192k":
          command += "5";
          break;
        case "320k":
          command += "0";
          break;
      }
      break;
    case "mp4":
      command += ` -f bestvideo[height<=${quality}]+bestaudio --merge-output-format mp4`;
      break;
  }

  command += ` ${url}`;
  console.log(command);
  return command;
}

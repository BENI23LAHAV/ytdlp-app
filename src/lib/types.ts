type Format = "mp3" | "mp4";

const Mp3Quality: Record<string, string> = {
  "128k": "128k",
  "192k": "192k",
  "320k": "320k",
} as const;

type Mp3Quality = keyof typeof Mp3Quality;

const Mp4Quality: Record<string, string> = {
  "144p": "144p",
  "240p": "240p",
  "360p": "360p",
  "480p": "480p",
  "720p": "720p",
  "1080p": "1080p",
  "1440p": "1440p",
  "2160p": "2160p",
} as const;

type Mp4Quality = keyof typeof Mp4Quality;

type Quality = Mp3Quality | Mp4Quality;
export { type Format, type Quality, Mp3Quality, Mp4Quality };

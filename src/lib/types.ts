type Format = "mp3" | "mp4";

const Mp3Quality: Record<string, string> = {
  "128k": "128k",
  "192k": "192k",
  "320k": "320k",
} as const;

type Mp3Quality = keyof typeof Mp3Quality;

const Mp4Quality: Record<string, string> = {
  "144": "144",
  "240": "240",
  "360": "360",
  "480": "480",
  "720": "720",
  "1080": "1080",
  "1440": "1440",
  "2160": "2160",
} as const;

type Mp4Quality = keyof typeof Mp4Quality;

type Quality = Mp3Quality | Mp4Quality;
export { type Format, type Quality, Mp3Quality, Mp4Quality };

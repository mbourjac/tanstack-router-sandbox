export const sleep: (ms?: number) => Promise<void> = (ms = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const randomSleep: (maxMs?: number) => Promise<void> = (maxMs = 1000) =>
  sleep(Math.random() * maxMs);

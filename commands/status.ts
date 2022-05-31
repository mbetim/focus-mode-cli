import { config } from "../src/utils/stores";

export const status = (): void => {
  const status = config.get("status");

  if (!status || !status.isRunning) return console.log("Focus mode is not running.");

  console.log(`Focus mode is running since ${new Date(status.startedAt).toLocaleString()}.`);
};

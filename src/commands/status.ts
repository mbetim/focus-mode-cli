import { intervalToDuration } from "date-fns";
import { config } from "../utils/stores";

export const status = (): void => {
  const status = config.get("status");

  if (!status || !status.isRunning) return console.log("Focus mode is not running.");

  const startedAtDate = new Date(status.startedAt);
  const interval = intervalToDuration({ start: startedAtDate, end: new Date() });

  console.log(
    `Focus mode is running for ${interval.hours} hours, ${interval.minutes} minutes and ${
      interval.seconds
    } seconds (started at ${startedAtDate.toLocaleString()}).`
  );
};

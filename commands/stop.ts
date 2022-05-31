import chalk from "chalk";
import * as fs from "fs";
import { config } from "../src/utils/stores";

const systemHostsFilePath = "C:\\Windows\\System32\\drivers\\etc\\hosts";

export const stop = (): void => {
  const hostsFile = fs.readFileSync(systemHostsFilePath);

  const domainsToBlock = config.get("domainsToBlock");

  console.log(`* Unblocking domains: ${domainsToBlock.join(", ")}`);

  const newFileContent = hostsFile
    .toString()
    .split("\n")
    .filter((line) => {
      for (const domain of domainsToBlock) {
        if (line.includes(domain)) return false;
      }

      return true;
    })
    .join("\n")
    .trim();

  fs.writeFileSync(systemHostsFilePath, newFileContent);

  config.set("status", { isRunning: false, startedAt: null });

  console.log(chalk.green.bold("Focus mode stopped."));
};

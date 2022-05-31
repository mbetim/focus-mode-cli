import chalk from "chalk";
import * as fs from "fs";
import { config } from "../src/utils/stores";
import inquirer from "inquirer";

const systemHostsFilePath = "C:\\Windows\\System32\\drivers\\etc\\hosts";

export const stop = async (): Promise<void> => {
  const { shouldStopFocusMode } = await inquirer.prompt<{ shouldStopFocusMode: boolean }>({
    type: "confirm",
    name: "shouldStopFocusMode",
    message: "Are you sure you want to stop focus mode?",
  });

  if (!shouldStopFocusMode) return console.log(chalk.red("Focus mode was not stopped."));

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

import chalk from "chalk";
import * as fs from "fs";
import { config } from "../src/utils/stores";

const systemHostsFilePath = "C:\\Windows\\System32\\drivers\\etc\\hosts";

export const start = () => {
  console.log(chalk.blueBright("Starting focus mode..."));
  const hostsFile = fs.readFileSync(systemHostsFilePath);

  const domainsToBlock = config.get("domainsToBlock");

  console.log(`* Blocking domains: ${domainsToBlock.join(", ")}`);
  domainsToBlock.forEach((domain) => {
    if (!hostsFile.includes(domain)) {
      fs.appendFileSync(systemHostsFilePath, `127.0.0.1 ${domain}\n127.0.0.1 www.${domain}\n\n`);
    }
  });

  config.set("status", { isRunning: true, startedAt: Date.now() });

  console.log(chalk.green.bold("Focus mode started."));
};

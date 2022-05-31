import chalk from "chalk";
import { config } from "../../src/utils/stores";

export const blockedDomainsRemove = (domain: string) => {
  const domainsToBlock = config.get("domainsToBlock");

  if (!domainsToBlock.includes(domain))
    return console.log(chalk.red(`* ${domain} is not blocked.`));

  domainsToBlock.splice(domainsToBlock.indexOf(domain), 1);
  config.set("domainsToBlock", domainsToBlock);

  console.log(chalk.green.bold(`* ${domain} will no longer be blocked.`));
};

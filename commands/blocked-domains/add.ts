import chalk from "chalk";
import { config } from "../../src/utils/stores";

export const blockedDomainsAdd = (domain: string) => {
  const domainsToBlock = config.get("domainsToBlock");

  if (domainsToBlock.includes(domain))
    return console.log(chalk.red(`* ${domain} is already blocked.`));

  domainsToBlock.push(domain);
  config.set("domainsToBlock", domainsToBlock);

  console.log(chalk.green.bold(`* ${domain} will now be blocked as well.`));
};

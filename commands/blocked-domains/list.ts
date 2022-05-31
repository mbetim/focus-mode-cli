import { config } from "../../src/utils/stores";

export const blockedDomainsList = () => {
  const domainsToBlock = config.get("domainsToBlock");

  const domainsListText = domainsToBlock
    .map((domain, index) => `${index + 1}. ${domain}`)
    .join("\n");

  console.log(`Domains to block:\n${domainsListText}`);
};

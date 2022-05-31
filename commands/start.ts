import * as fs from "fs";

const systemHostsFilePath = "C:\\Windows\\System32\\drivers\\etc\\hosts";
const domainsToBlock = ["youtube.com", "instagram.com", "twitter.com"];

export const start = () => {
  console.log("Starting focus mode...");
  const hostsFile = fs.readFileSync(systemHostsFilePath);

  console.log(`* Blocking domains: ${domainsToBlock.join(", ")}`);
  domainsToBlock.forEach((domain) => {
    if (!hostsFile.includes(domain)) {
      fs.appendFileSync(systemHostsFilePath, `127.0.0.1 ${domain}\n127.0.0.1 www.${domain}\n\n`);
    }
  });

  console.log("Focus mode started.");
};

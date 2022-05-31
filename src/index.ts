#! /usr/bin/env node

import { Command } from "commander";
import { blockedDomainsAdd } from "../commands/blocked-domains/add";
import { blockedDomainsList } from "../commands/blocked-domains/list";
import { blockedDomainsRemove } from "../commands/blocked-domains/remove";
import { start } from "../commands/start";
import { stop } from "../commands/stop";
import { isAdmin } from "./utils/is-admin";

if (!isAdmin()) {
  console.log("You are not an administrator.");
  process.exit(0);
}

const program = new Command();

program
  .name("Focus mode for Windows")
  .description("Start or stop focus mode for Windows.")
  .version("1.0.0");

program.command("start").description("Start a focus session").action(start);
program.command("stop").description("Stop the focus session").action(stop);

const blockedDomainsCommand = program
  .command("blocked-domains")
  .description('Commands for managing the "blocked domains" list');

blockedDomainsCommand
  .command("list")
  .description("List domains to block")
  .action(blockedDomainsList);

blockedDomainsCommand
  .command("add <domain>")
  .description("Add a domain to the list of domains to block")
  .action(blockedDomainsAdd);

blockedDomainsCommand
  .command("remove <domain>")
  .description("Remove a domain from the list of domains to block")
  .action(blockedDomainsRemove);

program.parse();

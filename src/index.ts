#! /usr/bin/env node

import { Command } from "commander";
import { blockedDomainsList } from "../commands/blocked-domains/list";
import { start } from "../commands/start";
import { isAdmin } from "./utils/is-admin";
import { config } from "./utils/stores";

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

const blockedDomainsCommand = program
  .command("blocked-domains")
  .description('Commands for managing the "blocked domains" list');

blockedDomainsCommand
  .command("list")
  .description("List domains to block")
  .action(blockedDomainsList);

program.parse();

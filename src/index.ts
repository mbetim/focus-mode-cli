import { Command } from "commander";
import { start } from "../commands/start";
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

program.parse();

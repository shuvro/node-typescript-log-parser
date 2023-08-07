import { program } from "commander";
import { parseLog } from "./App";

program
  .version("0.0.1")
  .requiredOption("-i, --input <file>", "Input log file")
  .requiredOption("-o, --output <file>", "Output error JSON file")
  .action(({ input, output }) => {
    parseLog(input, output);
  });

program.parse(process.argv);

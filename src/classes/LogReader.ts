import ILogEntry from "../interfaces/ILogEntry";
import { promises as fsPromises } from "fs";
export class LogReader {
  private readonly inputFile: string;

  constructor(inputFile: string) {
    this.inputFile = inputFile;
  }

  async readLogFile(): Promise<ILogEntry[]> {
    try {
      const fileContents = await fsPromises.readFile(this.inputFile, "utf-8");
      const logLines = fileContents.split("\n").filter((line) => line.trim() !== "");

      return logLines.map(line => {
        const [ISODate, logLevel, propsString] = line.split(" - ");
        const logProps = JSON.parse(propsString);
        return {ISODate, logLevel, ...logProps};
      });
    } catch (error) {
      throw new Error(`Error reading the log file: ${error}`);
    }
  }
}

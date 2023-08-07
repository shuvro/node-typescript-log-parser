import { writeFile } from "fs/promises";
import IErrorLogEntry from "../interfaces/IErrorLogEntry";

export class LogWriter {
  private readonly outputFile: string;

  constructor(outputFile: string) {
    this.outputFile = outputFile;
  }

  async writeErrorMessages(errorEntries: IErrorLogEntry[]) {
    const jsonString = JSON.stringify(errorEntries, null, 2);
    try {
      await writeFile(this.outputFile, jsonString, "utf-8");
    } catch (error) {
      throw new Error(`Error writing to the output file: ${error}`);
    }
  }
}

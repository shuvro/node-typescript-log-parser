import { LogReader } from "./LogReader";
import { LogFilter } from "./LogFilter";
import { LogWriter } from "./LogWriter";

export class LogParser {
  private logReader: LogReader;
  private logFilter: LogFilter;
  private logWriter: LogWriter;

  constructor(logReader: LogReader, logFilter: LogFilter, logWriter: LogWriter) {
    this.logReader = logReader;
    this.logFilter = logFilter;
    this.logWriter = logWriter;
  }

  async parseLogFile() {
    const logEntries = await this.logReader.readLogFile();
    const errorEntries = this.logFilter.filterMessagesByLevel(logEntries);
    await this.logWriter.writeErrorMessages(errorEntries);
  }
}

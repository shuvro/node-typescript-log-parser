import ILogLevelParser from "../interfaces/ILogLevelParser";
import ILogEntry from "../interfaces/ILogEntry";
import IErrorLogEntry from "../interfaces/IErrorLogEntry";

export class LogFilter {
  private logLevelParser: ILogLevelParser;

  constructor(logLevelParser: ILogLevelParser) {
    this.logLevelParser = logLevelParser;
  }

  filterMessagesByLevel(logEntries: ILogEntry[]): IErrorLogEntry[] {
    return logEntries
      .filter((entry) => this.logLevelParser.isLevel(entry))
      .map((entry) => this.formatErrorEntry(entry));
  }

  private formatErrorEntry({ ISODate, logLevel, transactionId, err }: ILogEntry): IErrorLogEntry {
    const timestamp = new Date(ISODate).valueOf();
    return { timestamp, logLevel, transactionId, err: err ?? "No Error Message" };
  }
}

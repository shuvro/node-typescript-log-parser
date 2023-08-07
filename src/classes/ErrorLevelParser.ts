import ILogLevelParser from "../interfaces/ILogLevelParser";
import ILogEntry from "../interfaces/ILogEntry";

export class ErrorLevelParser implements ILogLevelParser {
  isLevel(entry: ILogEntry): boolean {
    return entry.logLevel.toLowerCase() === "error";
  }
}

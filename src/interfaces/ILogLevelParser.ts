import ILogEntry from "./ILogEntry";

interface ILogLevelParser {
  isLevel(entry: ILogEntry): boolean;
}
export default ILogLevelParser;

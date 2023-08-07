import { LogReader } from "./classes/LogReader";
import { LogFilter } from "./classes/LogFilter";
import { LogWriter } from "./classes/LogWriter";
import { ErrorLevelParser } from "./classes/ErrorLevelParser";
import { LogParser } from "./classes/LogParser";

export const parseLog = async (input: string, output: string) => {
  const logReader = new LogReader(input);
  const logFilter = new LogFilter(new ErrorLevelParser());
  const logWriter = new LogWriter(output);

  const logParser = new LogParser(logReader, logFilter, logWriter);
  await logParser.parseLogFile();
};

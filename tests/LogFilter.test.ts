import { LogFilter } from "../src/classes/LogFilter";
import { ErrorLevelParser } from "../src/classes/ErrorLevelParser";
import ILogEntry from "../src/interfaces/ILogEntry";
import IErrorLogEntry from "../src/interfaces/IErrorLogEntry";

describe("LogFilter", () => {
  let logFilter: LogFilter;

  beforeEach(() => {
    const errorLevelParser = new ErrorLevelParser();
    logFilter = new LogFilter(errorLevelParser);
  });

  test("filterMessagesByLevel should return only error log entries", () => {
    const logEntries: ILogEntry[] = [
      {
        ISODate: "2022-01-01T00:00:00.000Z",
        logLevel: "error",
        transactionId: "12345",
        details: "Some error log details",
        err: "Some error log details",
      },
      {
        ISODate: "2022-01-02T00:00:00.000Z",
        logLevel: "info",
        transactionId: "67890",
        details: "Some info log details",
      },
    ];

    const expectedErrorEntries: IErrorLogEntry[] = [
      {
        timestamp: new Date("2022-01-01T00:00:00.000Z").valueOf(),
        logLevel: "error",
        transactionId: "12345",
        err: "Some error log details",
      },
    ];

    const result = logFilter.filterMessagesByLevel(logEntries);

    expect(result).toEqual(expectedErrorEntries);
  });

  test("filterMessagesByLevel should return an empty array if no error log entries are found", () => {
    const logEntries: ILogEntry[] = [
      {
        ISODate: "2022-01-01T00:00:00.000Z",
        logLevel: "info",
        transactionId: "12345",
        details: "Some info log details",
      },
      {
        ISODate: "2022-01-02T00:00:00.000Z",
        logLevel: "debug",
        transactionId: "67890",
        details: "Some debug log details",
      },
    ];

    const result = logFilter.filterMessagesByLevel(logEntries);

    expect(result).toEqual([]);
  });
});

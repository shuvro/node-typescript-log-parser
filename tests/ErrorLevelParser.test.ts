import { ErrorLevelParser } from "../src/classes/ErrorLevelParser";
import ILogEntry from "../src/interfaces/ILogEntry";

describe("ErrorLevelParser", () => {
  let errorLevelParser: ErrorLevelParser;

  beforeEach(() => {
    errorLevelParser = new ErrorLevelParser();
  });

  test("isLevel should return true for log entry with logLevel \"error\"", () => {
    const logEntry: ILogEntry = {
      ISODate: "2022-01-01T00:00:00.000Z",
      logLevel: "error",
      transactionId: "12345",
      details: "Some log details",
    };

    const result = errorLevelParser.isLevel(logEntry);

    expect(result).toBe(true);
  });

  test("isLevel should return false for log entry with logLevel other than \"error\"", () => {
    const logEntry: ILogEntry = {
      ISODate: "2022-01-01T00:00:00.000Z",
      logLevel: "info",
      transactionId: "12345",
      details: "Some log details",
    };

    const result = errorLevelParser.isLevel(logEntry);

    expect(result).toBe(false);
  });

  test("isLevel should return false for log entry without logLevel", () => {
    const logEntry: ILogEntry = {
      logLevel: "",
      ISODate: "2022-01-01T00:00:00.000Z",
      transactionId: "12345",
      details: "Some log details"
    };

    const result = errorLevelParser.isLevel(logEntry);

    expect(result).toBe(false);
  });
});

import { LogWriter } from "../src/classes/LogWriter";
import IErrorLogEntry from "../src/interfaces/IErrorLogEntry";
import * as fs from "fs";
import { readFile } from "fs/promises";

describe("LogWriter", () => {
  test("writeLogToFile should write log entries to a file", async () => {
    const logEntries: IErrorLogEntry[] = [
      {
        timestamp: 1628475171259,
        logLevel: "info",
        transactionId: "12345",
        err: "Some log details",
      },
      {
        timestamp: 1628475171259,
        logLevel: "error",
        transactionId: "67890",
        err: "Some error log details",
      },
    ];

    const filePath = "./tests/output.json";
    const logWriter =  new LogWriter(filePath);
    await logWriter.writeErrorMessages(logEntries);
    const fileContents = await readFile(filePath, "utf8");
    expect(JSON.parse(fileContents)).toEqual(logEntries);
    fs.unlinkSync(filePath);
  });

  test("writeLogToFile should handle empty log entries", async () => {
    const logEntries: IErrorLogEntry[] = [];
    const filePath = "./tests/output.json";
    const logWriter =  new LogWriter(filePath);
    await logWriter.writeErrorMessages(logEntries);
    fs.unlinkSync(filePath);
  });
});

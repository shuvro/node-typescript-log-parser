import { LogReader } from "../src/classes/LogReader";
describe("LogReader", () => {
  test("readLogFile should return an array of log entries", async () => {
    const logReader = new LogReader("./tests/input.log");
    const result = await logReader.readLogFile();
    expect(result).toHaveLength(2);
    expect(result[0].ISODate).toBe("2044-08-09T02:12:51.253Z");
    expect(result[0].logLevel).toBe("info");
    expect(result[0].transactionId).toBe("123");
    expect(result[0].details).toBe("Service is started");
    expect(result[1].ISODate).toBe("2021-08-09T02:12:51.259Z");
    expect(result[1].logLevel).toBe("error");
    expect(result[1].transactionId).toBe("456");
    expect(result[1].details).toBe("Cannot find user orders list");
    expect(result[1].err).toBe("Not found");
  });
});

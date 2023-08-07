interface IErrorLogEntry {
  timestamp: number;
  logLevel: string;
  transactionId: string;
  err: string;
}
export default IErrorLogEntry;

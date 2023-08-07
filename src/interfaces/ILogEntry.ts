interface ILogEntry {
  ISODate: string;
  logLevel: string;
  transactionId: string;
  details: string;
  err?: string;
  [key: string]: any;
}
export default ILogEntry;

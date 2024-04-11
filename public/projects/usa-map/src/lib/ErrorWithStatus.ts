export class ErrorWithStatus extends Error {
  status?: number;
  statusText?: string;

  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

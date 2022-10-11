class ErrorResponse extends Error {
  constructor(msg, statusCode, name) {
    super(msg);
    this.statusCode = statusCode;
    this.name = name;
  }
}

export default ErrorResponse;

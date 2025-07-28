export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details?: any;

  constructor(
    message: string,
    statusCode: number,
    isOperational = true,
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;
    Error.captureStackTrace(this);
  }
}
// Not found error
export class NotFoundError extends AppError {
  constructor(message = "Resources not found") {
    super(message, 404);
  }
}

export class ValidationError extends AppError {
  constructor(message = "Inavalid request data") {
    super(message, 400);
  }
}

export class AuthError extends AppError {
    constructor(message = "Unauthorized") {
        super(message,401)
    }
}
export class ForbiddenError extends AppError {
    constructor(message = "Forbidden Access") {
        super(message,403)
    }
}
export class DatabaseError extends AppError {
    constructor(message = "Database Access", details: any) {
        super(message,500, true, details)
    }
} 

export class RateLimitError extends AppError {
    constructor(message = "Too many requests! Please try again later") {
        super(message,429)
    }
}
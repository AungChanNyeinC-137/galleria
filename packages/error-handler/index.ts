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
  constructor(message = "Inavalid request data", details: any) {
    super(message, 400, true, details);
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

// 408 - Request Timeout
export class RequestTimeoutError extends AppError {
  constructor(message = "Request timeout") {
    super(message, 408);
  }
}

// 409 - Conflict (e.g., duplicate username/email)
export class ConflictError extends AppError {
  constructor(message = "Conflict occurred") {
    super(message, 409);
  }
}

// 422 - Unprocessable Entity (e.g., validation failed but syntactically correct)
export class UnprocessableEntityError extends AppError {
  constructor(message = "Unprocessable entity", details?: any) {
    super(message, 422, true, details);
  }
}

// 502 - Bad Gateway (e.g., downstream service failed)
export class BadGatewayError extends AppError {
  constructor(message = "Bad gateway") {
    super(message, 502);
  }
}

// 503 - Service Unavailable (e.g., DB or external API down)
export class ServiceUnavailableError extends AppError {
  constructor(message = "Service temporarily unavailable") {
    super(message, 503);
  }
}

// 504 - Gateway Timeout (e.g., proxy timed out waiting for response)
export class GatewayTimeoutError extends AppError {
  constructor(message = "Gateway timeout") {
    super(message, 504);
  }
}

'use strict';

class ValidationError extends Error {
    constructor (message) {
        super (message);

        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = 422;
    }
}

class RecordNotFoundError extends Error {
    constructor (message) {
        super (message);

        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = 404;
    }
}

class ServiceUnavailableError extends Error {
    constructor (message) {
        super (message);

        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = 503;
    }
}

class ForbiddenError extends Error {
    constructor (message) {
        super (message);

        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = 403;
    }
}

class UnauthorizedError extends Error {
    constructor (message) {
        super (message);

        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = 401;
    }
}

module.exports = {
    ValidationError: ValidationError,
    RecordNotFoundError: RecordNotFoundError,
    ServiceUnavailableError: ServiceUnavailableError,
    ForbiddenError: ForbiddenError,
    UnauthorizedError: UnauthorizedError
};


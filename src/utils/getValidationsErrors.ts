import { ValidationError } from "yup";

interface Errors {
    [key: string]: string;
}

interface ValidationErrors {
    inner: any[];
    path: string;
}

export default function getValidationErrors(err: ValidationErrors): Errors {
    const validationErrors: Errors = {};

    err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
    })

    return validationErrors;
}
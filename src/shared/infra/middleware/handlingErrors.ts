import { Response, Request, NextFunction } from 'express';
import AppError from '../../error/AppError';

export default (
  error: Error | AppError,
  request: Request,
  response: Response,
  next: NextFunction,
): Response => {
  if (error instanceof AppError) {
    return response.status(error.code).json({
      status: 'Error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  });
};

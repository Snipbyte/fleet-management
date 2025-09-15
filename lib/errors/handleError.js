import { NextResponse } from 'next/server';
import AppError from './AppError.js';

export function handleError(error) {
  if (error instanceof AppError) {
    return NextResponse.json(
      { status: 'error', message: error.message },
      { status: error.statusCode }
    );
  }

  return NextResponse.json(
    { status: 'error', message: 'Internal Server Error' },
    { status: 500 }
  );
}

import type { FC, PropsWithChildren } from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { ErrorBoundary } from 'react-error-boundary';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';

import { cn } from '../../utils/cn';

const ErrorFallback = ({ error }: FallbackProps) => {
    const isDevelopment = import.meta.env.DEV;

    return (
        <div
            role="alert"
            className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-lg border border-red-200 bg-gradient-to-br from-red-50 to-orange-50 px-6 py-12 text-center shadow-sm"
        >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                <HiOutlineExclamationTriangle className="h-8 w-8" />
            </div>

            <h2 className="mb-2 text-2xl font-semibold text-gray-900">
                Oops! Something went wrong
            </h2>

            {isDevelopment && error && (
                <div className="mb-6 w-full max-w-2xl">
                    <details className="group">
                        <summary className="cursor-pointer rounded-md bg-red-100 px-3 py-2 text-sm font-medium text-red-800 transition-colors hover:bg-red-200">
                            <span className="select-none">Show error details</span>
                        </summary>
                        <div className="mt-3 rounded-md border border-red-200 bg-white p-4">
                            <div className="mb-2 text-xs font-medium tracking-wide text-gray-500 uppercase">
                                Error Message
                            </div>
                            <div className="mb-4 rounded bg-gray-50 p-3 font-mono text-sm break-words text-red-600">
                                {error.message}
                            </div>
                            {error.stack && (
                                <>
                                    <div className="mb-2 text-xs font-medium tracking-wide text-gray-500 uppercase">
                                        Stack Trace
                                    </div>
                                    <pre className="overflow-x-auto rounded bg-gray-50 p-3 text-xs break-words whitespace-pre-wrap text-gray-700">
                                        {error.stack}
                                    </pre>
                                </>
                            )}
                        </div>
                    </details>
                </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
                <button
                    onClick={() => window.location.reload()}
                    className={cn(
                        'inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm',
                        'hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2',
                        'transition-colors duration-200',
                    )}
                >
                    Reload Page
                </button>
            </div>
            <div className="mt-8 text-center">
                <p className="text-xs text-gray-500">
                    If the problem persists, please
                    {' '}
                    <a
                        href="mailto:support@example.com"
                        className="text-red-600 underline hover:text-red-700"
                    >
                        contact support
                    </a>
                    {' '}
                    or
                    {' '}
                    <button
                        onClick={() => window.history.back()}
                        className="text-red-600 underline hover:text-red-700"
                    >
                        go back
                    </button>
                </p>
            </div>
        </div>
    );
};

export const AppErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
    const onError = (error: Error) => {
        console.log(error);
    };

    return (
        <ErrorBoundary fallbackRender={ErrorFallback} onError={onError}>
            {children}
        </ErrorBoundary>
    );
};

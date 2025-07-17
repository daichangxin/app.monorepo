import { Toaster } from '@eds-open/eds-ui';
import type { FC } from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '../home';

export const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Toaster />
            <Routes>
                <Route
                    path="/"
                    element={(
                        <Suspense fallback={<div />}>
                            <Main />
                        </Suspense>
                    )}
                />
            </Routes>
        </BrowserRouter>
    );
};

import { Toaster } from '@eds-open/eds-ui';
import type { FC } from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './home';

const BasicAuthMain = lazy(() => import('./basic-auth').then((module) => ({ default: module.Main })));

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
                <Route
                    path="/basic-auth"
                    element={(
                        <Suspense fallback={<div />}>
                            <BasicAuthMain />
                        </Suspense>
                    )}
                />
            </Routes>
        </BrowserRouter>
    );
};

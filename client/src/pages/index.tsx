import { FC, Suspense, lazy } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Main } from './home';

const BasicAuthMain = lazy(() => import('./basic-auth').then(({ Main }) => ({ default: Main })));

export const AppRoutes: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<div />}>
                            <Main />
                        </Suspense>
                    }
                />
                <Route
                    path="/basic-auth"
                    element={
                        <Suspense fallback={<div />}>
                            <BasicAuthMain />
                        </Suspense>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

import { FC, Suspense, lazy } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../../components/AppLayout';
import { IndexMain } from './components/IndexMain';

const BasicAuthMain = lazy(() => import('../../pages/basic-auth').then(({ Main }) => ({ default: Main })));

export const Index: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <AppLayout>
                            <Outlet />
                        </AppLayout>
                    }
                >
                    <Route
                        path="/"
                        element={
                            <Suspense fallback={<div />}>
                                <IndexMain />
                            </Suspense>
                        }
                    />
                </Route>
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

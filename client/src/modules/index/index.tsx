import { FC, Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../../components/AppLayout';
import { IndexMain } from './components/IndexMain';

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
            </Routes>
        </BrowserRouter>
    );
};

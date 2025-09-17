import { Toaster } from '@eds-open/eds-ui';
import type { FC } from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { AppLayout } from '@/components/AppLayout';

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
                            <AppLayout><Outlet /></AppLayout>
                        </Suspense>
                    )}
                >
                    <Route index element={<Main />} />
                    <Route path="*" element={<div>Page Not Found</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

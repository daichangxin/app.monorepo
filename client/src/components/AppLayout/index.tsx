import { FC, PropsWithChildren } from 'react';
import { AppNav } from '../AppNav';

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <AppNav />
            {children}
        </div>
    );
};

AppLayout.displayName = 'AppLayout';

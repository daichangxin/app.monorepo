import type { FC, PropsWithChildren } from 'react';
import { AppAsider } from '../AppAsider';
import { menus } from '@/services/app/appMenus';
import { cn } from '@/utils/cn';

type Props = {
    className?: string;
};

export const AppLayout: FC<PropsWithChildren<Props>> = ({ children, className }) => {
    return (
        <div className={cn('min-h-screen flex', className)}>
            <AppAsider menus={menus} />
            <main className="flex flex-1 flex-col">
                <header className="bg-gray-800 p-4 text-white">
                    <h1 className="text-2xl">Welcome</h1>
                </header>
                <section className="flex-1 p-4">
                    {children}
                </section>
            </main>
        </div>
    );
};

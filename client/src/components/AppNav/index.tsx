import { FC } from 'react';
import { Link } from 'react-router-dom';

export const AppNav: FC = () => {
    return (
        <header className="sticky left-0 right-0 top-0 w-full bg-white shadow">
            <div className="h-16">
                <div className="flex h-full w-full items-center justify-between px-6">
                    <Link to="/">AppNav</Link>
                </div>
            </div>
        </header>
    );
};

import { FC } from 'react';
import { Link } from 'react-router-dom';

export const AppNav: FC = () => {
    return (
        <header className="sticky top-0 left-0 right-0 bg-white w-full shadow">
            <div className="h-16">
                <div className="w-full h-full px-6 flex items-center justify-between">
                    <Link to="/">AppNav</Link>
                </div>
            </div>
        </header>
    );
};

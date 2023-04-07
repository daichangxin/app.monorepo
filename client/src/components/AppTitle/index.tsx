import { FC, useEffect } from 'react';

export const AppTitle: FC<{ title: string }> = ({ title }) => {
    useEffect(() => {
        document.title = title;
        return () => {
            document.title = '';
        };
    }, [title]);
    return null;
};
AppTitle.displayName = 'AppTitle';

import { FC, useEffect } from 'react';
import { UserView } from './components/UserView';

import { Login } from '../../modules/auth/components/Login';
import { useAuth } from '../../modules/auth/services/useAuth';

export const Main: FC = () => {
    const { user, signOut, fetchUser } = useAuth();

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center">
            {user ? (
                <UserView user={user} logout={signOut} />
            ) : (
                <div className="w-96">
                    <Login />
                </div>
            )}
        </div>
    );
};

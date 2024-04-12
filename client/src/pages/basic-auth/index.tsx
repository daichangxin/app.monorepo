import { useBoolean } from 'ahooks';
import type { FC } from 'react';
import { useEffect } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { Login } from '../../modules/auth/components/Login';
import { useAuth } from '../../modules/auth/services/useAuth';
import { UserView } from './components/UserView';

export const Main: FC = () => {
    const { user, signOut, fetchUser } = useAuth();
    const [loading, { setTrue, setFalse }] = useBoolean();

    useEffect(() => {
        setTrue();
        fetchUser().finally(setFalse);
    }, [fetchUser, setFalse, setTrue]);

    return (
        <div className="flex min-h-screen items-center justify-center">
            {loading ? (
                <AiOutlineLoading className="animate-spin" />
            ) : (
                <div className="w-96">{user ? <UserView user={user} logout={signOut} /> : <Login />}</div>
            )}
        </div>
    );
};

import { AiOutlineLoading } from 'react-icons/ai';

import { useBoolean } from 'ahooks';
import { FC, useEffect } from 'react';
import { UserView } from './components/UserView';

import { Login } from '../../modules/auth/components/Login';
import { useAuth } from '../../modules/auth/services/useAuth';

export const Main: FC = () => {
    const { user, signOut, fetchUser } = useAuth();
    const [loading, { setTrue, setFalse }] = useBoolean();

    useEffect(() => {
        setTrue();
        fetchUser().finally(setFalse);
    }, []);

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

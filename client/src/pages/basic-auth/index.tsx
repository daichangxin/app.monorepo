import { Toaster } from '@eds-open/eds-ui';
import { FC, useCallback, useEffect, useState } from 'react';
import { aw } from '../../server/aw';
import { Login } from './components/Login';
import { UserView } from './components/UserView';
import { User } from './services/user';

export const Main: FC = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User>();

    const fetchUser = useCallback(() => {
        aw.account
            .get()
            .then((res) => {
                setUser(res);
            })
            .catch(() => {
                //
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const onLoginSuccess = useCallback(() => {
        fetchUser();
    }, [fetchUser]);

    useEffect(fetchUser, [fetchUser]);

    if (loading) return <div>Loading...</div>;

    return (
        <>
            <Toaster />
            <div className="flex min-h-screen items-center justify-center">
                {user ? <UserView user={user} /> : <Login onLoginSuccess={onLoginSuccess} />}
            </div>
        </>
    );
};

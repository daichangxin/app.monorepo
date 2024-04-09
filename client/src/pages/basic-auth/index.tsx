import { Button, Toaster } from '@eds-open/eds-ui';
import { FC } from 'react';
import { aw } from '../../services/appwrite';
import { UserView } from './components/UserView';
import { FaGoogle } from "react-icons/fa";
import {useAuthByGoogle} from 'appwrite-auth';


export const Main: FC = () => {
    const {loading, user , login, logout} = useAuthByGoogle(aw.account);

    if (loading) return <div>Loading...</div>;
    return (
        <>
            <Toaster />
            <div className="flex min-h-screen items-center justify-center">
                {user ? <UserView user={user} logout={logout} /> : <Button className='w-80' onClick={login}><FaGoogle className='mr-4'/>Continue with Google</Button>}
            </div>
        </>
    );
};

import { Button } from '@eds-open/eds-ui';
import { Models } from 'appwrite';
import { FC } from 'react';

export const UserView: FC<{ user: Models.User<any>; logout: () => void }> = ({ user, logout }) => {
    return (
        <div className="flex flex-col items-center space-y-2">
            <p>Hi, there {user.email} 👏🏻</p>
            <Button className="w-60" onClick={logout}>
                Sign Out
            </Button>
        </div>
    );
};

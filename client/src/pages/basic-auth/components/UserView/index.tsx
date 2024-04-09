import { Button } from '@eds-open/eds-ui';
import { Models } from 'appwrite';
import { FC } from 'react';

export const UserView: FC<{ user: Models.User<any>; logout: () => void }> = ({ user, logout }) => {
    return (
        <div className="flex w-80 flex-col">
            Hi, there {user.email} 👏🏻
            <Button onClick={logout}>Sign Out</Button>
        </div>
    );
};

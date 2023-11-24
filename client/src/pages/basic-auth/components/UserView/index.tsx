import { Button } from '@eds-open/eds-ui';
import { FC, useCallback } from 'react';
import { aw } from '../../../../server/aw';
import { User } from '../../services/user';

export const UserView: FC<{ user: User }> = ({ user }) => {
    const onSignOutClick = useCallback(() => {
        aw.account.deleteSession('current').then(() => {
            window.location.reload();
        });
    }, []);
    return (
        <div className="flex w-80 flex-col">
            Hi, there {user.email} 👏🏻
            <Button onClick={onSignOutClick}>Sign Out</Button>
        </div>
    );
};

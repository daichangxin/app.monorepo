import { Button } from '@eds-open/eds-ui';
import type { FC } from 'react';
import type { User } from '../../../../modules/auth/services/useAuth';

export const UserView: FC<{ user: User; logout: () => void }> = ({ user, logout }) => {
    return (
        <div className="flex flex-col items-center space-y-2">
            <p>
                Hi, there
                {user.email}
                {' '}
                👏🏻
            </p>
            <Button className="w-60" onClick={logout}>
                Sign Out
            </Button>
        </div>
    );
};

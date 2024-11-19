import { aw } from '@/services/appwrite';
import { Button } from '@eds-open/eds-ui';
import type { FC } from 'react';
import { useCallback } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { EmailForm } from '../EmailForm';

export const Login: FC = () => {
    const onLoginByGoogleClick = useCallback(() => {
        aw.account.createOAuth2Session('google', window.location.href, window.location.href);
    }, []);

    const onLoginByGithubClick = useCallback(() => {
        aw.account.createOAuth2Session('github', window.location.href, window.location.href);
    }, []);

    return (
        <div className="flex flex-1 flex-col items-center space-y-4">
            <p className="text-2xl">Continue with Email</p>
            <EmailForm />
            <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background text-muted-foreground px-2">Or</span>
                </div>
            </div>
            <div className="w-full space-y-2">
                <Button className="w-full" variant="outline" onClick={onLoginByGoogleClick}>
                    <FaGoogle className="mr-2" />
                    Google
                </Button>
                <Button className="w-full" variant="outline" onClick={onLoginByGithubClick}>
                    <FaGithub className="mr-2" />
                    Github
                </Button>
            </div>
        </div>
    );
};

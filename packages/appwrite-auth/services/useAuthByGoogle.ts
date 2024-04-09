import { Account, Models } from 'appwrite';
import { useCallback, useEffect, useState } from "react";

type User = Models.User<Record<string, string>>;

export const useAuthByGoogle = (appwriteAccount:Account)=>{
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User>();

    const fetchUser = useCallback(() => {
        appwriteAccount
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

    const login = useCallback(() => {
        appwriteAccount.createOAuth2Session('google', window.location.href);
    }, []);

    const logout = useCallback(() => {
        appwriteAccount.deleteSession('current').then(() => {
            setUser(undefined);
        });
    }, []);

    useEffect(fetchUser, [fetchUser]);

    return {
        loading,
        user,
        login,
        logout,
    }
}

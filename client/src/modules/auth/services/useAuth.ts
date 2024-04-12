import type { Models } from 'appwrite';
import { ID } from 'appwrite';
import { create } from 'zustand';
import { aw } from '../../../services/appwrite';

export type User = Models.User<Models.Preferences>;

type State = {
    isLogin: boolean;
    user?: User;
    createUser: (email: string, password: string) => Promise<User | void>;
    fetchUser: () => Promise<User | void>;
    signOut: () => void;
};

export const useAuth = create<State>((set) => ({
    isLogin: false,
    user: undefined,
    createUser: async (email, password) => {
        return aw.account
            .create(ID.unique(), email, password)
            .then((res) => {
                set({ user: res, isLogin: true });
                return res;
            })
            .catch(() => {
                //
            });
    },
    fetchUser: async () => {
        return aw.account
            .get()
            .then((res) => {
                set({ user: res, isLogin: true });
                return res;
            })
            .catch(() => {
                //
            });
    },
    signOut: () => {
        return aw.account.deleteSession('current').then(() => {
            set({ user: undefined, isLogin: false });
        });
    },
}));

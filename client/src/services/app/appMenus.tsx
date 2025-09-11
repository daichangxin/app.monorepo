import type { ReactElement } from 'react';
import { AiFillProduct } from 'react-icons/ai';
import { FaHome, FaList } from 'react-icons/fa';

export type AppMenu = {
    key: string;
    label: string;
    icon: () => ReactElement;
    link: string;
    children?: AppMenu[];
};

export const menus: AppMenu[] = [
    {
        key: 'home',
        label: 'Home',
        icon: () => <FaHome />,
        link: '/',
        children: [],
    },
    {
        key: 'products',
        label: 'Products',
        icon: () => <AiFillProduct />,
        link: '/products',
        children: [
            {
                key: 'product-list',
                label: 'Product List',
                icon: () => <FaList />,
                link: '/products/list',
            },
        ],
    },
];

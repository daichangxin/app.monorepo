import { ScrollArea } from '@eds-open/eds-ui';
import type { FC } from 'react';
import { LuPawPrint } from 'react-icons/lu';
import { Link, useMatch } from 'react-router-dom';
import type { AppMenu } from '@/services/app/appMenus';
import { cn } from '@/utils/cn';

const MenuItem: FC<{ data: AppMenu }> = ({ data }) => {
    const isActive = useMatch({ path: data.link, end: true });

    return (
        <div className="pl-4">
            <Link
                to={data.link}
                className={cn('flex items-center gap-2 p-2', {
                    'bg-gray-300 text-blue-700 font-medium': isActive,
                    'text-gray-700 hover:bg-gray-300': !isActive,
                })}
            >
                {data.icon()}
                <span className="hidden text-sm group-hover:!inline-block">{data.label}</span>
            </Link>
            <div className="hidden group-hover:!block">
                {data.children && data.children.length > 0 && data.children.map(menu => {
                    return <MenuItem key={menu.key} data={menu} />;
                })}
            </div>
        </div>

    );
};

export const AppAsider: FC<{ menus: AppMenu[] }> = ({ menus }) => {
    return (
        <div className="relative w-20">
            <div className="group absolute top-0 left-0 z-10 flex h-screen w-20 flex-col bg-gray-200 pb-8 transition-all hover:w-56">
                <div className="my-8 flex items-center justify-center gap-2 text-2xl">
                    <LuPawPrint className="size-8" />
                    <span className="hidden font-semibold whitespace-nowrap group-hover:!inline-block">PawGame</span>
                </div>
                <ScrollArea className="flex-1">
                    {menus.map((menu) => (
                        <MenuItem key={menu.key} data={menu} />
                    ))}
                </ScrollArea>
            </div>
        </div>
    );
};

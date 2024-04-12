import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input, toast } from '@eds-open/eds-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { ID } from 'appwrite';
import type { FC } from 'react';
import { useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { aw } from '../../../../services/appwrite';
import { useAuth } from '../../services/useAuth';

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

type LoginType = 'login' | 'register';

export const EmailForm: FC = () => {
    const { fetchUser } = useAuth();
    const refType = useRef<LoginType>();

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = useCallback(
        (data: z.infer<typeof schema>) => {
            const { email, password } = data;
            if (refType.current === 'register') {
                aw.account
                    .create(ID.unique(), email, password)
                    .then(() => {
                        toast({
                            title: 'Welcome onboard!',
                            description: `You are now logged in as ${email}.`,
                        });
                        aw.account.createEmailSession(email, password).then(fetchUser);
                    })
                    .catch((err) => {
                        toast({
                            title: 'Error',
                            description: err.message || `Something went wrong.`,
                        });
                    });
            } else {
                aw.account
                    .createEmailSession(email, password)
                    .then(fetchUser)
                    .catch((err) => {
                        toast({
                            title: 'Error',
                            description: err.message || `Something went wrong.`,
                        });
                    });
            }
        },
        [fetchUser]
    );

    return (
        <Form {...form}>
            <div className="w-full space-y-2">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="name@example.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="password" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex space-x-6">
                    <Button
                        onClick={() => {
                            refType.current = 'login';
                            form.handleSubmit(onSubmit)();
                        }}
                        className="w-full"
                    >
                        Login
                    </Button>
                    <Button
                        onClick={() => {
                            refType.current = 'register';
                            form.handleSubmit(onSubmit)();
                        }}
                        className="w-full"
                        variant="outline"
                    >
                        Register
                    </Button>
                </div>
            </div>
        </Form>
    );
};

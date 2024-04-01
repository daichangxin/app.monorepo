import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, toast } from '@eds-open/eds-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { aw } from '../../../../services/appwrite';

const FormSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
});

export const Login: FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = useCallback(
        (data: z.infer<typeof FormSchema>) => {
            const { email, password } = data;
            aw.account
                .createEmailSession(email, password)
                .then(() => {
                    toast({
                        title: 'Welcome back!',
                        description: `You are now logged in as ${email}.`,
                    });
                    onLoginSuccess();
                })
                .catch(() => {
                    toast({
                        title: 'Error',
                        description: `Something went wrong.`,
                    });
                });
        },
        [onLoginSuccess]
    );

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="your email" {...field} />
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="your password" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
};


import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useFormState, useFormStatus } from 'react-dom';
import { AuthError } from "next-auth"
import { signIn, auth, providerMap } from "@/auth"
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default function Auth0LoginForm({ provider }: { provider: { id: string, name: string } }) {

    let imageSrc = '';
    if (provider.name === 'GitHub') {
        imageSrc = '/github-icon.png';
    } else if (provider.name === 'Google') {
        imageSrc = '/google-icon.png';
    } else if (provider.name === 'Discord') {
        imageSrc = '/discord-icon.png';
    }

    return (
        <form
            action={async () => {
                "use server"
                try {
                    await signIn(provider.id)
                } catch (error) {
                    // Signin can fail for a number of reasons, such as the user
                    // not existing, or the user not having the correct role.
                    // In some cases, you may want to redirect to a custom error
                    if (error instanceof AuthError) {
                        return redirect('/error')
                    }

                    // Otherwise if a redirects happens NextJS can handle it
                    // so you can just re-thrown the error and let NextJS handle it.
                    // Docs:
                    // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                    throw error
                }
            }}
        >
            <Button className="mt-4 w-full" type="submit">
                <Image
                    src={imageSrc}
                    width={30}
                    height={30}
                    alt="github logo"
                    className="mr-3"
                />
                <span>Sign in with {provider.name}</span>
            </Button>
        </form>
    );
}

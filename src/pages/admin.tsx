import React, { useState, FormEvent } from 'react';
import UpdateSiteOptions from '../components/UpdateSiteOptions';

export default function Admin() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            username: { value: string };
            password: { value: string };
        };

        const username = target.username.value.trim();
        const password = target.password.value.trim()


        if (username === process.env.NEXT_PUBLIC_ADMIN_USER_NAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    };


    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
            {!isLoggedIn ?
                <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                    <UpdateSiteOptions />
                </div>
                :
                <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                    <div className="w-full max-w-sm space-y-10">
                        <div>
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>
                        <form className="space-y-6" action="#" onSubmit={handleLogin}>
                            <div className="relative -space-y-px rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
                                <div>
                                    <label htmlFor="username" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        required
                                        className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Username"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>}
            {/* : */}
            {/* I want to build a form here that will allow me to add new articles to the database */}


        </>
    )
}

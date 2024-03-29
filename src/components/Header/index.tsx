import React, { ReactNode, HTMLAttributes, Fragment, useEffect, useState, useRef } from "react";
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Container } from "../Container";


// function DesktopNavigation(props) {
//     return (
//       <nav {...props}>
//         <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
//           <NavItem href="/writing">Writing</NavItem>
//           <NavItem href="/about">About</NavItem>
//           <NavItem href="/admin">Admin</NavItem>
//         </ul>
//       </nav>
//     )
//   }


interface CloseIconProps extends React.SVGProps<SVGSVGElement> { }

const CloseIcon: React.FC<CloseIconProps> = (props) => {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> { }

const ChevronDownIcon: React.FC<ChevronDownIconProps> = (props) => {
    return (
        <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
            <path
                d="M1.75 1.75 4 4.25l2.25-2.5"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

interface SunIconProps extends React.SVGProps<SVGSVGElement> { }

const SunIcon: React.FC<SunIconProps> = (props) => {
    return (
        <svg
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
            <path
                d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                fill="none"
            />
        </svg>
    );
};

interface MoonIconProps extends React.SVGProps<SVGSVGElement> { }

const MoonIcon: React.FC<MoonIconProps> = (props) => {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

interface MobileNavItemProps {
    href: string;
    children: React.ReactNode;
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ href, children }) => {
    return (
        <li>
            <Popover.Button as={Link} href={href} className="block py-2">
                {children}
            </Popover.Button>
        </li>
    );
};

interface MobileNavigationProps {
    className: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = (props) => {
    return (
        <Popover {...props}>
            <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                Menu
                <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
            </Popover.Button>
            <Transition.Root>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
                    >
                        <div className="flex flex-row-reverse items-center justify-between">
                            <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                            </Popover.Button>
                            <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                                Navigation
                            </h2>
                        </div>
                        <nav className="mt-6">
                            <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                                <MobileNavItem href="/about">About</MobileNavItem>
                                <MobileNavItem href="/">Writing</MobileNavItem>
                            </ul>
                        </nav>
                    </Popover.Panel>
                </Transition.Child>
            </Transition.Root>
        </Popover>
    );
};

interface NavItemProps {
    href: string;
    children: ReactNode;
}

interface DesktopNavigationProps extends HTMLAttributes<HTMLElement> {
    className: string;
}

function NavItem({ href, children }: NavItemProps) {
    let isActive = useRouter().pathname === href

    return (
        <li>
            <Link
                href={href}
                className={clsx(
                    'relative block px-3 py-2 transition',
                    isActive
                        ? 'text-teal-500 dark:text-teal-400'
                        : 'hover:text-teal-500 dark:hover:text-teal-400'
                )}
            >
                {children}
                {isActive && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
            </Link>
        </li>
    )
}

function DesktopNavigation(props: DesktopNavigationProps) {
    return (
        <nav {...props}>
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                <NavItem href="/">Writing</NavItem>
                <NavItem href="/about">About</NavItem>
                {/* <NavItem href="/admin">Admin</NavItem> */}
            </ul>
        </nav>
    );
}

function ModeToggle() {
    function disableTransitionsTemporarily() {
        document.documentElement.classList.add("[&_*]:!transition-none");
        window.setTimeout(() => {
            document.documentElement.classList.remove("[&_*]:!transition-none");
        }, 0);
    }

    function toggleMode() {
        disableTransitionsTemporarily();

        let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        let isSystemDarkMode = darkModeMediaQuery.matches;
        let isDarkMode = document.documentElement.classList.toggle("dark");

        if (isDarkMode === isSystemDarkMode) {
            delete window.localStorage.isDarkMode;
        } else {
            window.localStorage.isDarkMode = isDarkMode.toString();
        }
    }

    useEffect(() => {
        const handleSystemDarkModeChange = () => {
            let isSystemDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            let isDarkMode = document.documentElement.classList.contains("dark");

            if (isSystemDarkMode !== isDarkMode) {
                toggleMode();
            }
        };

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleSystemDarkModeChange);

        return () => {
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleSystemDarkModeChange);
        };
    });

    return (
        <button
            type="button"
            aria-label="Toggle dark mode"
            className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={toggleMode}
        >
            <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
            <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
        </button>
    );
}



export default function Header() {
    const headerRef = useRef(null);

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleScreenChange = (e: MediaQueryListEvent) => {
            setIsSmallScreen(e.matches);
        };

        setIsSmallScreen(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleScreenChange);

        return () => {
            mediaQuery.removeEventListener("change", handleScreenChange);
        };
    }, []);

    return (
        <>
            <header className="pointer-events-auto relative z-50 flex flex-col max-w-7xl mx-auto">
                <div ref={headerRef} className="top-0 z-10 h-16 pt-6">
                    <Container className="w-full">
                        <div className="flex justify-between">
                            <div className="flex flex-col items-baseline text-start">
                                <Link href="/">
                                    <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-200">
                                        {isSmallScreen ? "Alphonse" : "Alphonse Pierre"}
                                    </h1>
                                    <div className='ml-6'>
                                        <p className="text-sm text-zinc-400 dark:text-zinc-500">Writer | Pitchfork</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex flex-1 justify-end md:justify-center">
                            </div>
                            <div className="flex justify-end md:flex-1">
                                <MobileNavigation className="pointer-events-auto md:hidden" />
                                <DesktopNavigation className="pointer-events-auto hidden md:block" />
                                <div className="pointer-events-auto ml-4">
                                    <ModeToggle />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </header>
        </>
    );
};
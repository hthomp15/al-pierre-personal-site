import Link from "next/link";

import { TwitterIcon } from "../SocialIcons";
import { Container } from "../Container";

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  icon: React.ComponentType<{ className: string }>;
}

function SocialLink({ href, children, icon: Icon }: SocialLinkProps) {
  return (
    <li className="flex">
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <SocialLink href="https://twitter.com/Al_Peeair" icon={TwitterIcon}>
                  Follow me on Twitter
                </SocialLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Alphonse Pierre All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}

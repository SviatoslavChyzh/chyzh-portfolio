import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getDictionary } from '@/app/[lang]/dictionaries';
import type { Locale } from '@/app/types';
import NavLinks from '@/app/_components/NavLinks';
import MobileMenu from '@/app/_components/MobileMenu';
import ThemeToggle from '@/components/theme-toggle';
import LocaleSwitcher from '@/app/_components/LocaleSwitcher';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default async function NavBar({ lang }: { lang: Locale }) {
  const { navigation, navigationTitle } = await getDictionary(lang);
  const menuItems = Object.entries(navigation).map(([key, value]) => ({ name: value, href: key }));

  return (
    <header className="fixed top-0 z-10 flex h-[96px] w-full border-b border-white/10 shadow-xl backdrop-blur-lg">
      <div className="scroll-watcher"></div>
      <nav className="container flex items-center justify-between px-8 font-semibold">
        <Link href={`/${lang}`} className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/logo.png" alt="SC" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <span className="hidden text-gray-800 dark:text-white lg:block lg:text-2xl lg:font-bold">
            Sviatoslav Chyzh
          </span>
        </Link>
        <div className="hidden lg:flex">
          <NavLinks menuItems={menuItems} lang={lang} />
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <ThemeToggle />
            <LocaleSwitcher />
            <Link
              href="https://github.com/SviatoslavChyzh/chyzh-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline" size="icon">
                <Github />
              </Button>
            </Link>
          </div>

          {/*MobileMenu*/}
          <MobileMenu menuItems={menuItems} lang={lang} menuTitle={navigationTitle} />
        </div>
      </nav>
    </header>
  );
}

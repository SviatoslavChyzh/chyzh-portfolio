import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getDictionary } from '@/app/[lang]/dictionaries';
import type { Locale } from '@/app/types';
import NavLinks from '@/app/_components/NavLinks';
import MobileMenu from '@/app/_components/MobileMenu';
import ThemeToggle from '@/components/theme-toggle';
import LocaleSwitcher from '@/app/_components/LocaleSwitcher';

export default async function NavBar({ lang }: { lang: Locale }) {
  const { navigation, navigationTitle } = await getDictionary(lang);
  const menuItems = Object.entries(navigation).map(([key, value]) => ({ name: value, href: key }));

  return (
    <header className="fixed top-0 z-10 flex h-[96px] w-full border-b border-white/10 shadow-xl backdrop-blur-lg">
      <nav className="container flex items-center justify-between gap-4 font-semibold">
        <Link href={`/${lang}`} className="flex items-center gap-4">
          <Avatar className="my-4">
            <AvatarImage src="/logo.png" alt="SC" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <span className="text-gray-800 dark:text-white sm:text-lg sm:font-semibold lg:text-2xl lg:font-bold">
            Sviatoslav Chyzh
          </span>
        </Link>
        <div className="top-navigation hidden lg:flex">
          <NavLinks menuItems={menuItems} lang={lang} />
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <ThemeToggle />
            <LocaleSwitcher />
          </div>

          {/*MobileMenu*/}
          <div className="flex items-center gap-2 lg:hidden">
            <MobileMenu menuItems={menuItems} lang={lang} menuTitle={navigationTitle} />
          </div>
        </div>
      </nav>
    </header>
  );
}

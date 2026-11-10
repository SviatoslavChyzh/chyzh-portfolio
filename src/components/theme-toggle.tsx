'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

/**
 * Both icons are always rendered and swapped with the `dark:` variant, so the
 * button looks right on first paint and needs no "mounted" state.
 */
export default function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={label}
      title={label}
    >
      <Sun className="hidden dark:block" aria-hidden="true" />
      <Moon className="dark:hidden" aria-hidden="true" />
    </Button>
  );
}

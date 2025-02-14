'use client';

import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function LocaleSwitcher() {
  const params = useParams();
  const newLang = params.lang === 'en' ? 'de' : 'en';

  function handleLocaleSwitch() {
    window.location.href = `/${newLang}`;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={`Switch to ${newLang}`}
      onClick={handleLocaleSwitch}
    >
      {params.lang === 'en' ? '🇩🇪' : '🇬🇧'}
    </Button>
  );
}

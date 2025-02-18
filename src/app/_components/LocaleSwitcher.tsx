'use client';

import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
      {params.lang === 'en' ? (
        <Image src="/german-flag.jpg" height="25" width="25" alt="german-flag" />
      ) : (
        <Image src="/british-flag.jpg" height="25" width="25" alt="british-flag" />
      )}
    </Button>
  );
}

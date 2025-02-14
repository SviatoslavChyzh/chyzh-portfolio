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
    <div className="locale-switcher">
      <Button
        variant="outline"
        size="icon"
        aria-label={`Switch to ${newLang}`}
        onClick={handleLocaleSwitch}
      >
        {params.lang === 'en' ? '🇩🇪' : '🇬🇧'}
      </Button>
    </div>
  );
}

function BritainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="h-16">
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function GermanyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3">
      <path d="M0 0h5v3H0z" />
      <path fill="#D00" d="M0 1h5v2H0z" />
      <path fill="#FFCE00" d="M0 2h5v1H0z" />
    </svg>
  );
}

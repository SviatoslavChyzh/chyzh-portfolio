'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const flags: Record<string, string> = {
  en: '/british-flag.jpg',
  de: '/german-flag.jpg',
} as const;

export default function LocaleSwitcher() {
  const params = useParams();
  const currentLang = params.lang as string;
  const newLang = currentLang === 'en' ? 'de' : 'en';

  function handleLocaleSwitch(value: string) {
    window.location.href = `/${value}`;
  }

  return (
    <Select value={params.lang as string} onValueChange={handleLocaleSwitch}>
      <SelectTrigger aria-label={`Switch to ${newLang}`}>
        <SelectValue>
          <Image src={flags[currentLang] as string} height="15" width="25" alt="flag" />
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem className="hover:cursor-pointer" value={newLang}>
            <div className="flex gap-2">
              <span>{newLang}: </span>
              <Image src={flags[newLang] as string} height="15" width="25" alt="flag" />
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

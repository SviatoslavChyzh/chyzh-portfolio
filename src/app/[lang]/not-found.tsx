import { ArrowLeft } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <main
      id="main"
      tabIndex={-1}
      className="shell flex flex-1 flex-col items-center justify-center gap-4 pt-(--header-height) pb-16 text-center focus:outline-none"
    >
      <p className="text-primary mt-16 text-sm font-semibold tracking-widest uppercase">404</p>
      <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{t('title')}</h1>
      <p className="text-muted-foreground max-w-md text-lg text-pretty">{t('description')}</p>
      <Button asChild size="lg" className="mt-4">
        <Link href="/">
          <ArrowLeft aria-hidden="true" />
          {t('backHome')}
        </Link>
      </Button>
    </main>
  );
}

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  /** Referenced by the section's `aria-labelledby`. */
  id: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'center' | 'start';
  className?: string;
};

export default function SectionHeading({
  id,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <h2 id={id} className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-3 text-lg text-pretty">{description}</p>
      ) : null}
    </div>
  );
}

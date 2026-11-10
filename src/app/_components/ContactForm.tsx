'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useForm,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_LIMITS, createContactSchema, type ContactFormValues } from '@/lib/contact';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<Status>('idle');
  const isSubmitting = status === 'submitting';

  const schema = useMemo(
    () =>
      createContactSchema({
        nameMin: t('errors.nameMin'),
        nameMax: t('errors.nameMax'),
        email: t('errors.email'),
        subjectMax: t('errors.subjectMax'),
        messageMin: t('errors.messageMin'),
        messageMax: t('errors.messageMax'),
      }),
    [t],
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { username: '', email: '', subject: '', message: '' },
    mode: 'onTouched',
  });

  async function onSubmit(values: ContactFormValues) {
    if (isSubmitting) {
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="mt-6 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('name')}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t('namePlaceholder')}
                    autoComplete="name"
                    maxLength={CONTACT_LIMITS.nameMax}
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('email')}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    inputMode="email"
                    placeholder={t('emailPlaceholder')}
                    autoComplete="email"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t('subject')}{' '}
                <span className="text-muted-foreground font-normal">({t('optional')})</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={t('subjectPlaceholder')}
                  maxLength={CONTACT_LIMITS.subjectMax}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem hasDescription>
              <FormLabel>{t('message')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('messagePlaceholder')}
                  rows={6}
                  maxLength={CONTACT_LIMITS.messageMax}
                  required
                  {...field}
                />
              </FormControl>
              <FormDescription>{t('messageHint')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* aria-disabled keeps the button focusable while the request is running. */}
        <Button
          type="submit"
          size="lg"
          className="w-full aria-disabled:cursor-progress aria-disabled:opacity-70"
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? (
            <LoaderCircle className="motion-safe:animate-spin" aria-hidden="true" />
          ) : (
            <Send aria-hidden="true" />
          )}
          {isSubmitting ? t('submitting') : t('submit')}
        </Button>

        {/* Always in the DOM so screen readers announce the result when it changes. */}
        <div role="status" aria-live="polite">
          {status === 'success' ? (
            <p className="text-success flex items-start gap-2 text-sm font-medium">
              <CircleCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {t('success')}
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="text-destructive flex items-start gap-2 text-sm font-medium">
              <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {t('error')}
            </p>
          ) : null}
        </div>
      </form>
    </Form>
  );
}

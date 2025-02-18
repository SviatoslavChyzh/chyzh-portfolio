'use client';

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
import { Send } from 'lucide-react';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(50),
  subject: z.string().max(50),
  email: z.string().email('Invalid email address.'),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(500),
});

export type ContactFormType = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      subject: '',
      email: '',
      message: '',
    },
    mode: 'onTouched',
  });

  async function onSubmit(values: ContactFormType) {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('username', values.username);
    formData.append('email', values.email);
    formData.append('message', values.message);
    formData.append('subject', values.subject);

    const response = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        username: formData.get('username'),
        email: formData.get('email'),
        message: formData.get('message'),
        subject: formData.get('subject'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: { error?: string } = await response.json();
    const { error } = data;

    if (error) {
      toast({
        title: 'Error',
        description: error,
        variant: 'destructive',
      });
      setIsSubmitting(false);

      return;
    }

    toast({
      title: 'Success',
      description: 'Your message has been sent.',
    });

    setIsSubmitting(false);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Enter the subject" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" {...field} />
              </FormControl>
              <FormDescription>Your message must be at least 10 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          {isSubmitting ? 'Sending...' : 'Send Message'} <Send />
        </Button>
      </form>
    </Form>
  );
}

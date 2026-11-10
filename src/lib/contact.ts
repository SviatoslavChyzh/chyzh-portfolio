import { z } from 'zod';

/** Limits shared by the contact form (client) and the `/api/send` route (server). */
export const CONTACT_LIMITS = {
  nameMin: 2,
  nameMax: 50,
  subjectMax: 50,
  messageMin: 10,
  messageMax: 500,
} as const;

type ContactErrorMessages = {
  nameMin: string;
  nameMax: string;
  email: string;
  subjectMax: string;
  messageMin: string;
  messageMax: string;
};

/** Builds the contact schema; pass translated messages on the client. */
export function createContactSchema(messages?: ContactErrorMessages) {
  return z.object({
    username: z
      .string()
      .trim()
      .min(CONTACT_LIMITS.nameMin, messages?.nameMin)
      .max(CONTACT_LIMITS.nameMax, messages?.nameMax),
    email: z.email(messages?.email),
    subject: z.string().trim().max(CONTACT_LIMITS.subjectMax, messages?.subjectMax),
    message: z
      .string()
      .trim()
      .min(CONTACT_LIMITS.messageMin, messages?.messageMin)
      .max(CONTACT_LIMITS.messageMax, messages?.messageMax),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;

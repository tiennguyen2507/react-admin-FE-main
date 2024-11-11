import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  avatar: z.string().or(z.null()).optional(),
  address: z.string().or(z.null()).optional(),
});

export type FieldValue = z.infer<typeof userSchema>;

export const columnsTable = [
  { key: 'fullName', label: 'name' },
  { key: 'avatar', label: 'avatar' },
  { key: 'email', label: 'email' },
  { key: 'address', label: 'address' },
  { key: 'action', label: '' },
];

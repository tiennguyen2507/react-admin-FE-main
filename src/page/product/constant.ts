import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.enum(['bakery', 'accessory', 'other']),
});

export type FieldValue = z.infer<typeof productSchema>;

export const columnsTable = [
  { key: 'fullName', label: 'name' },
  { key: 'avatar', label: 'avatar' },
  { key: 'email', label: 'email' },
  { key: 'address', label: 'address' },
  { key: 'action', label: '' },
];

export const categoryOptions = [
  { label: 'Bánh kem', key: 'bakery' },
  { label: 'Phụ kiên', key: 'accessory' },
  { label: 'Khác', key: 'other' },
];

export const sizeOptions = [
  { label: 'S', key: 'S' },
  { label: 'M', key: 'M' },
  { label: 'L', key: 'L' },
];

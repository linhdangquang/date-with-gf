'use server';

import { database, ID } from '@/lib/appwrite';

export async function saveDatingData(data: any): Promise<boolean> {
  const res = await database.createDocument(
    '670a4aa50002b16dd5f4',
    '670a4ab3000c07e9ee72',
    ID.unique(),
    data
  );
  if (res.$id) {
    return true;
  }
  return false;
}

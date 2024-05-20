'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    user: formData.get('user') as string,
  }

  const { error, data: session } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password
  })

  if (error) {
    return { error: true };
  }

  
  switch (data.user.toLowerCase()) {
    case 'manager':
      revalidatePath('/manager');
      redirect('/manager');
      break;
    case 'mechanic':
      revalidatePath('/mechanic');
      redirect('/mechanic');
      break;
    case 'client':
      revalidatePath('/client');
      redirect('/client');
      break;
    default:
      revalidatePath('/error');
      redirect('/error');
      break;
  }

  return { error: false };
}


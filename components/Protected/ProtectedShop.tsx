// components/ProtectedShop.js

import React from 'react';
import { useSession } from 'next-auth/react';
import Shop from '@/app/(user)/cart/page';
import Login from '@/app/(auth)/login/page';

export default function ProtectedShop() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {session ? <Shop /> : <Login />}
    </div>
  );
}

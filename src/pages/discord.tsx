import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DiscordCallback() {
  const router = useRouter();

  useEffect(() => {
    const code = router.query.code as string;
    if (!code) return;

    const login = async () => {
      const res = await fetch('/api/auth/discord', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });

      const user = await res.json();
      console.log('Logged in user:', user);

      if (user.id) {
        router.push('/dashboard'); // oder wohin du willst
      }
    };

    login();
  }, [router.query.code]);

  return <p>Logging in with Discord...</p>;
}

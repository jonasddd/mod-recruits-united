import { useEffect } from 'react';

const DISCORD_CLIENT_ID = '1375104763917504633';
const REDIRECT_URI = encodeURIComponent('https://neverlandmodappli.vercel.app/'); // Callback-URL auf deinem Server
const DISCORD_OAUTH_URL = `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=identify%20email`;

const DiscordAuth = () => {
  const handleLogin = () => {
    window.location.href = DISCORD_OAUTH_URL;
  };

  return (
    <div className="text-center py-12">
      <h3 className="text-2xl font-bold mb-4">Login with Discord</h3>
      <button
        onClick={handleLogin}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
      >
        Login with Discord
      </button>
    </div>
  );
};

export default DiscordAuth;
// pages/auth/discord.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const DiscordCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchDiscordUser = async () => {
      const code = router.query.code as string;

      if (!code) return;

      try {
        const response = await fetch('/api/auth/discord', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        const data = await response.json();
        console.log('User Data:', data);

        // Jetzt kannst du weiterleiten oder den User in Zustand setzen
        router.push('/dashboard');
      } catch (error) {
        console.error('Discord login failed:', error);
      }
    };

    fetchDiscordUser();
  }, [router]);

  return <p>Logging in with Discord...</p>;
};

export default DiscordCallback;
// pages/api/auth/discord.ts (Next.js Beispiel)
export default async function handler(req, res) {
  const { code } = req.body;

  const params = new URLSearchParams();
  params.append('client_id', process.env.DISCORD_CLIENT_ID!);
  params.append('client_secret', process.env.DISCORD_CLIENT_SECRET!);
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', 'https://neverland-mod.vercel.app/auth/discord');
  params.append('scope', 'identify email');

  try {
    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const tokenData = await tokenRes.json();

    const userRes = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    const userData = await userRes.json();

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: 'OAuth failed' });
    const DISCORD_CLIENT_ID = '1375104763917504633';
const REDIRECT_URI = encodeURIComponent('https://neverland-mod.vercel.app/auth/discord'); // Deine eigene Callback-URL
const DISCORD_OAUTH_URL = `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=identify%20email`;

export default function DiscordAuth() {
  const handleLogin = () => {
    window.location.href = DISCORD_OAUTH_URL;
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-bold mb-4">Login mit Discord</h2>
      <button
        onClick={handleLogin}
        className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700"
      >
        Discord Login
      </button>
    </div>
  );
}



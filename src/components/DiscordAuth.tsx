import { useEffect } from 'react';

const DISCORD_CLIENT_ID = '1375104763917504633';
const REDIRECT_URI = encodeURIComponent('https://neverland-mod.vercel.app/auth/discord'); // Callback-URL auf deinem Server
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

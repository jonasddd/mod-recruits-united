
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function DiscordCallback() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleDiscordCallback = async () => {
      const code = router.query.code as string;
      const error = router.query.error as string;

      if (error) {
        setError('Discord login was cancelled or failed');
        setLoading(false);
        return;
      }

      if (!code) {
        return; // Still loading
      }

      try {
        const response = await fetch('/api/auth/discord', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        if (!response.ok) {
          throw new Error('Failed to authenticate with Discord');
        }

        const userData = await response.json();
        console.log('Discord login successful:', userData);

        // Store user data in localStorage
        localStorage.setItem('discordUser', JSON.stringify(userData));
        localStorage.setItem('isDiscordLoggedIn', 'true');

        // Redirect back to application form
        router.push('/#application');
      } catch (error) {
        console.error('Discord authentication error:', error);
        setError('Failed to authenticate with Discord');
      } finally {
        setLoading(false);
      }
    };

    if (router.isReady) {
      handleDiscordCallback();
    }
  }, [router.query.code, router.query.error, router.isReady]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-discord-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Logging in with Discord...</h2>
          <p className="text-gray-600">Please wait while we authenticate your account</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-red-600 mb-2">Authentication Failed</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="bg-discord-500 hover:bg-discord-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Back to Application
          </button>
        </div>
      </div>
    );
  }

  return null;
}

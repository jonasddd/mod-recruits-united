
import { NextApiRequest, NextApiResponse } from 'next';

const DISCORD_CLIENT_ID = '1375104763917504633';
const DISCORD_CLIENT_SECRET = 'abJSy2l-szkCGOUvZ9WReSmQfXamKwFf';
const REDIRECT_URI = 'https://neverlandmodappli.vercel.app/discord';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Authorization code is required' });
  }

  try {
    // Exchange code for access token
    const tokenParams = new URLSearchParams();
    tokenParams.append('client_id', DISCORD_CLIENT_ID);
    tokenParams.append('client_secret', DISCORD_CLIENT_SECRET);
    tokenParams.append('grant_type', 'authorization_code');
    tokenParams.append('code', code);
    tokenParams.append('redirect_uri', REDIRECT_URI);

    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenParams.toString(),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange code for token');
    }

    const tokenData = await tokenResponse.json();

    // Get user data with access token
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData = await userResponse.json();

    // Return user data
    res.status(200).json({
      id: userData.id,
      username: userData.username,
      discriminator: userData.discriminator,
      avatar: userData.avatar,
      email: userData.email,
      verified: userData.verified,
    });
  } catch (error) {
    console.error('Discord OAuth error:', error);
    res.status(500).json({ error: 'Discord authentication failed' });
  }
}


import { useState } from 'react';
import { useToast } from '../hooks/use-toast';

interface DiscordAuthProps {
  onLogin: (userData: any) => void;
}

const DiscordAuth = ({ onLogin }: DiscordAuthProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Discord OAuth configuration
  const DISCORD_CLIENT_ID = '1375104763917504633';
  const REDIRECT_URI = encodeURIComponent(window.location.origin + '/auth/discord');
  const DISCORD_OAUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=identify%20email`;

  const handleDiscordLogin = () => {
    setIsLoading(true);
    
    // For demo purposes, we'll simulate a successful Discord login
    // In a real implementation, you would:
    // 1. Redirect to Discord OAuth
    // 2. Handle the callback with the authorization code
    // 3. Exchange the code for an access token
    // 4. Fetch user data from Discord API
    
    // Simulated Discord user data for demo
    setTimeout(() => {
      const mockDiscordUser = {
        id: '123456789012345678',
        username: 'DemoUser',
        discriminator: '1234',
        avatar: 'a_1234567890abcdef1234567890abcdef',
        email: 'demo@example.com'
      };
      
      onLogin(mockDiscordUser);
      setIsLoading(false);
      
      toast({
        title: "Successfully logged in!",
        description: "You can now fill out the moderator application form.",
      });
    }, 2000);

    // Uncomment this for actual Discord OAuth:
    // window.location.href = DISCORD_OAUTH_URL;
  };

  return (
    <div className="text-center py-12">
      <div className="mb-8">
        <div className="w-16 h-16 bg-discord-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Login with Discord</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          To apply for a moderator position, please authenticate with your Discord account. 
          This helps us verify your identity and contact you directly.
        </p>
      </div>

      <button
        onClick={handleDiscordLogin}
        disabled={isLoading}
        className="neumorphic px-8 py-4 rounded-xl text-discord-700 font-semibold text-lg transition-all duration-300 hover:animate-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-discord-600 border-t-transparent rounded-full animate-spin mr-2"></div>
            Connecting to Discord...
          </>
        ) : (
          <>
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Login with Discord
          </>
        )}
      </button>

      <div className="mt-6 text-sm text-gray-500">
        <p>We only access your basic profile information (username, avatar, email).</p>
        <p>Your data is used solely for the application process.</p>
      </div>
    </div>
  );
};

export default DiscordAuth;

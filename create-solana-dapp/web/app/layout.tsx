'use client'
import './global.css';
import { AppLayout } from '@/components/ui/app-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import Head from 'next/head';
import { PrivyProvider } from '@privy-io/react-auth';

// export const metadata = {
//   title: 'jupiter-swap',
//   description: 'Generated by create-solana-dapp',
// };

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  // const privyAppId = process.env.PRIVY_APP_ID
  return (
    <html lang="en">
      <Head>
        <title>swap</title>
        <meta name="description" content="swap" />
        <script src="https://terminal.jup.ag/main-v2.js" data-preload></script>
      </Head>
      <body>
        <PrivyProvider
          appId="cm45vberv03sbtiki2s6sqx5i"
          config={{
            // Customize Privy's appearance in your app
            appearance: {
              theme: 'light',
              accentColor: '#676FFF',
              logo: 'https://your-logo-url',
            },
            
            // Create embedded wallets for users who don't have a wallet
            embeddedWallets: {
              createOnLogin: 'users-without-wallets',
            },
          }}
        >
          <ClusterProvider>
            <SolanaProvider>
              {/* bruh moment */}
              <AppLayout>{children}</AppLayout>
            </SolanaProvider>
          </ClusterProvider>
          </PrivyProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
export const metadata: Metadata = {
  metadataBase: new URL('https://shemesh-boutique.com'),
  title: 'Shemesh Boutique',
  description: 'Shemesh Boutique',
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="he" dir="rtl"><head><link rel="preload" href="/fonts/heebo-400.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/></head><body>{children}</body></html>;
}

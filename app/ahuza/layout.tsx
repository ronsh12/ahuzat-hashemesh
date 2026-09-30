import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: '/ahuza/favicon.svg' },
  alternates: { canonical: '/ahuza' },
  title: 'אחוזת השמש | וילת נופש עם בריכה פרטית בגליל המערבי',
  description:
    'אחוזת השמש במושב עין יעקב: וילה למשפחות בגליל עם בריכה פרטית, ג׳קוזי ו־4 חדרי שינה. עד 12 אורחים, מרחב ופרטיות. לפרטים: 050-599-8055.',
  openGraph: {
    url: 'https://shemesh-boutique.com/ahuza',
    title: 'אחוזת השמש — וילת נופש בגליל המערבי',
    description:
      'חופשה ביחד, עם מרחב לכל אחד. בריכה פרטית, ג׳קוזי ו־4 חדרי שינה במושב עין יעקב.',
    locale: 'he_IL',
    type: 'website',
  },
};
export default function AhuzaLayout({children}:{children:React.ReactNode}){return <>{children}</>}

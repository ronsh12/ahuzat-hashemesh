import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'וילת רון בגליל | חופשה פרטית בעין יעקב',
  description:
    'וילת רון בגליל בעין יעקב: 6 סוויטות, בריכה פרטית מחוממת, ג׳קוזי ונוף גלילי. אירוח לעד 18 אורחים בגליל המערבי. לפרטים ותיאום חופשה: 050-599-8055.',
  alternates: { canonical: 'https://shemesh-boutique.com/ronbagalil' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: 'וילת רון בגליל',
    title: 'וילת רון בגליל | השקט שלכם בגליל המערבי',
    description:
      '6 סוויטות, בריכה פרטית מחוממת וג׳קוזי. מקום להיות ביחד, מול הנוף של עין יעקב.',
    url: 'https://shemesh-boutique.com/ronbagalil',
    images: [
      {
        url: 'https://shemesh-boutique.com/ronbagalil/photos/sunset-1920.webp',
        alt: 'הבריכה של רון בגליל מול השקיעה',
      },
    ],
  },
};
export default function RonLayout({ children }: { children: React.ReactNode }) {
  return children;
}

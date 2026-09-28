import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'השמש הקסומה | סוויטה פרטית לזוג בעין יעקב',
  description:
    'סוויטה זוגית בעין יעקב בגליל המערבי: בריכה פרטית מחוממת ומקורה, ג׳קוזי פנימי וספא בחצר. כ־42 מ״ר לשני אורחים, עם נוף להרי הגליל.',
  alternates: { canonical: 'https://shemesh-boutique.com/suite' },
  icons: { icon: '/suite/favicon.svg' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: 'השמש הקסומה',
    title: 'השמש הקסומה | זמן פרטי לשניים',
    description:
      'סוויטה זוגית עם בריכה פרטית, ספא וחצר משלכם בעין יעקב, הגליל המערבי.',
    url: 'https://shemesh-boutique.com/suite',
  },
};
export default function SuiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

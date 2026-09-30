/* oxlint-disable next/no-img-element -- Local images use pre-optimized responsive WebP variants. */
import Link from 'next/link';
import { ArrowLeft, Sun } from 'lucide-react';
import s from './home.module.css';

export const metadata = {
  title: 'Shemesh Boutique | החופשה שלכם בגליל המערבי',
  description: 'שלושה מקומות לחופשה בעין יעקב: רון בגליל, אחוזת השמש והסוויטה השמש הקסומה. בחרו את המקום שלכם בגליל המערבי.',
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
};

const properties = [
  {
    id: 'ronbagalil', name: 'רון בגליל', label: 'מרחב להיות ביחד',
    description: 'וילה עם בריכה פרטית מחוממת, ג׳קוזי ונוף גלילי פתוח.',
    image: '/ronbagalil/photos/sunset', alt: 'הבריכה של רון בגליל מול נוף הגליל בשקיעה',
    detail: '6 חדרי שינה · עד 18 אורחים',
  },
  {
    id: 'ahuza', name: 'אחוזת השמש', label: 'החופשה המשפחתית שלכם',
    description: 'בריכה פרטית, חצר רחבה וכל המקום לרגעים משותפים.',
    image: '/ahuza/photos/_AEZ4604-HDR-1', alt: 'הבריכה הפרטית והחצר של אחוזת השמש',
    detail: '4 חדרי שינה · עד 12 אורחים',
  },
  {
    id: 'suite', name: 'השמש הקסומה', label: 'סוויטה פרטית לזוג',
    description: 'בריכה פרטית מחוממת, ג׳קוזי וזמן ששייך רק לשניכם.',
    image: '/suite/photos/pool-spa', alt: 'הבריכה והג׳קוזי המקורים של סוויטת השמש הקסומה',
    detail: 'חופשה זוגית · בריכה פרטית',
  },
];

export default function BrandHome() {
  return (
    <div className={s.site}>
      <header className={s.header}>
        <Link href="/" className={s.brand} aria-label="Shemesh Boutique — עמוד הבית"><Sun size={28} strokeWidth={1.4} /><span lang="en" dir="ltr">SHEMESH <small>BOUTIQUE</small></span></Link>
        <span className={s.location}>עין יעקב · הגליל המערבי</span>
      </header>
      <main>
        <div className={s.intro}><p>שלושה מקומות. שמש אחת.</p><h1>החופשה שלכם מתחילה כאן.</h1><span>בחרו את המקום שלכם בגליל</span></div>
        {properties.map((property, index) => (
          <section key={property.id} className={s.property} aria-labelledby={`${property.id}-title`}>
            <img className={s.photo} src={`${property.image}-1920.webp`} srcSet={`${property.image}-640.webp 640w, ${property.image}-1280.webp 1280w, ${property.image}-1920.webp 1920w`} sizes="100vw" alt={property.alt} width={1920} height={1280} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : undefined} />
            <div className={s.shade} />
            <div className={s.content}>
              <span className={s.eyebrow}>{property.label}</span>
              <h2 id={`${property.id}-title`}>{property.name}</h2>
              <p>{property.description}</p>
              <span className={s.detail}>{property.detail}</span>
              <Link className={s.link} href={`/${property.id}`}>לגלות את {property.name}<ArrowLeft size={20} /></Link>
            </div>
            <span className={s.number} aria-hidden="true">0{index + 1}</span>
          </section>
        ))}
      </main>
      <footer className={s.footer}><span lang="en">Shemesh Boutique</span><span>עין יעקב, הגליל המערבי</span><a href="tel:0505998055">050-599-8055</a></footer>
    </div>
  );
}

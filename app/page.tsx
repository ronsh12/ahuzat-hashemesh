'use client';
import {
  Sun,
  Phone,
  MessageCircle,
  ArrowDown,
  ArrowUpLeft,
  Waves,
  Users,
  BedDouble,
  Bath,
  MapPin,
} from 'lucide-react';
import Experience, { MobileMenu } from './experience';
const whatsapp =
  'https://wa.me/972505998055?text=' +
  encodeURIComponent(
    'היי, הגעתי מהאתר, אשמח לשמוע פרטים על המקום.\nתאריכים:\nכמות אורחים:',
  );
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#villa">
        דלגו לתוכן
      </a>
      <header className="header">
        <a href="#home" className="brand">
          <Sun />
          <span>
            אחוזת השמש<small>וילת נופש בגליל המערבי</small>
          </span>
        </a>
        <nav aria-label="ניווט ראשי">
          <a href="#villa">הווילה</a>
          <a href="#gallery">גלריה</a>
          <a href="#amenities">מה מחכה לכם</a>
          <a href="#location">מיקום</a>
          <a href="#reviews">חוות דעת</a>
          <a href="#contact">יצירת קשר</a>
        </nav>
        <MobileMenu />
        <a className="button small" href={whatsapp}>
          <MessageCircle size={18} /> בואו נדבר
        </a>
      </header>
      <main id="home">
        <section className="hero">
          <img
            src="/photos/_AEZ4580-HDR-1-1920.webp"
            alt="הבריכה הפרטית וחצר אחוזת השמש באור יום"
            fetchPriority="high"
            width="1920"
            height="1280"
            srcSet="/photos/_AEZ4580-HDR-1-640.webp 640w, /photos/_AEZ4580-HDR-1-1280.webp 1280w, /photos/_AEZ4580-HDR-1-1920.webp 1920w"
            sizes="100vw"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="eyebrow">
              <MapPin size={15} /> עין יעקב · הגליל המערבי
            </div>
            <h1>אחוזת השמש</h1>
            <h2>וילת נופש בגליל המערבי</h2>
            <p>להיות ביחד. להרגיש בבית. לקחת רגע לעצמכם.</p>
            <div className="actions">
              <a className="button cream" href={whatsapp}>
                <MessageCircle size={20} /> WhatsApp <ArrowUpLeft size={18} />
              </a>
              <a className="button outline" href="tel:0505998055">
                <Phone size={18} /> חייגו עכשיו
              </a>
            </div>
          </div>
          <a href="#villa" className="hero-bottom">
            החופשה שלכם מתחילה כאן <ArrowDown size={17} />
          </a>
          <span className="hero-note">מרחב. פרטיות. שקט גלילי.</span>
        </section>
        <section className="highlights container" aria-label="הווילה במבט אחד">
          {[
            [Waves, 'בריכה פרטית', 'כל המתחם, רק בשבילכם'],
            [Users, 'עד 12 אורחים', 'זמן איכות עם האנשים שלכם'],
            [BedDouble, '4 חדרי שינה', '4 מיטות + ספה נפתחת'],
            [Bath, 'ג׳קוזי מפנק', 'פשוט לעצור ולהירגע'],
          ].map(([Icon, title, sub]: any) => (
            <div key={title}>
              <Icon strokeWidth={1.3} />
              <span>
                <strong>{title}</strong>
                <small>{sub}</small>
              </span>
            </div>
          ))}
        </section>
        <section id="villa" className="intro container section">
          <div>
            <div className="eyebrow">נעים להכיר</div>
            <h2>
              קצת רחוק מהשגרה.
              <br />
              קרוב לכל מי שאוהבים.
            </h2>
            <p>
              ברוכים הבאים לאחוזת השמש במושב עין יעקב – מקום שנועד לחופשה
              משותפת, רגועה ומהנה בלב הגליל.
            </p>
            <p>
              האחוזה מתאימה למשפחות ולקבוצות שמחפשות מקום מרווח להיות בו יחד,
              לצד מספיק מרחב ופרטיות לכל אחד. כאן תוכלו ליהנות מזמן איכות, מהשקט
              של האזור ומהאווירה הנעימה שמאפשרת פשוט להתנתק מהשגרה.
            </p>
            <p>
              בין אם אתם מגיעים לחופשה משפחתית, סוף שבוע עם חברים או כמה ימים של
              מנוחה בגליל – אחוזת השמש מציעה את המרחב והאווירה לחופשה טובה באמת.
            </p>
            <a className="text-link" href="#gallery">
              הצצה לחופשה שלכם <ArrowUpLeft size={18} />
            </a>
          </div>
          <figure>
            <img
              src="/photos/_AEZ4424-HDR-1-1280.webp"
              alt="חדר שינה מרווח עם מיטה זוגית באחוזת השמש"
              loading="lazy"
            />
            <figcaption>לכל אחד הפינה שלו. לכולם מקום להיות יחד.</figcaption>
          </figure>
        </section>
        <Experience />
      </main>
    </>
  );
}

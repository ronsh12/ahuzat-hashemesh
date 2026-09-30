/* oxlint-disable next/no-img-element -- Static export uses pre-optimized local WebP srcsets; review screenshots preserve their original content. */
import {
  ArrowLeft,
  MapPin,
  Phone,
  MessageCircle,
  Waves,
  BedDouble,
  Users,
  Bath,
  CookingPot,
  Tv,
  Wifi,
  ShieldCheck,
  Car,
  CircleDot,
  ShowerHead,
  ArrowDown,
} from 'lucide-react';
import { contact, photoUrl, photoSet } from './content';
import {
  Navigation,
  Gallery,
  Reviews,
  MobileContact,
} from './components/interactions';
import s from './ron.module.css';
function ContactButtons({ light = false }: { light?: boolean }) {
  return (
    <div className={s.actions}>
      <a
        className={s.primaryButton}
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={20} />
        בואו נתכנן את החופשה
        <ArrowLeft size={18} />
      </a>
      <a className={light ? s.lightButton : s.outlineButton} href={contact.tel}>
        <Phone size={18} />
        דברו איתנו
      </a>
    </div>
  );
}
const amenities = [
  [BedDouble, '6 חדרי שינה זוגיים', 'מרווחים ומאובזרים'],
  [Waves, 'בריכה פרטית מחוממת', 'זמן המים שלכם'],
  [Bath, 'ג׳קוזי גדול', 'פשוט להירגע'],
  [CookingPot, 'מטבח מאובזר במלואו', 'מרחב לבשל ולשבת יחד'],
  [CircleDot, 'שולחן סנוקר מקצועי', 'לזמן איכות משותף'],
  [Tv, 'טלוויזיה ומיזוג אוויר', 'בכל אחד מהחדרים'],
  [ShowerHead, 'מקלחת ושירותים פרטיים', 'בכל חדר'],
  [Wifi, 'אינטרנט אלחוטי מהיר', 'להישאר מחוברים'],
  [ShieldCheck, 'ממ״ד מרווח', 'בתוך הווילה'],
  [Car, 'חניה פרטית', 'נוחה להגעה'],
] as const;
export default function RonBaGalil() {
  return (
    <div className={s.site}>
      <a className={s.skipLink} href="#main">
        דילוג לתוכן
      </a>
      <Navigation />
      <main id="main">
        <section className={s.hero} aria-labelledby="hero-title">
          <img
            className={s.heroImage}
            src={photoUrl('sunset', 1920)}
            srcSet={photoSet('sunset')}
            sizes="100vw"
            alt="בריכת וילת רון בגליל בשקיעה, מול נוף הגליל המערבי"
            fetchPriority="high"
            width="1920"
            height="1280"
          />
          <div className={s.heroShade} />
          <div className={s.heroContent}>
            <div className={s.heroEyebrow}>
              <span />
              עין יעקב · הגליל המערבי
            </div>
            <h1 id="hero-title">וילת רון בגליל</h1>
            <p className={s.heroLead}>
              המקום שלכם.
              <br />
              הזמן להיות ביחד.
            </p>
            <p className={s.heroDescription}>
              וילת נופש יוקרתית, בריכה פרטית מחוממת
              <br />
              והמון שקט מול הנוף של הגליל.
            </p>
            <ContactButtons light />
          </div>
          <a className={s.discover} href="#experience">
            מכאן מתחילה החופשה <ArrowDown size={18} />
          </a>
          <span className={s.heroNote}>PRIVATE VILLA · WESTERN GALILEE</span>
        </section>
        <div className={s.stats} aria-label="הווילה במספרים">
          {(
            [
              [BedDouble, '6', 'סוויטות מאובזרות'],
              [Users, '18', 'אורחים לכל היותר'],
              [Waves, 'בריכה', 'פרטית ומחוממת'],
              [Bath, 'ג׳קוזי', 'רגע לעצמכם'],
            ] as const
          ).map(([Icon, value, label]) => (
            <div key={String(value)}>
              <Icon size={24} />
              <strong>{String(value)}</strong>
              <span>{String(label)}</span>
            </div>
          ))}
        </div>
        <section id="experience" className={`${s.section} ${s.intro}`}>
          <div className={s.introCopy}>
            <span className={s.eyebrow}>ברוכים הבאים לרון בגליל</span>
            <h2>
              להשאיר את השגרה בחוץ.
              <br />
              להרגיש בבית, בגליל.
            </h2>
            <p>
              יש רגעים שכל מה שצריך בהם הוא מקום שקט, נוף פתוח והאנשים שאתם הכי
              אוהבים.
              <br />
              באחוזת רון בגליל, בעין יעקב בגליל המערבי, מחכה לכם בדיוק הזמן הזה.
            </p>
            <p>
              חללים מרווחים, עיצוב אלגנטי ואבזור מלא יוצרים מקום נעים לחופשה
              משפחתית, לסוף שבוע עם חברים או לזמן זוגי רגוע.
            </p>
            <a className={s.textLink} href="#gallery">
              הצצה לחופשה שלכם <ArrowLeft size={18} />
            </a>
          </div>
          <div className={s.introVisual}>
            <img
              src={photoUrl('living')}
              srcSet={photoSet('living')}
              sizes="(max-width: 800px) 100vw, 50vw"
              width="1280"
              height="853"
              loading="lazy"
              alt="סלון מרווח ומעוצב עם פינת אוכל גדולה בווילת רון בגליל"
            />
            <div className={s.imageCaption}>
              <span>01 / להרגיש ביחד</span>
              <span>מרחב לכל המשפחה</span>
            </div>
          </div>
        </section>
        <section id="amenities" className={s.amenitiesSection}>
          <div className={s.section}>
            <div className={s.sectionHeading}>
              <div>
                <span className={s.eyebrow}>הפרטים שעושים את החופשה</span>
                <h2>הכול כאן. בשבילכם.</h2>
              </div>
              <p>
                מהטבילה הראשונה ועד הערב בסלון —<br />
                כל מה שצריך כדי להרגיש בנוח.
              </p>
            </div>
            <div className={s.amenitiesGrid}>
              {amenities.map(([Icon, title, description]) => (
                <div className={s.amenity} key={title}>
                  <Icon size={25} strokeWidth={1.4} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
            <div className={s.capacity}>
              <Users size={22} />
              <p>
                אירוח לעד <strong>18 אורחים</strong>, כולל ילדים ותינוקות · עד{' '}
                <strong>6 זוגות או משפחות</strong>
              </p>
            </div>
          </div>
        </section>
        <section id="gallery" className={s.section}>
          <div className={s.sectionHeading}>
            <div>
              <span className={s.eyebrow}>קצת מהאווירה</span>
              <h2>תנו לתמונות לספר.</h2>
            </div>
            <p>
              בפנים, בחוץ ובין לבין.
              <br />
              מקום אחד, כל כך הרבה רגעים.
            </p>
          </div>
          <Gallery />
        </section>
        <section id="location" className={s.location}>
          <div className={s.locationImage}>
            <img
              src={photoUrl('view')}
              srcSet={photoSet('view')}
              sizes="(max-width: 800px) 100vw, 55vw"
              alt="נוף ירוק של הגליל המערבי מעבר לבריכה ולמרפסת הווילה"
              loading="lazy"
              width="1280"
              height="853"
            />
          </div>
          <div className={s.locationCopy}>
            <span className={s.eyebrow}>
              <MapPin size={17} />
              עין יעקב, הגליל המערבי
            </span>
            <h2>
              לצאת אל הנוף.
              <br />
              לחזור אל השקט.
            </h2>
            <p>
              אווירה כפרית, נופים ירוקים ואוויר צלול. הווילה שלנו נמצאת במושב
              עין יעקב, בלב הגליל המערבי.
            </p>
            <p>
              במרחק נסיעה קצר מחכים לכם מסלולי טיול, מסעדות, יקבים ואטרקציות לכל
              המשפחה. ואם תרצו פשוט להישאר בווילה — אנחנו לגמרי מבינים.
            </p>
            <a
              className={s.textLink}
              href="https://www.google.com/maps/search/?api=1&query=%D7%A2%D7%99%D7%9F%20%D7%99%D7%A2%D7%A7%D7%91"
              target="_blank"
              rel="noopener noreferrer"
            >
              מושב עין יעקב על המפה <ArrowLeft size={18} />
            </a>
          </div>
        </section>
        <section
          className={`${s.section} ${s.policies}`}
          aria-labelledby="policies-heading"
        >
          <div>
            <span className={s.eyebrow}>לפני שמגיעים</span>
            <h2 id="policies-heading">טוב לדעת.</h2>
          </div>
          <div className={s.price}>
            <span>אירוח באמצע השבוע</span>
            <strong>
              <small>החל מ־</small>6,000 ₪
            </strong>
            <span>ללילה</span>
          </div>
          <ul>
            <li>בסופי שבוע — מינימום שני לילות.</li>
            <li>לילה אחד יתאפשר על בסיס מקום פנוי בלבד.</li>
            <li>האירוח אינו מיועד למסיבות או לאירועים רועשים.</li>
          </ul>
        </section>
        <section id="reviews" className={s.reviewsSection}>
          <div className={s.section}>
            <span className={s.eyebrow}>מילים מהאורחים שלנו</span>
            <h2>
              הם כבר התארחו אצלנו –<br />
              זה מה שהם מספרים...
            </h2>
            <p className={s.reviewIntro}>
              חוויות אמיתיות, מתוך הביקורות של האורחים שלנו.
            </p>
            <Reviews />
          </div>
        </section>
        <section id="contact" className={`${s.section} ${s.contact}`}>
          <span className={s.eyebrow}>החופשה הבאה שלכם מתחילה בשיחה</span>
          <h2>
            מקום שכולם ייהנו ממנו.
            <br />
            זמן שתרצו לזכור.
          </h2>
          <p>
            נשמח לארח אתכם לחופשה עם פרטיות מלאה, נוף מרהיב
            <br />
            ואווירה שלא תרצו לעזוב. דברו איתנו ונבדוק יחד תאריכים.
          </p>
          <ContactButtons />
          <a className={s.phoneNumber} href={contact.tel} dir="ltr">
            {contact.phone}
          </a>
        </section>
      </main>
      <footer className={s.footer}>
        <div>
          <a href="#main" className={s.brand}>
            רון בגליל<span>RON BAGALIL · EIN YA’AKOV</span>
          </a>
          <p>וילת נופש בגליל המערבי · מושב עין יעקב</p>
        </div>
        <div className={s.footerLinks}>
          <a href="#gallery">גלריית תמונות</a>
          <a href={contact.tel}>צרו קשר</a>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            וואטסאפ
          </a>
        </div>
        <div className={s.footerBottom}>
          <span>© רון בגליל · כל הזכויות שמורות</span>
          <span dir="ltr">SHEMESH BOUTIQUE</span>
        </div>
      </footer>
      <MobileContact />
    </div>
  );
}

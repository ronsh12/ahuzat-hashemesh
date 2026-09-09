'use client';
import { useState } from 'react';
import {
  ArrowUpLeft,
  ArrowLeft,
  ArrowRight,
  X,
  Menu,
  MessageCircle,
  Phone,
  Waves,
  BedDouble,
  Bath,
  CookingPot,
  Tv,
  Wifi,
  Car,
  ShowerHead,
  MapPin,
  Leaf,
  Sun,
  Maximize2,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import GuestReviews from './guest-reviews';
import { LegalLinks } from './legal-page';
export const whatsapp =
  'https://wa.me/972505998055?text=' +
  encodeURIComponent(
    'היי, הגעתי מהאתר, אשמח לשמוע פרטים על המקום.\nתאריכים:\nכמות אורחים:',
  );
const photos = [
  ['_AEZ4604-HDR-1', 'בריכה פרטית, שמיים פתוחים', 'הבריכה והחצר'],
  ['_AEZ4424-HDR-1', 'חדר שינה זוגי בגוונים טבעיים', 'חדרי השינה'],
  ['_AEZ4536-1', 'ג׳קוזי גדול במתחם המקורה', 'הג׳קוזי'],
  ['_AEZ4543-1', 'מטבח חיצוני ופינת אוכל משותפת', 'נפגשים סביב השולחן'],
  ['_AEZ4308-HDR-1', 'סלון מרווח לצד המטבח ופינת האוכל', 'זמן ביחד'],
  ['_AEZ4651', 'מיטות שיזוף עם מגבות לצד הבריכה', 'רגע של שקט'],
  ['_AEZ4402-1', 'חדר זוגי מרווח עם ספה', 'חדרי השינה'],
  ['_AEZ4463-1', 'חדר שינה זוגי עם טלוויזיה', 'חדרי השינה'],
  ['_AEZ4356-1', 'חדר זוגי עם ג׳קוזי בחדר', 'חדרי השינה'],
  ['_AEZ4481-HDR-1', 'חדר רחצה פרטי ומקלחון', 'חדרי הרחצה'],
  ['DJI_0626', 'מבט מלמעלה על בריכת הווילה ופינות הישיבה', 'הווילה ממבט על'],
  ['_AEZ4585-HDR-1', 'החצר המרווחת לצד הבריכה והווילה', 'המרחב שלכם'],
];
export function Photo({
  name,
  alt,
  className = '',
  sizes = '(max-width: 720px) 100vw, 50vw',
}: {
  name: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <img
      className={className}
      src={`/ahuza/photos/${name}-1280.webp`}
      srcSet={`/ahuza/photos/${name}-640.webp 640w, /ahuza/photos/${name}-1280.webp 1280w, /ahuza/photos/${name}-1920.webp 1920w`}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      decoding="async"
      width="1280"
      height="853"
    />
  );
}
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-menu">
      <button
        aria-label={open ? 'סגירת תפריט' : 'פתיחת תפריט'}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav id="mobile-nav" aria-label="ניווט בנייד">
          {[
            ['villa', 'הווילה'],
            ['gallery', 'גלריה'],
            ['amenities', 'מה מחכה לכם'],
            ['location', 'מיקום'],
            ['reviews', 'חוות דעת'],
            ['contact', 'יצירת קשר'],
          ].map(([id, label]) => (
            <a key={id} href={'#' + id} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpLeft size={17} />
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
export default function Experience() {
  const [active, setActive] = useState<number | null>(null);
  const [all, setAll] = useState(false);
  const current = active === null ? 0 : active;
  const move = (d: number) =>
    setActive((current + d + photos.length) % photos.length);
  return (
    <>
      <section className="amenities section" id="amenities">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">כל מה שצריך לחופשה טובה</div>
              <h2>מה מחכה לכם בווילה?</h2>
            </div>
            <p>
              אתם מביאים את האנשים שאתם אוהבים.
              <br />
              כאן מחכה לכם המקום להיות יחד.
            </p>
          </div>
          <div className="amenity-grid">
            {[
              [BedDouble, '4 חדרי שינה זוגיים ומרווחים'],
              [Waves, 'בריכה פרטית'],
              [Bath, 'ג׳קוזי גדול ומפנק'],
              [CookingPot, 'מטבח חיצוני'],
              [Tv, 'טלוויזיה ומיזוג אוויר בכל חדר'],
              [ShowerHead, 'מקלחת ושירותים פרטיים בכל חדר'],
              [Wifi, 'אינטרנט אלחוטי מהיר'],
              [Car, 'חניה פרטית ונוחה'],
            ].map(([Icon, label]: any) => (
              <div key={label}>
                <Icon strokeWidth={1.2} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="capacity">
            <span>מקום לכולם</span>
            <p>
              הווילה מתאימה לעד 12 אורחים (כולל ילדים ותינוקות) ועד 4 זוגות או
              משפחות.
            </p>
          </div>
        </div>
      </section>
      <section className="gallery container section" id="gallery">
        <div className="section-heading">
          <div>
            <div className="eyebrow">ככה זה נראה אצלנו</div>
            <h2>גלריית הווילה</h2>
          </div>
          <span className="gallery-hint">
            <Maximize2 size={16} /> לחצו על תמונה כדי להיכנס פנימה
          </span>
        </div>
        <div className="gallery-grid">
          {photos
            .slice(0, all ? photos.length : 6)
            .map(([name, alt, label], i) => (
              <button
                className={'gallery-item photo-' + i}
                key={name}
                aria-label={'הגדלת תמונה: ' + alt}
                onClick={() => setActive(i)}
              >
                <Photo name={name} alt={alt} />
                <span>
                  {label}
                  <Maximize2 size={17} />
                </span>
              </button>
            ))}
        </div>
        <button className="gallery-more text-link" onClick={() => setAll(!all)}>
          {all ? 'הצגת מבחר תמונות' : `לכל התמונות (${photos.length})`}
          <ArrowUpLeft size={18} />
        </button>
      </section>
      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent
          className="villa-lightbox"
          showCloseButton={false}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              move(1);
            }
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              move(-1);
            }
          }}
        >
          <DialogTitle className="sr-only">גלריית הווילה</DialogTitle>
          <DialogDescription className="sr-only">
            ניתן לדפדף בחצים ולסגור באמצעות מקש Escape.
          </DialogDescription>
          <DialogClose className="lightbox-close" aria-label="סגירת הגלריה">
            <X />
          </DialogClose>
          <div
            onTouchStart={(e) => {
              e.currentTarget.dataset.touchX = String(e.touches[0].clientX);
            }}
            onTouchEnd={(e) => {
              const delta =
                e.changedTouches[0].clientX -
                Number(e.currentTarget.dataset.touchX);
              if (Math.abs(delta) > 50) move(delta > 0 ? -1 : 1);
            }}
          >
            <img
              src={`/ahuza/photos/${photos[current][0]}-1920.webp`}
              alt={photos[current][1]}
            />
          </div>
          <div className="lightbox-controls">
            <button onClick={() => move(-1)} aria-label="התמונה הקודמת">
              <ArrowRight />
            </button>
            <p aria-live="polite">
              {photos[current][2]}{' '}
              <span>
                {current + 1} / {photos.length}
              </span>
            </p>
            <button onClick={() => move(1)} aria-label="התמונה הבאה">
              <ArrowLeft />
            </button>
          </div>
        </DialogContent>
      </Dialog>
      <section className="location section" id="location">
        <div className="container location-grid">
          <figure>
            <Photo
              name="DJI_0631"
              alt="מבט על האחוזה בין הצמחייה ובתי מושב עין יעקב"
            />
            <figcaption>
              <MapPin size={17} /> עין יעקב, הגליל המערבי
            </figcaption>
          </figure>
          <div>
            <div className="eyebrow">כאן מורידים הילוך</div>
            <h2>
              אנחנו נמצאים בלב
              <br />
              הגליל המערבי –<br />
              מושב עין יעקב
            </h2>
            <p>
              אחוזת השמש נמצאת במושב עין יעקב, בלב הגליל המערבי, בסביבה שקטה,
              ירוקה וכפרית.
            </p>
            <p>
              מסביב מחכים לכם נופים גליליים, אוויר נעים והמון אפשרויות לצאת
              וליהנות – מסלולי טיול, מסעדות טובות, יקבים ואטרקציות שמתאימות לכל
              המשפחה, והכול במרחק נסיעה קצר.
            </p>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=%D7%A2%D7%99%D7%9F%20%D7%99%D7%A2%D7%A7%D7%91"
              target="_blank"
              rel="noreferrer"
            >
              עין יעקב במפה
              <ArrowUpLeft size={18} />
            </a>
            <small className="map-note">
              להוראות הגעה מדויקות לאחוזה, דברו איתנו.
            </small>
          </div>
        </div>
      </section>
      <section className="info container section">
        <div className="eyebrow">לפני שמגיעים</div>
        <h2>חשוב לדעת</h2>
        <div className="info-grid">
          <div>
            <span className="info-number">01</span>
            <div>
              <h3>חופשה בקצב שלכם</h3>
              <p>
                החל מ־<strong>4,000 ₪</strong> ללילה באמצע השבוע.
              </p>
              <a href={whatsapp} className="text-link">
                לבדיקת זמינות ומחיר לתאריכים שלכם
                <ArrowUpLeft size={16} />
              </a>
            </div>
          </div>
          <div>
            <Leaf strokeWidth={1.3} />
            <div>
              <h3>שומרים על השקט</h3>
              <p>האירוח אינו מיועד למסיבות או לאירועים רועשים.</p>
              <span className="info-note">
                מקום למפגש, למנוחה ולזמן איכות משותף.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews section" id="reviews">
        <div className="container">
          <div className="eyebrow">רגעים שנשארים איתכם</div>
          <h2>
            הם כבר התארחו אצלנו –<br />
            זה מה שהם מספרים...
          </h2>
          <GuestReviews />
        </div>
      </section>
      <section className="contact section" id="contact">
        <div className="container">
          <Sun className="contact-sun" strokeWidth={1} />
          <div className="eyebrow">החופשה הבאה שלכם מתחילה בשיחה</div>
          <h2>
            מחפשים מקום שכולם
            <br />
            ירגישו בו בבית?
          </h2>
          <p>
            בואו ליהנות מחופשה רגועה ומהנה עם הרבה מרחב,
            <br />
            פרטיות ואווירה שפשוט כיף להישאר בה.
          </p>
          <div className="actions">
            <a className="button cream" href={whatsapp}>
              <MessageCircle size={20} /> בואו נדבר ב־WhatsApp
              <ArrowUpLeft size={18} />
            </a>
            <a className="button outline" href="tel:0505998055">
              <Phone size={18} />
              חייגו עכשיו
            </a>
          </div>
          <a href="tel:0505998055" className="contact-number" dir="ltr">
            050-599-8055
          </a>
        </div>
      </section>
      <footer className="footer container">
        <a className="brand" href="#home">
          <Sun />
          <span>
            אחוזת השמש<small>וילת נופש בגליל המערבי</small>
          </span>
        </a>
        <span>עין יעקב · מרחב לחופשה משותפת</span>
        <span>© {new Date().getFullYear()} אחוזת השמש</span>
      </footer>
      <div className="home-legal container">
        <LegalLinks />
      </div>
      <a
        className="floating-wa"
        href={whatsapp}
        aria-label="יצירת קשר ב־WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
      <div className="mobile-contact">
        <a href="tel:0505998055">
          <Phone size={18} />
          חייגו
        </a>
        <a href={whatsapp}>
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </div>
    </>
  );
}

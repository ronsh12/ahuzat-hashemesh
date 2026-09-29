/* oxlint-disable next/no-img-element -- Static export uses pre-optimized local WebP srcsets; review screenshots preserve their original content. */
'use client';
import { useState } from 'react';
import { Dialog as Primitive } from '@base-ui/react/dialog';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Menu,
  X,
  ArrowLeft,
  ArrowRight,
  Expand,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { contact, gallery, photoSet, photoUrl, reviews } from '../content';
import s from '../ron.module.css';
const links = [
  ['experience', 'הווילה'],
  ['amenities', 'מה מחכה לכם'],
  ['gallery', 'גלריה'],
  ['location', 'הסביבה'],
  ['reviews', 'אורחים מספרים'],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className={s.header}>
      <div className={s.navInner}>
        <a href="#main" className={s.brand} aria-label="רון בגליל — ראש העמוד">
          רון בגליל<span>RON BAGALIL · EIN YA’AKOV</span>
        </a>
        <nav
          aria-label="ניווט ראשי"
          id="ron-navigation"
          className={`${s.navigation} ${open ? s.navOpen : ''}`}
        >
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a
          href={contact.whatsapp}
          className={s.navContact}
          target="_blank"
          rel="noopener noreferrer"
        >
          לתכנון החופשה <ArrowLeft size={16} />
        </a>
        <button
          type="button"
          className={s.menuButton}
          aria-label={open ? 'סגירת תפריט' : 'פתיחת תפריט'}
          aria-expanded={open}
          aria-controls="ron-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
function Lightbox({
  items,
  index,
  onChange,
  onClose,
}: {
  items: { src: string; alt: string; quote?: string }[];
  index: number | null;
  onChange: (n: number) => void;
  onClose: () => void;
}) {
  const active = index ?? 0;
  return (
    <Dialog
      open={index !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogPortal>
        <DialogOverlay className={s.overlay} />
        <Primitive.Popup
          className={s.lightbox}
          dir="rtl"
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') {
              event.preventDefault();
              onChange((active + 1) % items.length);
            }
            if (event.key === 'ArrowRight') {
              event.preventDefault();
              onChange((active - 1 + items.length) % items.length);
            }
          }}
        >
          <div className={s.lightboxTop}>
            <DialogTitle className={s.lightboxTitle}>
              {items[active].alt}
            </DialogTitle>
            <DialogClose className={s.iconButton} aria-label="סגירת תמונה">
              <X />
            </DialogClose>
          </div>
          <img
            className={`${s.lightboxImage} ${items[active].quote ? s.reviewLightboxImage : ''}`}
            src={items[active].src}
            alt={items[active].alt}
          />
          {items[active].quote && (
            <div className={s.reviewExcerpt}>
              <span>קטע מהביקורת המקורית</span>
              <blockquote>{items[active].quote}</blockquote>
              <a
                href={items[active].src}
                target="_blank"
                rel="noopener noreferrer"
              >
                פתיחת צילום המקור להגדלה
              </a>
            </div>
          )}
          <div className={s.lightboxControls}>
            <button
              className={s.iconButton}
              onClick={() =>
                onChange((active - 1 + items.length) % items.length)
              }
              aria-label="התמונה הקודמת"
            >
              <ArrowRight />
            </button>
            <span dir="ltr">
              {active + 1} / {items.length}
            </span>
            <button
              className={s.iconButton}
              onClick={() => onChange((active + 1) % items.length)}
              aria-label="התמונה הבאה"
            >
              <ArrowLeft />
            </button>
          </div>
        </Primitive.Popup>
      </DialogPortal>
    </Dialog>
  );
}
export function Gallery() {
  const [all, setAll] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <div className={s.galleryGrid}>
        {gallery.slice(0, all ? gallery.length : 5).map((photo, i) => (
          <button
            className={s.galleryTile}
            key={photo.name}
            onClick={() => setIndex(i)}
            aria-label={`הגדלת תמונה: ${photo.alt}`}
          >
            <img
              src={photoUrl(photo.name, 640)}
              srcSet={photoSet(photo.name)}
              sizes={
                i === 0
                  ? '(max-width: 700px) 100vw, 55vw'
                  : '(max-width: 700px) 50vw, 30vw'
              }
              alt={photo.alt}
              loading="lazy"
              decoding="async"
            />
            <span aria-hidden="true">
              <Expand size={17} />
            </span>
          </button>
        ))}
      </div>
      <div className={s.center}>
        <button className={s.outlineButton} onClick={() => setAll(!all)}>
          {all ? 'הצגת פחות תמונות' : `לכל התמונות (${gallery.length})`}
          <ArrowLeft size={18} />
        </button>
      </div>
      <Lightbox
        items={gallery.map((p) => ({
          src: photoUrl(p.name, 1920),
          alt: p.alt,
        }))}
        index={index}
        onChange={setIndex}
        onClose={() => setIndex(null)}
      />
    </>
  );
}
export function Reviews() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <div className={s.reviewGrid}>
        {reviews.map((review, i) => (
          <button
            key={review.id}
            className={s.reviewCard}
            onClick={() => setIndex(i)}
            aria-label={`הגדלת ביקורת מקורית מאת ${review.name}`}
          >
            <img
              src={`/ronbagalil/reviews/${review.id}.png`}
              alt={`צילום הביקורת המקורית של ${review.name} על רון בגליל`}
              loading="lazy"
              decoding="async"
            />
            <span>
              לקריאת הביקורת בגודל מלא <Expand size={15} />
            </span>
          </button>
        ))}
      </div>
      <Lightbox
        items={reviews.map((r) => ({
          src: `/ronbagalil/reviews/${r.id}.png`,
          alt: `ביקורת מקורית מאת ${r.name}`,
          quote: r.quote,
        }))}
        index={index}
        onChange={setIndex}
        onClose={() => setIndex(null)}
      />
    </>
  );
}
export function MobileContact() {
  return (
    <div className={s.mobileContact}>
      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={19} />
        בדיקת זמינות בוואטסאפ
      </a>
      <a href={contact.tel}>
        <Phone size={18} />
        חייגו אלינו
      </a>
    </div>
  );
}

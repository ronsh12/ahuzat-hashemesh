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
import { contact, gallery, photoSet, photoUrl } from '../content';
import s from '../suite.module.css';
const links = [
  ['experience', 'הסוויטה'],
  ['outside', 'הבריכה והספא'],
  ['gallery', 'גלריה'],
  ['location', 'הסביבה'],
  ['details', 'טוב לדעת'],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className={s.header}>
      <div className={s.navInner}>
        <a
          href="#main"
          className={s.brand}
          aria-label="השמש הקסומה — ראש העמוד"
        >
          השמש הקסומה<span>סוויטה פרטית לזוג · עין יעקב</span>
        </a>
        <nav
          aria-label="ניווט ראשי"
          id="suite-navigation"
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
          בואו נדבר <ArrowLeft size={16} />
        </a>
        <button
          type="button"
          className={s.menuButton}
          aria-label={open ? 'סגירת תפריט' : 'פתיחת תפריט'}
          aria-expanded={open}
          aria-controls="suite-navigation"
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
  items: { src: string; alt: string }[];
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
            className={s.lightboxImage}
            src={items[active].src}
            alt={items[active].alt}
          />
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
            <span>
              {photo.label}
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

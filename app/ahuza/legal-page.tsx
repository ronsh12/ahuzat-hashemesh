import { Sun, ArrowRight } from 'lucide-react';
export function LegalLinks() {
  return (
    <nav className="legal-links" aria-label="מידע משפטי ונגישות">
      <a href="/ahuza/accessibility">הצהרת נגישות</a>
      <a href="/ahuza/privacy">מדיניות פרטיות</a>
      <a href="/ahuza/terms">תנאי שימוש</a>
    </nav>
  );
}
export function LegalContact() {
  return (
    <address className="legal-contact">
      רון שמש · אחוזת השמש
      <br />
      טלפון:{' '}
      <a dir="ltr" href="tel:0506968450">
        050-696-8450
      </a>
      <br />
      דוא״ל: <a href="mailto:ron199778@gmail.com">ron199778@gmail.com</a>
    </address>
  );
}
export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="legal-page">
      <a className="skip-link" href="#legal-content">
        דלגו לתוכן
      </a>
      <header className="header">
        <a className="brand" href="/ahuza">
          <Sun />
          <span>
            אחוזת השמש<small>וילת נופש בגליל המערבי</small>
          </span>
        </a>
        <a className="legal-back" href="/ahuza">
          <ArrowRight size={17} /> חזרה לאתר
        </a>
      </header>
      <main className="legal-document" id="legal-content">
        <div className="eyebrow">אחוזת השמש · מידע לאורחים</div>
        <h1>{title}</h1>
        <div className="legal-body">{children}</div>
        <a className="text-link" href="/ahuza">
          חזרה לאתר אחוזת השמש
          <ArrowRight size={17} />
        </a>
      </main>
      <footer className="legal-footer container">
        <LegalLinks />
        <span>© {new Date().getFullYear()} אחוזת השמש</span>
      </footer>
    </div>
  );
}

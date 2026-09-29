/* oxlint-disable next/no-img-element -- Local images use pre-optimized responsive WebP variants. */
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  ArrowDown,
  MapPin,
} from 'lucide-react';
import { Navigation, Gallery, MobileContact } from './components/interactions';
import { contact, photoUrl, photoSet } from './content';
import s from './suite.module.css';
import { SuiteDetails, SuiteDetail } from './components/details';
function ContactButtons() {
  return (
    <div className={s.actions}>
      <a
        className={s.primaryButton}
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={19} />
        לבדיקת זמינות
        <ArrowLeft size={17} />
      </a>
      <a className={s.outlineButton} href={contact.tel}>
        <Phone size={17} />
        דברו איתנו
      </a>
    </div>
  );
}
export default function SuitePage() {
  return (
    <div className={s.site}>
      <a className={s.skipLink} href="#main">
        דילוג לתוכן
      </a>
      <Navigation />
      <main id="main">
        <section className={s.hero}>
          <div className={s.heroCopy}>
            <span className={s.eyebrow}>עין יעקב · הגליל המערבי</span>
            <h1>השמש הקסומה</h1>
            <p className={s.heroLead}>
              רק אתם.
              <br />
              וכל הזמן שבעולם.
            </p>
            <div className={s.goldLine} />
            <p>
              סוויטה פרטית לזוג, בריכה מחוממת וספא.
              <br />
              מקום קטן לעצור בו, ולהיות יחד.
            </p>
            <ContactButtons />
            <a className={s.discover} href="#experience">
              להכיר את המקום <ArrowDown size={16} />
            </a>
          </div>
          <div className={s.heroVisual}>
            <img
              src={photoUrl('pool-spa', 1920)}
              srcSet={photoSet('pool-spa')}
              sizes="(max-width:800px) 100vw, 60vw"
              width="1920"
              height="1280"
              fetchPriority="high"
              alt="הבריכה הפרטית והג׳קוזי בחצר המקורה של השמש הקסומה"
            />
          </div>
        </section>
        <div className={s.stats}>
          <div>
            <strong>חופשה זוגית</strong>
            <span>זמן להיות יחד</span>
          </div>
          <div>
            <strong>סוויטה פרטית</strong>
            <span>מרחב נעים לשניכם</span>
          </div>
          <div>
            <strong>בריכה פרטית</strong>
            <span>מחוממת ומקורה</span>
          </div>
          <div>
            <strong>ג׳קוזי ספא</strong>
            <span>פנימי וחיצוני</span>
          </div>
          <div>
            <strong>נוף גלילי</strong>
            <span>מבט פתוח אל הרי הגליל</span>
          </div>
          <div>
            <strong>פינוקים שמחכים לכם</strong>
            <span>יין או שמפניה, שוקולדים ועוד</span>
          </div>
        </div>
        <section id="experience" className={`${s.section} ${s.story}`}>
          <div className={s.storyImage}>
            <img
              src={photoUrl('suite')}
              srcSet={photoSet('suite')}
              sizes="(max-width:800px) 100vw, 50vw"
              width="1280"
              height="853"
              loading="lazy"
              alt="חדר השינה של הסוויטה עם מיטה זוגית, ג׳קוזי פנימי ופינת אוכל"
            />
            <span className={s.imageCaption}>
              חלל אחד נעים. חופשה שלמה לשניים.
            </span>
          </div>
          <div className={s.storyCopy}>
            <span className={s.eyebrow}>בפנים, הכול קרוב</span>
            <h2>
              קצת פחות שגרה.
              <br />
              קצת יותר יחד.
            </h2>
            <p>
              מיטת קינג סייז, ג׳קוזי זוגי ופינת אוכל אינטימית. סוויטה נעימה
              לזוג, עם חדר שינה וחדר רחצה, וכל מה שצריך כדי להרגיש בנוח.
            </p>
            <p>
              להכין קפה במטבחון, לבחור סרט או פשוט להישאר עוד קצת במיטה. בלי
              תוכניות גדולות.
            </p>
            <div className={s.smallFacts}>
              <span>מיטת קינג סייז</span>
              <span>ג׳קוזי זוגי בתוך הסוויטה</span>
            </div>
            <a className={s.textLink} href="#details">
              לכל פרטי האירוח <ArrowLeft size={17} />
            </a>
          </div>
        </section>
        <section id="outside" className={s.outside}>
          <div className={s.section}>
            <div className={s.sectionHeading}>
              <div>
                <span className={s.eyebrow}>החצר שלכם בלבד</span>
                <h2>
                  מהמים החמים,
                  <br />
                  אל רגע בשמש.
                </h2>
              </div>
              <p>
                בריכה פרטית מחוממת ומקורה, ספא גדול
                <br />
                ופינות לשבת, להשתרע ולהאט.
              </p>
            </div>
            <div className={s.outsideComposition}>
              <img
                className={s.gardenPhoto}
                src={photoUrl('garden')}
                srcSet={photoSet('garden')}
                sizes="(max-width:800px) 100vw, 65vw"
                width="1280"
                height="853"
                loading="lazy"
                alt="החצר הפרטית עם מיטות שיזוף, קונכיית רביצה וערסל מול אור אחר הצהריים"
              />
              <div className={s.outsideNotes}>
                <div>
                  <h3>הבריכה הפרטית</h3>
                  <p>
                    בריכה פרטית מחוממת ומקורה, לטבילה רגועה בקצב שלכם. אפשר
                    לפתוח את חלונות הקירוי וליהנות מהאוויר שבחוץ.
                  </p>
                </div>
                <div>
                  <h3>ג׳קוזי ספא בחוץ</h3>
                  <p>
                    להתרווח במים החמים של הספא, ואז לעבור לפינת הישיבה המקורה
                    ולהמשיך את הזמן שלכם יחד.
                  </p>
                </div>
                <div>
                  <h3>לבחור פינה משלכם</h3>
                  <p>
                    מיטות שיזוף, ערסל, קונכיית רביצה וריהוט גן. גם גריל פחמים
                    מחכה בחצר.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className={s.section}>
          <div className={s.sectionHeading}>
            <div>
              <span className={s.eyebrow}>מבט מקרוב</span>
              <h2>בפנים. בחוץ. ביחד.</h2>
            </div>
            <p>הסוויטה והפינות שיהיו רק שלכם.</p>
          </div>
          <Gallery />
        </section>
        <section className={s.treats}>
          <div className={`${s.section} ${s.treatsInner}`}>
            <div className={s.treatsCopy}>
              <span className={s.eyebrow}>הדברים הקטנים של החופשה</span>
              <h2>
                משהו מתוק.
                <br />
                משהו לחיים.
              </h2>
              <p>
                יין או שמפניה, שתייה קלה, משקאות אנרגיה, עוגיות, שוקולדים
                וחטיפים. במקרר מחכה חלב, ליד מכונת הקפה מבחר קפסולות, ובקיץ — גם
                גלידה.
              </p>
              <div className={s.breakfastNote}>
                <h3>בוקר בלי למהר</h3>
                <p>
                  אפשר להזמין ארוחת בוקר בתוספת תשלום.
                  <br />
                  קיימת גם אפשרות לארוחת בוקר כשרה.
                </p>
              </div>
            </div>
            <figure className={s.breakfastImage}>
              <img
                src={photoUrl('breakfast')}
                srcSet={photoSet('breakfast')}
                sizes="(max-width:800px) 100vw, 50vw"
                width="1280"
                height="853"
                loading="lazy"
                alt="ארוחת בוקר זוגית ערוכה על שולחן לצד הבריכה"
              />
              <figcaption>ארוחת בוקר · בהזמנה ובתוספת תשלום</figcaption>
            </figure>
          </div>
        </section>
        <section id="location" className={`${s.section} ${s.location}`}>
          <div>
            <span className={s.eyebrow}>עין יעקב · הגליל המערבי</span>
            <h2>
              הגליל מסביב.
              <br />
              השקט קרוב.
            </h2>
          </div>
          <div>
            <p>
              בגובה של כ־500 מטר, מול נוף פתוח להרי הגליל ובחלקו גם לים. בסביבה
              אפשר לצאת לטיולי סוסים, אופניים וטרקטורונים — ולחזור לפינה הפרטית
              שלכם.
            </p>
            <a
              className={s.textLink}
              href="https://www.google.com/maps/search/?api=1&query=%D7%A2%D7%99%D7%9F%20%D7%99%D7%A2%D7%A7%D7%91"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={18} />
              עין יעקב על המפה
              <ArrowLeft size={17} />
            </a>
          </div>
        </section>
        <section id="details" className={s.detailsSection}>
          <div className={`${s.section} ${s.detailsInner}`}>
            <div>
              <span className={s.eyebrow}>לפני שמגיעים</span>
              <h2>
                כל הפרטים,
                <br />
                בנחת.
              </h2>
              <p>
                עד שני אורחים.
                <br />
                סוויטה אחת, מתחם פרטי.
              </p>
            </div>
            <SuiteDetails>
              <SuiteDetail title="מה יש בתוך הסוויטה?" value="room">
                <div>
                  <ul>
                    <li>
                      חדר שינה עם מיטה זוגית קינג סייז ברוחב 180 ס״מ וארון
                      בגדים.
                    </li>
                    <li>
                      ג׳קוזי זוגי פנימי בגודל <bdi dir="ltr">190×180</bdi> ס״מ.
                    </li>
                    <li>טלוויזיה בגודל 42 אינץ׳ עם הוט ונטפליקס.</li>
                    <li>פינת אוכל אינטימית וחדר רחצה עם מקלחון ושירותים.</li>
                  </ul>
                </div>
              </SuiteDetail>
              <SuiteDetail title="מה כולל המטבחון?" value="kitchen">
                <div>
                  <p>
                    מטבחון המתאים לבישול, מקרר קטן, מכונת קפה וקפסולות, קומקום
                    חשמלי ופינת אוכל.
                  </p>
                </div>
              </SuiteDetail>
              <SuiteDetail title="התאמה לציבור הדתי" value="religious">
                <div>
                  <p>
                    מיחם ופלטת שבת, בית כנסת ביישוב ואפשרות להזמנת ארוחת בוקר
                    כשרה בתוספת תשלום.
                  </p>
                </div>
              </SuiteDetail>
              <SuiteDetail title="חניה, מרחב מוגן ומידע נוסף" value="practical">
                <div>
                  <ul>
                    <li>חניה פרטית במקום.</li>
                    <li>ממ״ד זמין בבית המארחים.</li>
                    <li>אין אפשרות להביא בעלי חיים.</li>
                    <li>ניתן להשתמש בשובר מילואים.</li>
                  </ul>
                </div>
              </SuiteDetail>
            </SuiteDetails>
          </div>
        </section>
        <section id="contact" className={`${s.section} ${s.contact}`}>
          <span className={s.eyebrow}>זמן לשניכם</span>
          <h2>
            לפנות מקום ביומן.
            <br />
            ולהגיע יחד.
          </h2>
          <p>
            שלחו לנו את התאריכים שמתאימים לכם,
            <br />
            ונשמח לבדוק זמינות ולענות על כל שאלה.
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
            השמש הקסומה<span>סוויטה פרטית לזוג · גליל מערבי</span>
          </a>
        </div>
        <nav className={s.footerLinks} aria-label="קישורים בתחתית העמוד">
          <a href="#gallery">גלריית תמונות</a>
          <a href="#details">פרטי האירוח</a>
          <a href={contact.tel}>צרו קשר</a>
        </nav>
        <div className={s.footerBottom}>
          <span>© השמש הקסומה · כל הזכויות שמורות</span>
          <span>מבית שמש בוטיק</span>
        </div>
      </footer>
      <MobileContact />
    </div>
  );
}

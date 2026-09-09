export type Review = {
  name: string;
  text: string;
  image: string;
  width: number;
  height: number;
};
// Transcribed from the owner's screenshots in /comments. Keep the original
// screenshots unchanged. Relative dates are deliberately not presented as current.
export const reviews: Review[] = [
  {
    name: 'Oren Shpigel',
    image: '/ahuza/reviews/review-1.png',
    width: 1340,
    height: 336,
    text: 'מקום מדהים. נקי מסודר מאורגן ומושקע. נהנינו מאוד וקיבלנו שירות מדהים. מומלץ מאוד ובטוח שנחזור.',
  },
  {
    name: 'חני צדוק',
    image: '/ahuza/reviews/review-2.png',
    width: 1344,
    height: 342,
    text: 'מקום מדהים! הוילה נקיה מפנקת ומאובזרת ברמה גבוהה. האירוח היה מעולה ושרה דאגה לנו להכל. מומלץ בחום.',
  },
  {
    name: 'עינת קריאף',
    image: '/ahuza/reviews/review-3.png',
    width: 1102,
    height: 460,
    text: 'היתה חוויה מושלמת\nהמקום היה נקי בטירוף, חשבו על הפרטים הקטנים\nבעלי הבית מקסימים ושירותים תמיד היו זמינים\nושלא נדבר על הפינוקים ששלחו לנו\nחוויה מושלמת הבריכה ענקית ומפנקת\nממליצה בחום',
  },
  {
    name: 'Michal Sakal',
    image: '/ahuza/reviews/review-4.png',
    width: 890,
    height: 368,
    text: 'שרה מקסימה. המקום נקי ומאובזר. יש מענה לכל בעיה.\nפעם חמישית שביקרנו פה. היה מצוין כתמיד.\n\nחדרים: 5/5 · שירות: 5/5 · מיקום: 5/5',
  },
  {
    name: 'Or Zukerman',
    image: '/ahuza/reviews/review-5.png',
    width: 1074,
    height: 486,
    text: 'הגענו עם משפחה לסופ״ש בווילת שמש הקסומה\nוילה מאובזרת, גדולה ושהסופ״ש הרגיש כמו חלום שלא רצינו שיגמר.\nקיבלנו וילה נקיה ומסודרת.\nכל שאלה ובקשה ישר באו ועזרו לנו.\nלווילה יש 4 חדרים זוגיים עם שרותים ומקלחת לכל חדר,\nבחוץ יש חצר ענקית עם בריכה גדולה מחוממת וג׳קוזי גדול.\nכבר מחכה לפעם הבאה!!!',
  },
  {
    name: 'Liran Levy',
    image: '/ahuza/reviews/review-6.png',
    width: 1094,
    height: 366,
    text: 'חייב לכתוב ביקורת על המקום שפשוט מהמם, החדרים מרווחים ונקיים.\nחצר גדולה במיוחד ויש שם גם מטבח סגור ומאובזר מול הבריכה.\nהמים בבריכה ממש חמים ונעימים שפשוט כיף להישאר במים ולא לצאת מהם.\nמחכים כבר לחופשה המשפחתית הבאה שלנו רק באחוזת השמש הקסומה.',
  },
];

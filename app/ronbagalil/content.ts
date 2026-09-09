export const contact = {
  phone: '050-599-8055',
  tel: 'tel:0505998055',
  whatsapp: `https://wa.me/972505998055?text=${encodeURIComponent('היי, הגעתי מהאתר רון בגליל ואשמח לשמוע פרטים על המקום.\nתאריכים:\nכמות אורחים:')}`,
};
export const photoUrl = (name: string, width = 1280) =>
  `/ronbagalil/photos/${name}-${width}.webp`;
export const photoSet = (name: string) =>
  [640, 1280, 1920].map((w) => `${photoUrl(name, w)} ${w}w`).join(', ');
export const gallery = [
  {
    name: 'villa-evening',
    alt: 'וילת רון בגליל והבריכה המוארת בשעת ערב',
    label: 'הערב יורד, החופשה מתחילה',
  },
  {
    name: 'pool-suite',
    alt: 'חדר שינה עם יציאה אל הבריכה בשקיעה',
    label: 'מהחדר ישר אל הבריכה',
  },
  {
    name: 'jacuzzi',
    alt: 'ג׳קוזי לצד הבריכה והווילה בשעת ערב',
    label: 'רגע של שקט בג׳קוזי',
  },
  {
    name: 'kitchen',
    alt: 'המטבח המאובזר עם משטחי עבודה רחבים',
    label: 'כל מה שצריך, במקום אחד',
  },
  {
    name: 'snooker',
    alt: 'הסלון המרווח ושולחן הסנוקר המקצועי',
    label: 'זמן טוב ביחד',
  },
  {
    name: 'suite',
    alt: 'חדר שינה זוגי עם חלון אל הנוף',
    label: 'מקום לנוח באמת',
  },
  {
    name: 'panorama-suite',
    alt: 'מיטה זוגית מול חלון פנורמי לנוף הגליל',
    label: 'להתעורר אל הגליל',
  },
  {
    name: 'terrace',
    alt: 'מיטות שיזוף ושמשיות ליד הבריכה מול הנוף',
    label: 'בלי למהר לשום מקום',
  },
  {
    name: 'entrance',
    alt: 'חזית וילת רון בגליל והכניסה למתחם',
    label: 'ברוכים הבאים לרון בגליל',
  },
];
export const reviews = [
  {
    id: 1,
    quote:
      'מקום מקסים לאירוח משפחות.בעלי בית מקסימים. מקום במקום שקט פרטיות מוחלטת בריכה מרווחת',
    name: 'Anat Daon',
  },
  {
    id: 2,
    quote:
      'וילה עם נוף מקסים. הכל מרווח. החדרים גדולים ונוחים מאוד והאזור המשותף ענק.',
    name: 'Michael Miller',
  },
  {
    id: 3,
    quote:
      'חדרים נקיים מאוד ומרווחים. בריכה וגקוזי מחוממים. חניה סגורה במתחם. מטבח מאובזר. נוף יפה.',
    name: 'Yosi Kan',
  },
  {
    id: 4,
    quote:
      'נהנתי מכל רגע, ממליצה בטירוף. מקום נקי ומשופץ עם בריכה, ג׳קוזי, אירוח מושלם, ועוד.',
    name: 'tahel baroz',
  },
  {
    id: 5,
    quote: 'מושלם! מושלם! מושלם !!! מעוצב כל כך נח מפנק ואלגנטי נוף מרהיב',
    name: 'sarit amibar',
  },
  { id: 6, quote: 'חדרים נקיים ומאובזרים בכל מה שצריך', name: 'idan shafir' },
];

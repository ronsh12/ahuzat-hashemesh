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
  {
    source: 'ADE_5876-Edit.JPG',
    name: 'living',
    alt: 'הסלון המרווח ופינת האוכל',
    label: 'הסלון המרווח ופינת האוכל',
  },
  {
    source: 'ADE_6444-HDR-Edit-Edit.JPG',
    name: 'sunset',
    alt: 'הבריכה והווילה באור השקיעה',
    label: 'הבריכה והווילה באור השקיעה',
  },
  {
    source: 'ADE_6350-Edit.JPG',
    name: 'view',
    alt: 'הבריכה מול נוף הגליל',
    label: 'הבריכה מול נוף הגליל',
  },
  {
    source: 'ADE_5956-HDR-Edit.JPG',
    name: 'gallery-living-view',
    alt: 'הסלון ופינת האוכל מול חלונות הנוף',
    label: 'הסלון ופינת האוכל מול חלונות הנוף',
  },
  {
    source: 'ADE_6036-Edit.JPG',
    name: 'gallery-dining',
    alt: 'שולחן האוכל הארוך לצד המטבח',
    label: 'שולחן האוכל הארוך לצד המטבח',
  },
  {
    source: 'ADE_6071-Edit.JPG',
    name: 'gallery-kitchen-island',
    alt: 'האי ומשטחי העבודה במטבח',
    label: 'האי ומשטחי העבודה במטבח',
  },
  {
    source: 'ADE_6134-HDR-Edit.JPG',
    name: 'gallery-kitchen-wide',
    alt: 'מבט רחב אל המטבח המאובזר',
    label: 'מבט רחב אל המטבח המאובזר',
  },
  {
    source: 'ADE_6157.JPG',
    name: 'gallery-breakfast',
    alt: 'ארוחת בוקר ערוכה על שולחן האוכל',
    label: 'ארוחת בוקר ערוכה על שולחן האוכל',
  },
  {
    source: 'ADE_6284-Edit.JPG',
    name: 'gallery-bedroom-door',
    alt: 'חדר שינה זוגי והכניסה לחדר',
    label: 'חדר שינה זוגי והכניסה לחדר',
  },
  {
    source: 'ADE_6305-Edit.JPG',
    name: 'gallery-bedroom',
    alt: 'מיטה זוגית עם ראש מיטה מרופד',
    label: 'מיטה זוגית עם ראש מיטה מרופד',
  },
  {
    source: 'ADE_6316-Edit.JPG',
    name: 'gallery-bedroom-lounge',
    alt: 'מיטה ופינת ישיבה בחדר',
    label: 'מיטה ופינת ישיבה בחדר',
  },
  {
    source: 'ADE_6250-Edit.JPG',
    name: 'gallery-bathroom',
    alt: 'חדר רחצה פרטי עם מקלחון',
    label: 'חדר רחצה פרטי עם מקלחון',
  },
  {
    source: 'ADE_6331-Edit.JPG',
    name: 'gallery-bathroom-two',
    alt: 'מקלחון וכיור בחדר הרחצה',
    label: 'מקלחון וכיור בחדר הרחצה',
  },
  {
    source: 'ADE_6492-Edit.JPG',
    name: 'gallery-pool-dusk',
    alt: 'הבריכה מול הנוף בשעת ערב',
    label: 'הבריכה מול הנוף בשעת ערב',
  },
  {
    source: 'ADE_6501-HDR-Edit-Edit-2.JPG',
    name: 'gallery-pool-sunset',
    alt: 'מבט לאורך הבריכה בשקיעה',
    label: 'מבט לאורך הבריכה בשקיעה',
  },
  {
    source: 'ADE_6537-Edit.JPG',
    name: 'gallery-pool-evening',
    alt: 'הבריכה לצד הווילה המוארת',
    label: 'הבריכה לצד הווילה המוארת',
  },
  {
    source: 'ADE_6591-HDR-Edit.JPG',
    name: 'gallery-villa-night',
    alt: 'חזית הווילה והבריכה בלילה',
    label: 'חזית הווילה והבריכה בלילה',
  },
  {
    source: 'ADI_0662.JPG',
    name: 'gallery-pool-detail',
    alt: 'פינת אירוח מעוצבת ליד הבריכה',
    label: 'פינת אירוח מעוצבת ליד הבריכה',
  },
  {
    source: 'ADE_6421-HDR.JPG',
    name: 'gallery-villa-exterior',
    alt: 'חזית הווילה באור יום',
    label: 'חזית הווילה באור יום',
  },
  {
    source: 'ADI_0668.JPG',
    name: 'gallery-spa-view',
    alt: 'ג׳קוזי מבעבע מול הנוף',
    label: 'ג׳קוזי מבעבע מול הנוף',
  },
  {
    source: 'ADE_6164-Edit.JPG',
    name: 'gallery-kitchen-stairs',
    alt: 'המטבח והמעבר אל מדרגות הווילה',
    label: 'המטבח והמעבר אל מדרגות הווילה',
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

export const contact = {
  phone: '050-599-8055',
  tel: 'tel:0505998055',
  whatsapp: `https://wa.me/972505998055?text=${encodeURIComponent('היי, הגעתי מהאתר של השמש הקסומה ואשמח לבדוק זמינות לחופשה זוגית.\nתאריכים:')}`,
};
export const photoUrl = (name: string, width = 1280) =>
  `/suite/photos/${name}-${width}.webp`;
export const photoSet = (name: string) =>
  [640, 1280, 1920].map((w) => `${photoUrl(name, w)} ${w}w`).join(', ');
export const gallery = [
  {
    name: 'terrace',
    alt: 'פינת האוכל המקורה לצד הבריכה והחצר הפרטית',
    label: 'החוץ הפרטי שלכם',
  },
  {
    name: 'bed',
    alt: 'המיטה הזוגית בסוויטה, עם מצעים לבנים וקיר אבן',
    label: 'לנוח ביחד',
  },
  {
    name: 'indoor-jacuzzi',
    alt: 'הג׳קוזי הפנימי ליד חדר השינה והיציאה למרפסת',
    label: 'ג׳קוזי בתוך הסוויטה',
  },
  { name: 'swing', alt: 'ערסל ישיבה תלוי בחצר הירוקה', label: 'רגע בחצר' },
  {
    name: 'kitchenette',
    alt: 'מבט אל המטבחון, פינת האוכל וחדר השינה',
    label: 'כל מה שצריך לידכם',
  },
  {
    name: 'loungers',
    alt: 'מיטות שיזוף וקונכיית רביצה בחצר הפרטית',
    label: 'בקצב שלכם',
  },
  {
    name: 'wine',
    alt: 'בקבוקי יין וכוסות על שפת הג׳קוזי הפנימי',
    label: 'זמן לשניים',
  },
  {
    name: 'bathroom',
    alt: 'חדר הרחצה של הסוויטה עם מקלחון ושירותים',
    label: 'חדר הרחצה',
  },
];

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
    source: 'n4.png',
    name: 'gallery-n4',
    alt: 'הבריכה המקורה מול הנוף הפתוח והים',
  },
  {
    source: 'n1.png',
    name: 'gallery-n1',
    alt: 'המיטה, פינת האוכל והג׳קוזי הפנימי',
  },
  {
    source: 'n3.png',
    name: 'gallery-n3',
    alt: 'החצר מול נוף הגליל בשקיעה',
  },
  {
    source: '_AEZ4747-HDR-1.jpg',
    name: 'pool-spa',
    alt: 'הבריכה המקורה והג׳קוזי בחצר',
  },
  {
    source: 'n2.png',
    name: 'gallery-n2',
    alt: 'המיטה הזוגית לצד כורסאות הישיבה',
  },
  {
    source: '_AEZ4716-HDR-1.jpg',
    name: 'indoor-jacuzzi',
    alt: 'חדר השינה והג׳קוזי הפנימי מול המרפסת',
  },
  {
    source: '_AEZ4671.jpg',
    name: 'swing',
    alt: 'ערסל הישיבה מול הגינה',
  },
  {
    source: '_AEZ4814-HDR-2-1.jpg',
    name: 'terrace',
    alt: 'המרפסת המקורה והחצר הפרטית',
  },
  {
    source: '_AEZ4806.jpg',
    name: 'breakfast',
    alt: 'ארוחת בוקר על שולחן לצד הבריכה',
  },
  {
    source: '_AEZ4832-HDR-1.jpg',
    name: 'garden',
    alt: 'הגינה והערסל מול שמי הערב',
  },
  {
    source: '_AEZ4658.jpg',
    name: 'loungers',
    alt: 'מיטות שיזוף וקונכיית רביצה בחצר הפרטית',
  },
  {
    source: '_AEZ4659.jpg',
    name: 'gallery-_aez4659',
    alt: 'שולחן הישיבה בחצר באור השמש',
  },
  {
    source: '_AEZ4661.jpg',
    name: 'gallery-_aez4661',
    alt: 'פינת ישיבה עגולה בחצר',
  },
  {
    source: '_AEZ4662.jpg',
    name: 'gallery-_aez4662',
    alt: 'פינת הישיבה לצד הבריכה הפרטית',
  },
  {
    source: '_AEZ4663.jpg',
    name: 'gallery-_aez4663',
    alt: 'ערסל תלוי מתחת לעץ הדקל',
  },
  {
    source: '_AEZ4664.jpg',
    name: 'gallery-_aez4664',
    alt: 'גריל הפחמים בחצר',
  },
  {
    source: '_AEZ4665.jpg',
    name: 'gallery-_aez4665',
    alt: 'גריל הפחמים לצד הצמחייה בחצר',
  },
  {
    source: '_AEZ4666.jpg',
    name: 'gallery-_aez4666',
    alt: 'גריל הפחמים באור השמש',
  },
  {
    source: '_AEZ4668.jpg',
    name: 'gallery-_aez4668',
    alt: 'פינת הגריל בחצר הירוקה',
  },
  {
    source: '_AEZ4669.jpg',
    name: 'gallery-_aez4669',
    alt: 'מבט מקרוב אל הערסל בחצר',
  },
  {
    source: '_AEZ4672.jpg',
    name: 'gallery-_aez4672',
    alt: 'מיטות השיזוף והערסל בחצר',
  },
  {
    source: '_AEZ4673.jpg',
    name: 'gallery-_aez4673',
    alt: 'בקבוקי יין וכוסות ליד הג׳קוזי',
  },
  {
    source: '_AEZ4674.jpg',
    name: 'wine',
    alt: 'פינת היין על שפת הג׳קוזי',
  },
  {
    source: '_AEZ4678.jpg',
    name: 'bed',
    alt: 'המיטה הזוגית עם מצעים לבנים',
  },
  {
    source: '_AEZ4683.jpg',
    name: 'gallery-_aez4683',
    alt: 'חדר השינה ופינת הישיבה',
  },
  {
    source: '_AEZ4687.jpg',
    name: 'gallery-_aez4687',
    alt: 'כורסה כחולה לצד המיטה',
  },
  {
    source: '_AEZ4689.jpg',
    name: 'gallery-_aez4689',
    alt: 'שידת הלילה בחדר השינה',
  },
  {
    source: '_AEZ4692.jpg',
    name: 'gallery-_aez4692',
    alt: 'קונכיית רביצה לצד קיר הסוויטה',
  },
  {
    source: '_AEZ4717-1.jpg',
    name: 'gallery-_aez4717-1',
    alt: 'מבט רחב אל המיטה והג׳קוזי בסוויטה',
  },
  {
    source: '_AEZ4769-1.jpg',
    name: 'kitchenette',
    alt: 'המטבחון ופינת האוכל בסוויטה',
  },
  {
    source: '_AEZ4780-HDR-1.jpg',
    name: 'suite',
    alt: 'חדר השינה והג׳קוזי לצד פינת האוכל',
  },
  {
    source: '_AEZ4791.jpg',
    name: 'gallery-_aez4791',
    alt: 'פינת האוכל בחוץ באור השמש',
  },
  {
    source: '_AEZ4793.jpg',
    name: 'gallery-_aez4793',
    alt: 'אור השמש על שולחן האוכל בחוץ',
  },
  {
    source: '_AEZ4807.jpg',
    name: 'gallery-_aez4807',
    alt: 'מבט מקרוב על ארוחת הבוקר לצד הבריכה',
  },
  {
    source: '_AEZ4819.jpg',
    name: 'gallery-_aez4819',
    alt: 'החצר ומיטות השיזוף באור אחר הצהריים',
  },
  {
    source: '_AEZ4828-1.jpg',
    name: 'gallery-_aez4828-1',
    alt: 'הדקל וקונכיית הרביצה בחצר',
  },
  {
    source: '_AEZ4828.jpg',
    name: 'gallery-_aez4828',
    alt: 'מבט רחב אל פינות המנוחה בחצר',
  },
  {
    source: '_AEZ4832-HDR.jpg',
    name: 'gallery-_aez4832-hdr',
    alt: 'פינת המנוחה בחצר בשעת ערב',
  },
  {
    source: '_AEZ4838.jpg',
    name: 'bathroom',
    alt: 'חדר הרחצה עם מקלחון ושירותים',
  },
];

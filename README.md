# אחוזת השמש

אתר אירוח בעברית ו־RTL, עם React ו־Vinext, תמונות WebP מקומיות וגופן Heebo מקומי.

## הפעלה

נדרשים Node.js 22.13 ומעלה ו־pnpm.

```sh
cd /Users/ronshemesh/Documents/shemesh-website/website
pnpm install
pnpm dev
```

האתר זמין ב־http://localhost:3000. ליצירת גרסה לפרסום: `pnpm build`.
תוצר האתר הסטטי נמצא ב־`dist/client` וניתן לארח אותו בכל שרת קבצים סטטי.

## עריכת תוכן

- `app/page.tsx`: פתיחה, יתרונות מרכזיים והיכרות.
- `app/experience.tsx`: גלריה, מפרט, מיקום, פרטי אירוח ויצירת קשר.
- `app/reviews.ts`: שש חוות הדעת שנמסרו, כולל שם, תמלול, נתיב צילום המסך ומידותיו. `app/guest-reviews.tsx` מציג את הצילומים ומאפשר פתיחה מוגדלת עם תמלול נגיש. צילומי המקור נשמרים ללא שינוי ב־`public/reviews`.
- `app/globals.css`: עיצוב רספונסיבי וטיפוגרפיית Heebo במשקלים 400, 500 ו־600.
- `app/layout.tsx`: כותרת, תיאור ומטא־נתונים לשיתוף.
- `public/photos`: גרסאות WebP בגדלים 640, 1280 ו־1920. התמונות המקוריות נשארו בתיקיית `../images`.
- `public/fonts`: קובצי Heebo מקומיים.

קישור המפה מציג את מושב עין יעקב; הוא אינו טוען להציג כתובת מדויקת של הנכס. WhatsApp נפתח עם הודעה מוכנה, ללא שליחה אוטומטית.

## העדפת עבודה

לבקשת הבעלים, ממשיכים מקומית בלבד. אין להעלות גרסאות נוספות או לפרסם את האתר ללא בקשה מפורשת חדשה. נוצר בעבר עותק פרטי ב־Sites; הוא אינו אתר ציבורי.


## Cloudflare Workers / GitHub deployment

The application is a static Vinext export. `next.config.ts` retains
`output: 'export'`; the Cloudflare Vite plugin builds the Worker and static
assets. Wrangler automatically follows `.wrangler/deploy/config.json` to the
generated `dist/server/wrangler.json` and deploys the bundled Worker with
`dist/client` assets. The OpenAI Sites plugin is not loaded. The legacy `.openai/hosting.json`
is not used by this Cloudflare deployment.

Configure Workers Builds as follows:

- Root directory: the directory containing `package.json`, `pnpm-lock.yaml`,
  and `wrangler.jsonc`. In this Git repository that is `/`; if importing the
  enclosing folder instead, select `website`.
- Node.js: `24.19.0` (also recorded in `.node-version`).
- pnpm: `11.19.0` (also pinned in `package.json`). Set the build environment
  variable `PNPM_VERSION=11.19.0` if the dashboard has a different override.
- Install: `pnpm install --frozen-lockfile`.
- Build: `pnpm run build`.
- Deploy: `npx wrangler deploy`.
- The Cloudflare Worker project name must match `ahuzat-hashemesh` in
  `wrangler.jsonc`. If the existing Worker uses another name, update this
  field to that exact name before deployment.

Local verification (no upload):

```sh
pnpm install --frozen-lockfile
pnpm run build
pnpm run deploy:check
pnpm start
```

`pnpm start` serves the exported site with Wrangler's local asset routing.
`pnpm dev` continues to run the development server. Static HTML handling serves
`/accessibility`, `/privacy`, and `/terms` directly; unknown routes return the
exported 404 page rather than the home page.

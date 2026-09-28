# Property routes

The project uses one Vinext/Cloudflare build with independently owned property routes.

| Route | Content and components | Assets |
| --- | --- | --- |
| `/` | `app/page.tsx` (reserved brand landing page) | None |
| `/ahuza` | `app/ahuza/` | `public/ahuza/` |
| `/ronbagalil` | `app/ronbagalil/` | `public/ronbagalil/` |
| `/suite` | `app/suite/` | `public/suite/` |

## Adding a property

Create `app/<property>/page.tsx`, a metadata `layout.tsx`, a local content file, and a CSS module. Keep its sections and interactions in that route's `components/` folder. Add optimized photos under `public/<property>/photos/` and reference them with route-prefixed absolute paths.

Reuse generic UI primitives from `components/ui/` and shared font files from `public/fonts/`. Do not import another property's sections, styles, contact information, or legal content. The root layout remains limited to shared document metadata, Hebrew direction, and the font preload.

Ron BaGalil's CSS module owns its typography, responsive layout, gallery, reviews, and dialog styles. Its document reset only applies while the Ron wrapper is present. Its modal uses the shared Base UI dialog primitives for focus management and keyboard dismissal. All contact links and image descriptors are in `app/ronbagalil/content.ts`; metadata is in the route layout.

Photos were selected from `../images-ronbagalil` and exported as 640/1280/1920px WebP variants. Review PNGs are unchanged originals; modal excerpts are taken from those screenshots. No review ratings or testimonials are generated.

## Local validation

- `pnpm exec tsc --noEmit`
- `pnpm exec oxlint app/ronbagalil`
- `pnpm run build`
- `pnpm run deploy:check` (Cloudflare dry run only)
- `pnpm start --port 8790`, then inspect `/`, `/ahuza`, and `/ronbagalil`.

Adding property routes does not require changing the Cloudflare Worker entry point or the root page.

## The couples suite

`app/suite/` owns the Hebrew content, pink-gold CSS module, metadata and contact configuration for השמש הקסומה. Gallery and navigation are route-specific; dialog and accordion primitives come from the shared UI catalog. The original photos in `../images_suite` were selected into 12 distinct images, each with 640/1280/1920px WebP variants in `public/suite/photos`. Root and other property routes stay independent.

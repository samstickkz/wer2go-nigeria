# wer2 GO — Nigeria launch site

Marketing landing page for the Nigerian launch of [wer2 GO](https://gower2.com), a Doha-based ride-hailing platform now expanding into Uyo, Port Harcourt, Abuja and Kano with a 10% driver commission and a Hausa-localised women-only ride option ("Sannu").

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and lucide-react.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Build

```bash
npm run build
npm run start
```

### Brand assets

`public/brand/` contains the official wer2 GO logos and hero illustration pulled from `gower2.com`. If the upstream brand updates, refresh them with:

```bash
curl -fsSL https://gower2.com/wer2go/assets/images/wer2_go.svg     -o public/brand/wer2-go-logo.svg
curl -fsSL https://gower2.com/wer2go/assets/images/wer2_driver.svg -o public/brand/wer2-driver-logo.svg
curl -fsSL https://gower2.com/wer2go/assets/images/car-new.png     -o public/brand/hero-car.png
```

### Theme

Tailwind extends with the extracted wer2 GO palette in `tailwind.config.ts`:

| Token            | Hex     | Use                                                |
| ---------------- | ------- | -------------------------------------------------- |
| `cyan-brand`     | #6ACEEA | Primary — wordmark, CTAs, hero accent              |
| `cyan-dark`      | #2BB6E1 | Hover state for primary CTA                        |
| `nigeriaGreen`   | #73CC00 | Driver / earnings contexts only                    |
| `highlight`      | #FFF421 | Yellow attention-getters (badges, pills) — never buttons |
| `charcoal`       | #292D32 | All body text and headlines                        |
| `surface`        | #F5FAFC | Page section backgrounds                           |

## Deploy to Vercel

Push the repo to GitHub, then on [vercel.com/new](https://vercel.com/new):

1. Import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected).
3. No environment variables required.
4. Click **Deploy**.

Or via CLI:

```bash
npx vercel
```

## Project structure

```
app/
  layout.tsx        # Inter via next/font, body theme
  page.tsx          # Section composition
  globals.css       # Tailwind directives
components/
  Navbar.tsx        # Sticky, white, scroll-triggered border
  Hero.tsx          # Adire SVG pattern + hero illustration
  AdirePattern.tsx  # Cyan diamond pattern at ~8% opacity
  PromiseBand.tsx   # "10% — what we take"
  CitiesGrid.tsx    # 2x2 cities, Kano accented in yellow
  SheDrives.tsx     # Women-driver feature ("Sannu" tier)
  SafetyFeatures.tsx
  EarnWithUs.tsx    # Green band, driver/fleet CTAs
  Footer.tsx
public/brand/       # Logos + hero car
```

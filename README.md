# Senior Floors - Builder Partner Page

Dedicated landing page for the Senior Floors Builder Partnership Program, targeting General Contractors, Architects, Interior Designers, and Developers in Colorado's luxury residential market.

Designed for deployment at `builders.senior-floors.com` (subdomain) or as `/builders` on the main site.

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- React Hook Form
- Lucide React

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000/builders](http://localhost:3000/builders).

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_YOUTUBE_VIDEO_ID` | YouTube video ID for the institutional video |
| `NEXT_PUBLIC_PORTAL_URL` | Partner portal login URL |
| `NEXT_PUBLIC_PHONE` | Contact phone number |
| `NEXT_PUBLIC_EMAIL` | Contact email |

## Project Structure

```
app/builders/page.tsx          - Main landing page
components/builders/           - All section components
```

## Deployment

This project mirrors the development structure of `senior-floors-website`. Deploy to Vercel or Railway and point the subdomain `builders.senior-floors.com` to this deployment.

For integration into the main website, copy `app/builders/` and `components/builders/` into `senior-floors-website` and add a route group layout to bypass the main site header/footer.

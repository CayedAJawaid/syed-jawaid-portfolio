# Syed Jawaid — Portfolio

A responsive, corporate-style personal portfolio built with **Next.js 15, React 19, Tailwind CSS 4, TypeScript and Lucide icons**.

## Run locally

Requires Node.js 20.9+ (Node.js 22 LTS recommended).

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Customize before publishing

- `app/page.tsx`: update About, skills, projects, experience and contact information.
- Replace `hello@syed.dev` with your real email **after you configure that mailbox**.
- Replace `https://www.linkedin.com/` and `https://github.com/` with your actual profile URLs.
- Project descriptions are representative examples and should be reviewed for accuracy.
- `app/layout.tsx`: update SEO title, description and domain if necessary.
- Add a verified resume PDF under `public/resume.pdf` and a download link if desired.
- No real employer names, certifications, awards, or unverified metrics have been invented.

## Deploy with Vercel

1. Create a GitHub repository and push this folder to it.
2. In https://vercel.com/new, import the GitHub repository.
3. Select the **Next.js** framework preset and click **Deploy**. No custom build configuration is needed.
4. In the Vercel project, open **Settings → Domains**, add `syed.dev` and optionally `www.syed.dev`.
5. At your domain registrar, add the DNS records **shown in Vercel** for your domain. Do not assume generic DNS values: use the records shown for your project.
6. Wait for domain verification and HTTPS provisioning. Configure redirects for your preferred canonical domain.
7. Configure an email service separately if you want `hello@syed.dev` to receive mail.

**Note:** `syed.dev` is a preferred domain, not a verified owned or available domain. You must register/control it before connecting it.

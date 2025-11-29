# ElevEncoder - Premium Agency Website

A high-converting, premium agency website built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod + Server Actions
- **Analytics**: Google Analytics 4 + Hotjar

## Getting Started

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXXX
NEXT_PUBLIC_HOTJAR_VERSION=6

# Contact Form (Optional - for real integration)
WEBHOOK_URL=https://hooks.zapier.com/...
```

## Deployment

This project is optimized for deployment on Vercel.

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2. Import the project into Vercel.
3. Add the environment variables in the Vercel dashboard.
4. Deploy.

## Project Structure

- `src/app`: App Router pages and layout.
- `src/components/ui`: Reusable base components (Button, GlassCard, etc.).
- `src/components/features`: Feature-specific components (Hero, ServiceCard, etc.).
- `src/components/layout`: Global layout components (Header, Footer).
- `src/lib`: Utility functions and analytics.

## Customization

- **Colors & Fonts**: Edit `src/app/globals.css` and `src/app/layout.tsx`.
- **Content**: Update the text in the respective page files in `src/app`.

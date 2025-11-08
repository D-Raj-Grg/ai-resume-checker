# PDF Q&A AI Application

An AI-powered application that allows users to upload PDF documents and ask natural language questions about the content, receiving intelligent, contextual answers powered by Claude AI.

**Live Demo:** [https://pdf-qna-ai-saas.vercel.app/](https://pdf-qna-ai-saas.vercel.app/)

## Features

- Upload PDF documents (up to 10MB)
- Ask questions in natural language
- Get instant AI-powered answers with streaming responses
- Conversation history with context-aware follow-ups
- Responsive design for desktop and mobile
- Dark/light mode support

## Tech Stack

- **Frontend:** Next.js 14+, React 18+, Tailwind CSS
- **AI Integration:** Anthropic Claude API (claude-sonnet-4-20250514)
- **PDF Processing:** pdf-parse
- **Deployment:** Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

## Deploy on Vercel

This application is deployed on Vercel: [https://pdf-qna-ai-saas.vercel.app/](https://pdf-qna-ai-saas.vercel.app/)

To deploy your own instance:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to [Vercel](https://vercel.com/new)
3. Add your `ANTHROPIC_API_KEY` environment variable in the Vercel project settings
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/           # API routes (upload, chat)
│   │   ├── ai-chatbot/    # Chat interface
│   │   └── page.tsx       # Homepage
│   └── components/
│       ├── ui/            # Reusable UI components
│       └── providers/     # Context providers
├── public/                # Static assets
└── README.md
```

## License

MIT

"use client";

import { FileText, Sparkles, Zap, Brain, MessageSquare, Upload } from "lucide-react";
import Link from "next/link";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { DotPattern } from "@/components/magicui/dot-pattern";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { cn } from "@/lib/utils";

const features = [
  {
    Icon: Upload,
    name: "Easy Upload",
    description: "Drag and drop any PDF document or click to browse. Supports files up to 10MB.",
    cta: "Learn more",
    className: "col-span-1 lg:col-span-2",
    background: (
      <div className="absolute right-2 top-4 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl" />
    ),
  },
  {
    Icon: Brain,
    name: "AI-Powered Analysis",
    description: "Powered by Claude AI for intelligent, contextual understanding of your documents.",
    cta: "Learn more",
    className: "col-span-1",
    background: (
      <div className="absolute left-2 top-4 h-[250px] w-[250px] rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl" />
    ),
  },
  {
    Icon: MessageSquare,
    name: "Natural Conversations",
    description: "Ask questions in plain English and get instant, accurate answers from your documents.",
    cta: "Learn more",
    className: "col-span-1",
    background: (
      <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-gradient-to-br from-green-400/20 to-blue-400/20 blur-3xl" />
    ),
  },
  {
    Icon: Sparkles,
    name: "Source Citations",
    description: "Every answer includes references to the exact sections and pages in your document.",
    cta: "Learn more",
    className: "col-span-1 lg:col-span-2",
    background: (
      <div className="absolute left-4 bottom-4 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-amber-400/20 to-orange-400/20 blur-3xl" />
    ),
  },
  {
    Icon: Zap,
    name: "Lightning Fast",
    description: "Get answers in seconds with real-time streaming responses. No waiting around.",
    cta: "Learn more",
    className: "col-span-1",
    background: (
      <div className="absolute right-4 bottom-4 h-[250px] w-[250px] rounded-full bg-gradient-to-br from-yellow-400/20 to-red-400/20 blur-3xl" />
    ),
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Dot Pattern Background */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />

      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Announcement Badge */}
          <div className="mb-8 flex justify-center">
            <AnimatedGradientText>
              <Sparkles className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">
                Powered by Claude AI
              </span>
            </AnimatedGradientText>
          </div>

          {/* Main Heading */}
          <h1 className="bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
            Your PDF Documents,
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Now Interactive
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Upload any PDF and ask questions in natural language. Get instant, accurate answers
            powered by advanced AI. Perfect for research, studying, and professional document analysis.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/ai-chatbot">
              <ShimmerButton
                className="relative z-10"
                background="linear-gradient(135deg, rgb(59, 130, 246), rgb(147, 51, 234))"
                shimmerColor="#ffffff"
              >
                <Upload className="mr-2 h-4 w-4" />
                Try AI Chatbot
              </ShimmerButton>
            </Link>
            <Link href="/ai-chatbot" className="text-sm font-semibold leading-6 text-foreground transition-colors hover:text-foreground/80">
              Watch Demo <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex items-center justify-center gap-x-12 text-sm">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-foreground">10MB</div>
              <div className="mt-1 text-muted-foreground">Max File Size</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-foreground">&lt;5s</div>
              <div className="mt-1 text-muted-foreground">Response Time</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="mt-1 text-muted-foreground">Private & Secure</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Ask anything about your documents
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our AI-powered platform makes it easy to extract insights from any PDF document.
            Upload, ask, and get answers instantly.
          </p>
        </div>

        <BentoGrid className="mt-16">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>

      {/* How It Works Section */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Simple process
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get answers from your documents in three simple steps
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold">Upload Your PDF</h3>
            <p className="mt-2 text-muted-foreground">
              Drag and drop any PDF document up to 10MB. We support research papers, contracts,
              manuals, and more.
            </p>
          </div>

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold">Ask Questions</h3>
            <p className="mt-2 text-muted-foreground">
              Type your questions in plain English. Our AI understands context and can answer
              follow-up questions.
            </p>
          </div>

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-lg">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold">Get Instant Answers</h3>
            <p className="mt-2 text-muted-foreground">
              Receive accurate, contextual answers with source citations in seconds. No manual
              searching required.
            </p>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Perfect for every use case
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you&apos;re a student, researcher, or professional, our AI assistant helps you
            work smarter with your documents.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Research & Academia",
              description: "Analyze research papers, extract methodologies, and understand complex findings quickly.",
              icon: FileText,
            },
            {
              title: "Legal Documents",
              description: "Review contracts, find clauses, and understand legal terminology with ease.",
              icon: Brain,
            },
            {
              title: "Technical Documentation",
              description: "Get instant answers from API docs, manuals, and technical specifications.",
              icon: Zap,
            },
          ].map((useCase) => (
            <div
              key={useCase.title}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <useCase.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{useCase.title}</h3>
              <p className="mt-2 text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Security Section */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your data is safe with us
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We take security and privacy seriously. Your documents are processed securely and never stored.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-semibold">End-to-End Encryption</h3>
            <p className="mt-1 text-xs text-muted-foreground text-center">All data encrypted in transit</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
              <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-semibold">No Data Storage</h3>
            <p className="mt-1 text-xs text-muted-foreground text-center">Documents never saved</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
              <svg className="h-8 w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-semibold">GDPR Compliant</h3>
            <p className="mt-1 text-xs text-muted-foreground text-center">Privacy-first approach</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/20">
              <svg className="h-8 w-8 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-semibold">Fast Processing</h3>
            <p className="mt-1 text-xs text-muted-foreground text-center">Optimized infrastructure</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to know about the PDF Q&A Assistant
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">What file formats do you support?</h3>
            <p className="mt-2 text-muted-foreground">
              Currently, we support PDF files up to 10MB in size. We&apos;re working on adding support for
              DOCX, TXT, and other document formats soon.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">How accurate are the answers?</h3>
            <p className="mt-2 text-muted-foreground">
              Our AI is powered by Claude, providing highly accurate contextual answers. Every response
              includes source citations so you can verify the information.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Is my data secure?</h3>
            <p className="mt-2 text-muted-foreground">
              Yes! We use end-to-end encryption and never store your documents. All processing happens
              in real-time and data is immediately discarded after your session.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Do I need to create an account?</h3>
            <p className="mt-2 text-muted-foreground">
              No account required! Simply upload your PDF and start asking questions. It&apos;s completely
              free and open to everyone.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Can I ask follow-up questions?</h3>
            <p className="mt-2 text-muted-foreground">
              Absolutely! Our AI maintains conversation context, allowing you to ask follow-up questions
              and have a natural conversation about your document.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">What languages are supported?</h3>
            <p className="mt-2 text-muted-foreground">
              The AI can understand and respond in multiple languages. Both your questions and the
              document content can be in various languages.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 px-6 py-20 shadow-2xl sm:px-16">
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Upload your first PDF and experience the future of document interaction.
              No signup required.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/ai-chatbot">
                <ShimmerButton
                  className="relative z-10"
                  background="rgba(255, 255, 255, 0.9)"
                  shimmerColor="rgba(59, 130, 246, 0.5)"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    <Upload className="mr-2 inline-block h-4 w-4" />
                    Start for Free
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <p className="text-center text-sm leading-5 text-muted-foreground">
            Built with Next.js, Tailwind CSS, and Claude AI
          </p>
        </div>
      </footer>
    </div>
  );
}

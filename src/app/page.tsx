"use client";

import { FileText, Sparkles, Zap, Brain, MessageSquare, Upload, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { DotPattern } from "@/components/magicui/dot-pattern";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/logo";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Dot Pattern Background */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />

      {/* Navigation Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 transition-opacity hover:opacity-80">
              <Logo size="md" showText={false} className="lg:hidden" />
              <Logo size="md" showText={true} className="hidden lg:flex" />
            </Link>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            <a href="#features" className="text-sm font-semibold leading-6 text-foreground hover:text-foreground/80 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-semibold leading-6 text-foreground hover:text-foreground/80 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-semibold leading-6 text-foreground hover:text-foreground/80 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-semibold leading-6 text-foreground hover:text-foreground/80 transition-colors">
              FAQ
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <ThemeToggle />
            <Link href="/ai-chatbot">
              <button className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity">
                Try for Free →
              </button>
            </Link>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 px-6 pb-6 pt-2">
              <a
                href="#features"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Link href="/ai-chatbot">
                <button className="mt-2 w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                  Try for Free →
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-32 sm:pb-32 lg:px-8 lg:pt-40">
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
      <div id="features" className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">
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
      <div id="how-it-works" className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">
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

      {/* Testimonials Section */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by researchers, students, and professionals
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See what our users have to say about PDF Q&A Assistant
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-muted-foreground">
              &ldquo;This tool has completely transformed how I review research papers. I can find specific
              methodologies and results in seconds instead of spending hours reading through documents.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">DS</span>
              </div>
              <div>
                <p className="font-semibold">Dr. Sarah Chen</p>
                <p className="text-sm text-muted-foreground">Research Scientist</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-muted-foreground">
              &ldquo;As a law student, I deal with lengthy contracts and legal documents daily. This AI assistant
              helps me quickly find relevant clauses and understand complex legal language.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">MR</span>
              </div>
              <div>
                <p className="font-semibold">Michael Rodriguez</p>
                <p className="text-sm text-muted-foreground">Law Student</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-muted-foreground">
              &ldquo;The accuracy is impressive! I use it for technical documentation and it always provides
              precise answers with exact page references. A must-have tool for any developer.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">EP</span>
              </div>
              <div>
                <p className="font-semibold">Emily Parker</p>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get started for free. No credit card required.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative rounded-3xl border-2 border-blue-500 bg-card p-8 shadow-xl sm:p-10 lg:max-w-md">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center rounded-full bg-blue-500 px-4 py-1 text-sm font-semibold text-white">
                Free Forever
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">Free Plan</h3>
              <div className="mt-4 flex items-baseline justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight">$0</span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                  /month
                </span>
              </div>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                Full access to all features, completely free
              </p>
            </div>
            <ul className="mt-8 space-y-3 text-sm leading-6">
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Upload PDFs up to 10MB
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Unlimited questions
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                AI-powered responses with Claude
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Source citations & references
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                No account required
              </li>
              <li className="flex gap-x-3">
                <svg className="h-6 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Secure & private
              </li>
            </ul>
            <Link href="/ai-chatbot" className="mt-8 block">
              <button className="w-full rounded-lg bg-blue-600 px-3 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Get Started for Free
              </button>
            </Link>
          </div>
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
      <div id="faq" className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8">
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
      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Product Column */}
            <div>
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/ai-chatbot" className="text-sm text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/ai-chatbot" className="text-sm text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/ai-chatbot" className="text-sm text-muted-foreground hover:text-foreground">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="/ai-chatbot" className="text-sm text-muted-foreground hover:text-foreground">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-sm font-semibold">Resources</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 border-t border-border pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              {/* Logo and Tagline */}
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">PDF Q&A Assistant</p>
                  <p className="text-xs text-muted-foreground">AI-Powered Document Analysis</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Dribbble</span>
                </a>
              </div>

              {/* Copyright */}
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} PDF Q&A Assistant. All rights reserved.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Built with Next.js, Tailwind CSS, and Claude AI
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

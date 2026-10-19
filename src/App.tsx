/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  BookOpen, 
  Sparkles, 
  Lock,
  Mail,
  CheckCircle2,
  Bookmark,
  AlertCircle
} from 'lucide-react';
import guideCoverImage from './assets/images/missed_not_broken_cover_1791660191345.jpg';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [sampleEmail, setSampleEmail] = useState('');
  const [sampleSubmitted, setSampleSubmitted] = useState(false);
  const [sampleTab, setSampleTab] = useState<'chapter1' | 'checklist'>('chapter1');

  // Interactive 16-question symptom checklist from Chapter 3 of the PDF
  const [checkedSymptoms, setCheckedSymptoms] = useState<Record<number, boolean>>({});

  const buyUrl = "https://whop.com/elevate-yourself-7bfb/adhd-guide-for-adult-women/";

  const toggleSymptom = (id: number) => {
    setCheckedSymptoms(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const symptomCount = Object.values(checkedSymptoms).filter(Boolean).length;

  const faqs = [
    {
      question: "Will this actually improve the quality of my everyday life?",
      answer: "Yes. As Chapter 7 emphasizes: “If a system takes more effort than the problem, drop it and try another. Good systems are simple and forgiving.” The guide replaces overwhelming lifestyle overhauls with forgiving micro-systems—shrinking tasks to two minutes, one dedicated home for essentials, visual organization, and energy management that immediately relieve daily friction and mental exhaustion."
    },
    {
      question: "How will I actually learn to deal with ADHD when other advice failed?",
      answer: "Traditional productivity models were designed for neurotypical brains driven by linear discipline. This guide focuses on dopamine-friendly strategies tailored for women: externalizing working memory, body doubling, pairing mundane chores with sensory stimulation, and dismantling the exhausting cycle of overworking and perfectionistic masking."
    },
    {
      question: "I'm not officially diagnosed yet. Will this still help me understand myself better?",
      answer: "Completely. The guide was written specifically for women who suspect or recently realized they may have ADHD. You will uncover why young girls were overlooked in diagnostic history, recognize masking habits like social scripting and people-pleasing, review lookalikes like anxiety and hormone shifts, and receive Chapter 10’s appointment prep worksheet if you decide to seek a formal assessment."
    }
  ];

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sampleEmail.trim()) {
      setSampleSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#07060a] text-zinc-100 selection:bg-purple-500 selection:text-black">
      {/* Subtle Ambient Lighting inspired by PDF cover palette (purple, magenta, warm amber) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-purple-900/20 via-pink-900/15 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[35%] right-0 w-[420px] h-[420px] bg-purple-950/15 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-24">
        
        {/* =========================================================
            SECTION 1: HEADLINE + ONE-LINE OFFER (+ PDF COVER MOCKUP)
            ========================================================= */}
        <section className="text-center pt-2 pb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-semibold text-pink-300 tracking-wider uppercase">
            <span>A Short Guide</span>
          </div>

          <p className="text-sm sm:text-base font-medium text-zinc-400 mb-3 tracking-wide">
            You’re not lazy. You’re not careless.
          </p>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] text-balance mb-6">
            Missed, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-amber-200">Not Broken</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed font-normal mb-8 text-balance">
            Undiagnosed ADHD in adult women: the signs, why they were overlooked, and practical ways to get better at handling ADHD and improve your quality of life.
          </p>

          {/* Quick Deliverable Pills directly matching the PDF cover */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-12 text-xs font-medium text-zinc-300">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
              <Check className="w-3.5 h-3.5 text-pink-400" />
              Symptom checklist
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
              <Check className="w-3.5 h-3.5 text-purple-400" />
              12 short chapters
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
              <Check className="w-3.5 h-3.5 text-amber-400" />
              7-day action plan
            </span>
          </div>

          {/* Authentic Book Mockup */}
          <div className="relative max-w-xs sm:max-w-sm mx-auto group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600/30 via-pink-500/25 to-amber-500/20 rounded-2xl blur-xl opacity-60 transition duration-700 group-hover:opacity-90" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0a12] shadow-2xl transition duration-500 transform hover:-translate-y-1">
              <img 
                src={guideCoverImage} 
                alt="Missed, Not Broken - ADHD in Adult Women Guide Cover"
                className="w-full h-auto object-cover block"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <p className="text-[11px] text-zinc-500 mt-5 uppercase tracking-widest font-medium">
            For education only. Not a diagnosis.
          </p>
        </section>

        {/* =========================================================
            SECTION 2: PROOF (Exact quote provided, nothing invented)
            ========================================================= */}
        <section className="py-16 border-y border-zinc-900 my-4 text-center">
          <blockquote className="max-w-2xl mx-auto space-y-4">
            <p className="font-editorial italic text-2xl sm:text-3xl md:text-4xl text-zinc-100 leading-snug tracking-normal">
              “Your brain isn’t the problem. The system you were handed is.”
            </p>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              You were never lazy, careless or broken. You were missed. Now you can start to be seen.
            </p>
          </blockquote>
        </section>

        {/* =========================================================
            BUY NOW (Positioned above Structure & Content)
            ========================================================= */}
        <section className="py-12 text-center">
          <div className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#130f1c] via-[#0d0a14] to-[#07060a] border border-purple-500/25 shadow-2xl">
            <div className="inline-block mb-3 text-xs tracking-widest uppercase text-pink-400 font-semibold">
              Complete Digital Guide
            </div>

            <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-2">
              Missed, Not Broken
            </h2>

            <div className="flex items-baseline justify-center gap-1.5 mb-6">
              <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">$19.99</span>
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">USD</span>
            </div>

            <p className="text-sm text-zinc-300 max-w-md mx-auto mb-8 leading-relaxed">
              Immediate access to all 12 chapters, symptom checklist, assessment prep sheet, and the 7-day action plan.
            </p>

            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 hover:opacity-95 rounded-xl shadow-lg shadow-purple-950/40 transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get Instant Access — $19.99</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-zinc-400" />
                <span>Secure payment via Whop</span>
              </div>
              <span className="hidden sm:inline text-zinc-600">·</span>
              <span>Instant download to any device</span>
              <span className="hidden sm:inline text-zinc-600">·</span>
              <span>For education only. Not a diagnosis.</span>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 3: WHAT'S INSIDE (Concrete from the 12 chapters)
            ========================================================= */}
        <section className="py-20">
          <div className="mb-10 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest text-purple-400 font-medium mb-2">Structure & Content</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              What’s inside the 12 chapters
            </h2>
          </div>

          <div className="space-y-4">
            {/* Part 1 */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/70 border border-zinc-900 transition hover:border-purple-800/40">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-lg bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-300 font-mono text-xs font-bold">
                  01
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-100 mb-1">
                    Part 1: Understand — Why You Were Missed & The Mask
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Unpack why inattentive ADHD in girls was dismissed as “shyness” or “daydreaming”. Audit the hidden toll of masking (overworking, people-pleasing, social scripting) and differentiate ADHD from anxiety, thyroid, and hormonal shifts.
                  </p>
                </div>
              </div>
            </div>

            {/* Part 2 */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/70 border border-zinc-900 transition hover:border-pink-800/40">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-lg bg-pink-950/80 border border-pink-500/30 flex items-center justify-center text-pink-300 font-mono text-xs font-bold">
                  02
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-100 mb-1">
                    Part 2: Act — Daily Systems That Don't Need Willpower
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Stop relying on motivation. Master the 7 forgiving daily systems: visual storage, one home for essentials, task shrinking, body doubling, and managing time blindness at work and home.
                  </p>
                </div>
              </div>
            </div>

            {/* Part 3 */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/70 border border-zinc-900 transition hover:border-amber-800/40">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-lg bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-300 font-mono text-xs font-bold">
                  03
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-100 mb-1">
                    Part 3: Emotions, Relationships & Boundary Scripts
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Navigate rejection sensitivity (RSD), sensory overwhelm from noise and mess, and establish guilt-free boundaries. Includes simple scripts for telling partners, family, and employers without over-explaining.
                  </p>
                </div>
              </div>
            </div>

            {/* Toolkit */}
            <div className="p-5 sm:p-6 rounded-xl bg-zinc-950/70 border border-zinc-900 transition hover:border-emerald-800/40">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300 font-mono text-xs font-bold">
                  04
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-100 mb-1">
                    The Clinical Prep Checklist & 7-Day Action Plan
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    A concrete appointment checklist so doctors take you seriously, paired with a day-by-day implementation schedule and an emergency pocket card for freeze moments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION 4: FAQ (Answering top 3 objections)
            ========================================================= */}
        <section className="py-16">
          <div className="mb-10 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest text-purple-400 font-medium mb-2">Honest Answers</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-xl border border-zinc-900 bg-zinc-950/40 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-zinc-100">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-purple-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-zinc-400 leading-relaxed border-t border-zinc-900/60 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>



        {/* =========================================================
            SECTION 6: FREE SAMPLE OPT-IN (Separate from buy button)
            ========================================================= */}
        <section className="pt-16 pb-20 border-t border-zinc-900">
          {/* Section Header */}
          <div className="mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 mb-2 text-xs font-semibold text-pink-400 uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Free Sample Preview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Look inside before you decide
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl">
              Explore real excerpts from the guide below with zero friction, or receive the offline PDF copy directly to your inbox.
            </p>
          </div>

          {/* Main Organized Sample Container */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0c0a12] shadow-2xl overflow-hidden">
            
            {/* 1. Two-Tab Segmented Selector */}
            <div className="grid grid-cols-2 border-b border-zinc-800/80 bg-zinc-950/70 p-2 sm:p-2.5 gap-2">
              <button
                type="button"
                onClick={() => setSampleTab('chapter1')}
                className={`px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center justify-center gap-2 ${
                  sampleTab === 'chapter1'
                    ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/60'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                }`}
              >
                <Bookmark className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Part 1: Chapter 1 Excerpt</span>
              </button>

              <button
                type="button"
                onClick={() => setSampleTab('checklist')}
                className={`px-4 py-3 rounded-lg text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center justify-center gap-2 ${
                  sampleTab === 'checklist'
                    ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/60'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Part 2: 16-Symptom Checklist {symptomCount > 0 ? `(${symptomCount}/16)` : ''}</span>
              </button>
            </div>

            {/* 2. Organized Tab Viewport */}
            <div className="p-6 sm:p-8">
              {/* TAB 1: CHAPTER 1 */}
              {sampleTab === 'chapter1' && (
                <div className="space-y-5">
                  <div className="h-0.5 w-16 bg-amber-500 rounded-full mb-4" />
                  
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 text-[11px] font-bold tracking-wider uppercase">
                    Chapter 1 · Full Excerpt
                  </div>

                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    You’re not lazy. You might be undiagnosed.
                  </h3>

                  <p className="text-sm sm:text-base text-amber-200/90 italic font-medium">
                    If you’ve spent years wondering why everyone else seems to manage life so easily, read this first.
                  </p>

                  <div className="space-y-3.5 text-sm text-zinc-300 leading-relaxed pt-2">
                    <p>
                      You lose your keys, again. You start five projects and finish one. You say yes to everything, then drown. You can focus for six hours on something you love, and not for six minutes on a form you need to fill in.
                    </p>
                    <p>
                      For years you may have been told you’re “too sensitive,” “disorganised,” “not living up to your potential.” So you worked harder, hid more, and quietly decided something was wrong with you.
                    </p>
                    <p className="font-medium text-white">
                      There may be another explanation: ADHD that was never spotted.
                    </p>
                  </div>

                  {/* "What You'll Get" Box directly from PDF Page 3 */}
                  <div className="mt-6 p-4 sm:p-5 rounded-xl bg-zinc-950/80 border border-amber-500/30 text-xs sm:text-sm">
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5">
                      What you’ll get in the full guide
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      The signs, why they were missed, what it can cost, and practical steps you can start today, including a printable checklist for your appointment.
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 2: SYMPTOM CHECKLIST */}
              {sampleTab === 'checklist' && (
                <div className="space-y-6">
                  <div className="h-0.5 w-16 bg-pink-500 rounded-full mb-4" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded-md bg-pink-500/10 text-pink-300 text-[11px] font-bold tracking-wider uppercase mb-2">
                        Chapter 3 · Interactive Inventory
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        Symptoms of ADHD found in adult women
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1">
                        Tick what sounds like you. Be honest, not harsh.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="px-3 py-1.5 rounded-lg bg-pink-950/50 border border-pink-800/40 text-xs font-mono font-bold text-pink-300">
                        Ticked: {symptomCount} of 16
                      </div>
                      {symptomCount > 0 && (
                        <button
                          type="button"
                          onClick={() => setCheckedSymptoms({})}
                          className="text-xs text-zinc-500 hover:text-zinc-300 underline cursor-pointer"
                        >
                          Reset
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Category 1: Attention & Memory */}
                    <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-900">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        Attention and memory
                      </h4>
                      <div className="space-y-2.5">
                        {[
                          { id: 1, text: "Zoning out in conversations, then panicking that you missed something" },
                          { id: 2, text: "Losing things daily: phone, keys, wallet, the thought you just had" },
                          { id: 3, text: "Starting tasks and drifting away halfway" },
                          { id: 4, text: "Missing deadlines or appointments despite real effort" }
                        ].map(item => (
                          <label key={item.id} className="flex items-start gap-2.5 text-xs text-zinc-300 cursor-pointer select-none group">
                            <input
                              type="checkbox"
                              checked={!!checkedSymptoms[item.id]}
                              onChange={() => toggleSymptom(item.id)}
                              className="mt-0.5 rounded border-zinc-700 bg-zinc-900 text-purple-600 focus:ring-0 cursor-pointer"
                            />
                            <span className={checkedSymptoms[item.id] ? "text-purple-200 font-medium" : "group-hover:text-zinc-100"}>
                              {item.text}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Category 2: Organisation and Time */}
                    <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-900">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                        Organisation and time
                      </h4>
                      <div className="space-y-2.5">
                        {[
                          { id: 5, text: "“Time blindness”: always late, or wildly early from anxiety" },
                          { id: 6, text: "A messy home or desk that feels impossible to fix" },
                          { id: 7, text: "Piles of laundry, mail and half-finished tasks" },
                          { id: 8, text: "Knowing exactly what to do but being unable to start" }
                        ].map(item => (
                          <label key={item.id} className="flex items-start gap-2.5 text-xs text-zinc-300 cursor-pointer select-none group">
                            <input
                              type="checkbox"
                              checked={!!checkedSymptoms[item.id]}
                              onChange={() => toggleSymptom(item.id)}
                              className="mt-0.5 rounded border-zinc-700 bg-zinc-900 text-pink-600 focus:ring-0 cursor-pointer"
                            />
                            <span className={checkedSymptoms[item.id] ? "text-pink-200 font-medium" : "group-hover:text-zinc-100"}>
                              {item.text}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Category 3: Emotions */}
                    <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-900">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Emotions
                      </h4>
                      <div className="space-y-2.5">
                        {[
                          { id: 9, text: "Intense reactions to criticism or perceived rejection (RSD)" },
                          { id: 10, text: "Quick shifts from joy to frustration to tears" },
                          { id: 11, text: "Overwhelm from noise, mess or too many demands at once" },
                          { id: 12, text: "A constant, low hum of shame" }
                        ].map(item => (
                          <label key={item.id} className="flex items-start gap-2.5 text-xs text-zinc-300 cursor-pointer select-none group">
                            <input
                              type="checkbox"
                              checked={!!checkedSymptoms[item.id]}
                              onChange={() => toggleSymptom(item.id)}
                              className="mt-0.5 rounded border-zinc-700 bg-zinc-900 text-amber-600 focus:ring-0 cursor-pointer"
                            />
                            <span className={checkedSymptoms[item.id] ? "text-amber-200 font-medium" : "group-hover:text-zinc-100"}>
                              {item.text}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Category 4: Inner Restlessness */}
                    <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-900">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        Inner restlessness
                      </h4>
                      <div className="space-y-2.5">
                        {[
                          { id: 13, text: "Racing thoughts, or a mind that won’t switch off at night" },
                          { id: 14, text: "Talking a lot or interrupting, then replaying it with embarrassment" },
                          { id: 15, text: "Impulse spending, snacking or over-commitments" },
                          { id: 16, text: "Needing background noise, fidgeting or constant stimulation" }
                        ].map(item => (
                          <label key={item.id} className="flex items-start gap-2.5 text-xs text-zinc-300 cursor-pointer select-none group">
                            <input
                              type="checkbox"
                              checked={!!checkedSymptoms[item.id]}
                              onChange={() => toggleSymptom(item.id)}
                              className="mt-0.5 rounded border-zinc-700 bg-zinc-900 text-purple-600 focus:ring-0 cursor-pointer"
                            />
                            <span className={checkedSymptoms[item.id] ? "text-purple-200 font-medium" : "group-hover:text-zinc-100"}>
                              {item.text}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-zinc-950/90 border border-zinc-800 text-xs text-zinc-400 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-zinc-200">Important:</strong> No score diagnoses ADHD. Most people relate to some of these sometimes. In ADHD they are persistent, began in childhood, and affect several areas of life. If you tick many, especially across more than one group, that is a good reason to explore an assessment (Chapter 10).
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Clean, Organized Email Delivery Bar */}
            <div className="border-t border-zinc-800/80 bg-zinc-950/90 p-5 sm:p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                    Want this sample saved as an offline PDF?
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Receive Chapter 1 and the printable 16-symptom checklist straight to your inbox.
                  </p>
                </div>

                <div className="shrink-0 w-full md:w-auto">
                  {!sampleSubmitted ? (
                    <form onSubmit={handleSampleSubmit} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                      <div className="relative w-full sm:w-64">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
                        <input
                          type="email"
                          required
                          placeholder="name@email.com"
                          value={sampleEmail}
                          onChange={(e) => setSampleEmail(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 text-xs rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>Send Free Sample</span>
                      </button>
                    </form>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-pink-300 bg-pink-950/50 border border-pink-800/40 px-3.5 py-2.5 rounded-lg">
                      <Check className="w-4 h-4 text-pink-400" />
                      <span>Sample sent to {sampleEmail}!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Quick Checkout Bar */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[#120d1c] via-[#0d0a14] to-[#07060a] border border-purple-500/20 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-sm font-bold text-white mb-0.5">Ready to get the full guide?</p>
              <p className="text-xs text-zinc-400">Instant access to all 12 chapters, clinical prep sheets, and action plan.</p>
            </div>
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg shadow-md transition whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Get Instant Access — $19.99</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

"use client";
import React from 'react';
import Link from 'next/link';

export default function Coaching() {
  return (
    <section id="coaching" className="px-4 sm:px-8 py-12 max-w-6xl mx-auto">
      <div className="flex flex-col gap-10 text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-200">
        <div className="space-y-6">
          <p>
            Maybe you’ve been drinking or using substances more than you’d like. Maybe life is starting to fray at the edges—or maybe it’s already unraveled. 
            Whether you’re at rock bottom or just recognizing a shift is needed, you don’t have to do this alone.
          </p>
          <p>
            Recovery Coaching provides a collaborative, strengths-based approach to exploring your relationship with substances, healing from within, and building a better life. 
            If you’re ready to find and access your Higher Power—however you define it—we’re here to help you reconnect with what truly matters.
          </p>
          <p>
            With support from a certified Recovery Coach, you’ll create a personalized roadmap for your healing journey, on your terms and at your pace.
          </p>
        </div>

        <div className="space-y-6">
          <h2 style={{ fontFamily: "'Alike', serif" }} className="text-2xl font-semibold">
            What is Recovery Coaching?
          </h2>
          <p>
            Recovery Coaching helps you move forward with clarity, support, and accountability. Your coach is not your sponsor or therapist—we work in partnership with you to set practical, powerful goals for your recovery and life.
          </p>
          <p>
            Together, we identify your values, build tools for resilience, and—most importantly—help you reconnect with a Higher Power of your understanding. Whether you call that God, the Universe, or simply hope, that connection can guide you into lasting change.
          </p>
        </div>

        <div className="space-y-6">
          <h2 style={{ fontFamily: "'Alike', serif" }} className="text-2xl font-semibold">
            Who Is This For?
          </h2>
          <p>
            Whether you’re sober curious, actively using, newly sober, or walking through a relapse—we meet you where you are. We work with individuals, couples, and families looking to create healthier, more connected lives.
          </p>
        </div>

        <div className="space-y-6">
          <h2 style={{ fontFamily: "'Alike', serif" }} className="text-2xl font-semibold">
            Create Your Recovery Roadmap
          </h2>
          <p>
            We know how scary it is to admit there’s a problem. But the path forward becomes clearer with the right guide.
          </p>
          <p>
            Whether you want to cut back, take a break, or break free entirely, we’ll help you create a recovery plan that aligns with your values—and supports you in your spiritual and emotional growth.
          </p>
          <p>
            We offer virtual support around the world, and in-person support in select areas. All consultations are confidential and judgment-free.
          </p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
            Book a Free Consultation
          </Link>
        </div>

        <div className="space-y-4 border-t pt-10">
          <h3 className="text-lg font-semibold">FAQs About Sober Coaching</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>What’s the difference between a Sober Coach and a sponsor or therapist?</li>
            <li>Where and how often do we meet?</li>
            <li>Can a Recovery Coach help me reconnect with my faith or Higher Power?</li>
          </ul>
          <p>
            Still have questions? <Link href="/contact" className="underline text-blue-600">Reach out here</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}

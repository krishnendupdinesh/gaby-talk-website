
const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `These Terms and Conditions govern your access to and use of the Gaby Talk website and the services offered through it. By accessing or using our website and services, you agree to these terms. If you do not agree, please discontinue use of the relevant services.`,
  },
  {
    title: "2. Our Services",
    content: `Gaby Talk provides communication-focused products, tools, and services as described on our website. The specific features, functionality, availability, and scope of any service may vary. Any additional services, project deliverables, fees, or commitments will be confirmed separately where applicable.`,
  },
  {
    title: "3. Website and Service Use",
    content: `You agree to use the Gaby Talk website and services lawfully and responsibly. You must not attempt unauthorized access, interfere with website security, introduce malicious code, misuse another person's account, disrupt our services, or use our services for fraudulent, abusive, or unlawful purposes.`,
  },
  {
    title: "4. Accounts and Security",
    content: `If Gaby Talk allows you to create an account, you are responsible for providing accurate information, safeguarding your login credentials, and notifying us of suspected unauthorized access. You must not impersonate another person, share access in an unauthorized manner, or use an account without permission.`,
  },
  {
    title: "5. Pricing and Payments",
    content: `Where paid services are offered, applicable prices, payment schedules, taxes, subscriptions, and additional charges will be communicated before purchase or in a separate agreement. Any cancellation, refund, renewal, or late-payment conditions will be governed by the applicable service terms and mandatory law.`,
  },
  {
    title: "6. User Responsibilities",
    content: `You are responsible for providing accurate information when using our services and ensuring that any content you submit is lawful and that you have the necessary rights to share it. You must not submit harmful, misleading, abusive, infringing, or otherwise unlawful material or use our services to violate the rights of others.`,
  },
  {
    title: "7. Intellectual Property",
    content: `The Gaby Talk name, branding, website design, original content, software, and other proprietary materials are owned by or licensed to their respective rights holders. You may use our services only as permitted by these terms. You must not copy, distribute, modify, or commercially exploit our intellectual property without prior authorization, except where permitted by law.`,
  },
  {
    title: "8. Third-Party Services and Links",
    content: `Our website or services may contain links to third-party websites, integrations, or tools. These services are governed by their own terms and privacy policies. Gaby Talk is not responsible for independent third-party content, availability, policies, or practices beyond our reasonable control.`,
  },
  {
    title: "9. Service Availability and Changes",
    content: `We aim to keep our website and services available and functioning properly. However, we do not guarantee uninterrupted or error-free operation. We may update, modify, suspend, or discontinue features when reasonably necessary for maintenance, security, operational improvements, or other legitimate business reasons, subject to applicable law.`,
  },
  {
    title: "10. Warranties and Disclaimers",
    content: `We strive to provide our services with reasonable care and to describe their features accurately. Except where expressly stated or required by law, our website and services are provided without guarantees that they will always be available, error-free, suitable for every purpose, or compatible with every device or third-party system.`,
  },
  {
    title: "11. Limitation of Liability",
    content: `To the extent permitted by applicable law, Gaby Talk will not be liable for indirect, incidental, special, or consequential losses arising from the use of our website or services. Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited. Any additional limitations will be subject to applicable law and any relevant written agreement.`,
  },
  {
    title: "12. Suspension and Termination",
    content: `We may suspend or restrict access to our website or services where reasonably necessary to address security risks, suspected misuse, violations of these terms, maintenance requirements, or legal obligations. Where applicable, users may stop using our services or close their accounts in accordance with the relevant account procedures and service terms.`,
  },
  {
    title: "13. Privacy",
    content: `Your use of the Gaby Talk website and services is also subject to our Privacy Policy, which explains how we collect, use, disclose, and protect personal information. Please review our Privacy Policy before submitting personal information or creating an account.`,
  },
  {
    title: "14. Changes to These Terms",
    content: `We may update these Terms and Conditions to reflect changes in our services, business practices, or legal obligations. The revised version will be published on this page with an updated effective date. Where required by law, we will provide notice or obtain your agreement before applying changes.`,
  },
  {
    title: "15. Governing Law and Disputes",
    content: `These terms are subject to applicable law. Any governing-law, jurisdiction, or dispute-resolution arrangements will be determined by the applicable legal requirements and any relevant written agreement. Nothing in these terms removes rights or protections that cannot legally be waived.`,
  },
  {
    title: "16. Contact Information",
    content: `For questions about these Terms and Conditions, please contact the Gaby Talk team using the contact details provided below.`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#101d32]">
      <section className="border-b border-[#bcecf5] bg-[#eefafd] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#159fba]">
            Legal / Terms
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms &amp; Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Please read these terms carefully before using the
            Gaby Talk website or services.
          </p>

          <p className="mt-5 text-sm text-slate-500">
            Effective date: October 23, 2026
          </p>
        </div>
      </section>

      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[220px_1fr]">
          <aside className="h-fit rounded-2xl border border-slate-200 p-5 md:sticky md:top-24">
            <p className="mb-4 font-semibold">On this page</p>

            <nav className="space-y-3 text-sm text-slate-600">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#terms-${index + 1}`}
                  className="block transition-colors hover:text-[#159fba]"
                >
                  {section.title.replace(/^\d+\.\s*/, "")}
                </a>
              ))}
            </nav>
          </aside>

          <article className="min-w-0 space-y-9">
            {sections.map((section, index) => (
              <section
                key={section.title}
                id={`terms-${index + 1}`}
                className="scroll-mt-24"
              >
                <h2 className="text-xl font-bold sm:text-2xl">
                  {section.title}
                </h2>

                <p className="mt-3 text-base leading-8 text-slate-600">
                  {section.content}
                </p>
              </section>
            ))}

            <div className="rounded-2xl border border-[#bcecf5] bg-[#eefafd] p-6">
              <h2 className="font-semibold">
                Need clarification?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Contact the Gaby Talk team if you have questions
                about these terms or our services.
              </p>

              <a
                href="mailto:YOUR_GABY_TALK_EMAIL"
                className="mt-4 inline-flex font-semibold text-[#159fba] hover:underline"
              >
                Contact Gaby Talk →
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
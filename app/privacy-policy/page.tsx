
const sections = [
  {
    title: "1. Introduction",
    content: `Welcome to Gaby Talk. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website, use our services, or contact us.`,
  },
  {
    title: "2. Information We Collect",
    content: `We may collect information you provide directly, such as your name, email address, phone number, and messages submitted through our contact forms. When you use our services, we may also collect relevant technical information, device information, and usage data needed to maintain and improve our website and services.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your information to respond to enquiries, provide and manage our services, communicate with you, improve our website and user experience, troubleshoot technical issues, prevent misuse, and comply with applicable legal obligations.`,
  },
  {
    title: "4. Sharing of Information",
    content: `Gaby Talk does not sell personal information as part of its ordinary business practices. We may share information with trusted service providers who help us host our website, manage communications, maintain functionality, or provide services. We may also disclose information when required by law or when necessary to protect our rights.`,
  },
  {
    title: "5. Cookies and Analytics",
    content: `Our website may use cookies and similar technologies to support essential functionality, remember preferences, understand website usage, and improve performance. Where required by law, we will request consent before using non-essential cookies. You can also manage cookies through your browser settings.`,
  },
  {
    title: "6. Data Security",
    content: `We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, or alteration. However, no method of transmitting or storing information electronically is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this policy, provide our services, maintain business records, resolve disputes, and comply with applicable laws.`,
  },
  {
    title: "8. Your Privacy Rights",
    content: `Depending on applicable law, you may have the right to request access to, correction of, or deletion of your personal information. You may also have the right to withdraw consent where processing relies on consent or raise a privacy complaint. Contact us to submit a request. We may need to verify your identity before responding.`,
  },
  {
    title: "9. Third-Party Services and Links",
    content: `Our website may contain links to third-party websites or use external services. These third parties may collect or process information according to their own privacy policies. We encourage you to review their policies before sharing personal information with them.`,
  },
  {
    title: "10. Children's Privacy",
    content: `Our services are not intended to collect personal information from children in violation of applicable law. If you believe a child has provided personal information inappropriately, please contact us so that we can review the situation and take appropriate action.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our services, practices, or legal obligations. Updated versions will be published on this page along with a revised effective date. Where required by law, we will provide additional notice or obtain consent.`,
  },
  {
    title: "12. Contact Us",
    content: `If you have questions about this Privacy Policy or how we handle personal information, please contact the Gaby Talk team using the contact details provided below.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#101d32]">
      <section className="border-b border-[#bcecf5] bg-[#eefafd] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#159fba]">
            Legal / Privacy
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Your privacy matters to us. Learn how Gaby Talk collects,
            uses, and protects your information when you visit our
            website or use our services.
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
                  href={`#privacy-${index + 1}`}
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
                id={`privacy-${index + 1}`}
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
                Have a privacy question?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Contact the Gaby Talk team if you have questions
                about your information or this policy.
              </p>

              <a
                href="mailto:info@empireae.xyz"
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

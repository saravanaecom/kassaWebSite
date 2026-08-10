import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy — Kassapos",
  description: "How Kassapos collects, uses, and protects your personal and business data.",
};

const LAST_UPDATED = "May 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-28">
      <section className="section-padding">
        <div className="container-xl max-w-3xl">
          <ScrollReveal className="mb-10">
            <p className="text-xs text-slate-400 mb-2">Last updated: {LAST_UPDATED}</p>
            <h1 className="text-display-lg font-extrabold font-display text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">
              Kassapos Software Solutions Pvt Ltd (&quot;Kassapos&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights.
            </p>
          </ScrollReveal>

          <div className="prose prose-slate max-w-none space-y-8">
            {
              [
                {
                  title: "1. Privacy Policy",
                  content: `We respect the privacy of our users. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and mobile application. Please read this Privacy Policy carefully before using our website or services.
              
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. Any changes will be reflected by updating the "Last Updated" date. Changes become effective immediately upon posting the updated Privacy Policy.`,
                },
                {
                  title: "2. Personal Information",
                  content: `We may collect personally identifiable information that you voluntarily provide when registering on our website or mobile application.
              
              This information may include:
              
              • Name
              • Email Address
              • Mobile Number
              • Shipping / Delivery Address
              • Login Credentials`,
                },
                {
                  title: "3. What Information Is Collected?",
                  content: `We may collect a small amount of information through cookies and similar technologies.
              
              This information helps us:
              
              • Identify your browser
              • Improve website performance
              • Provide analytics
              • Remember your language preference
              • Keep you logged in securely`,
                },
                {
                  title: "4. How We Collect Information",
                  content: `We collect information directly from you through registration forms, login forms, and other forms where you voluntarily provide your personal details while using our website or mobile application.`,
                },
                {
                  title: "5. How Your Information Is Used",
                  content: `The information collected helps us provide a smooth, secure, and personalized experience.
              
              We may use your information to:
              
              • Provide our products and services
              • Maintain, secure, and troubleshoot our applications
              • Process your requested transactions
              • Improve and develop our software
              • Personalize your experience
              • Recommend relevant products and services
              • Send promotional communications and offers when applicable`,
                },
                {
                  title: "6. Information Sharing",
                  content: `We only share information when necessary.
              
              • Your login credentials are used only for authentication.
              • Your name and contact details may be used by our admin team to generate coupons or promotional offers.
              • If you request delivery, your address and mobile number may be shared with our delivery personnel to complete your order.`,
                },
                {
                  title: "7. Correcting Your Information",
                  content: `Users can update or change their delivery address at any time.
              
              For security reasons, login credentials cannot be modified through the application.`,
                },
                {
                  title: "8. Policy Updates",
                  content: `We may periodically release enhancements, bug fixes, updates, upgrades, or other improvements to our services.
              
              These updates may modify, improve, or remove certain features or functionalities. By continuing to use our services, you agree that such updates become part of the service and remain subject to this Privacy Policy and our Terms of Service.
              
              We are not obligated to continue providing any specific feature or functionality indefinitely.`,
                },
                {
                  title: "9. Data Deletion",
                  content: `Thank you for using Kassapos.
              
              If you would like your data removed from our database, please send your request to:
              
              Email: saravana@kassapos.in
              
              Our service team will respond within 15 business working days. Once your requested data has been permanently deleted, you will receive a confirmation email.`,
                },
                {
                  title: "10. Contact Information",
                  content: `Kassapos Software Solutions
              
              No.1/181, 1st Floor,
              Elumalai Salai,
              Nanmangalam,
              Chennai – 600 117
              
              Landmark: Near Nanmangalam Panchayat
              
              Phone: +91 87540 31480
              
              Email: saravana@kassapos.in`,
                },
              ]
//             [
//               {
//                 title: "1. Information We Collect",
//                 content: `We collect information you provide directly when registering, purchasing, or contacting us. This includes:

// • **Business Information**: Business name, GSTIN, address, industry type.
// • **Contact Details**: Name, phone number, email address.
// • **Billing Data**: Transaction records, invoice data, payment method metadata (we do not store card numbers).
// • **Usage Data**: How you use the Kassapos application, feature usage patterns, error logs.
// • **Device Information**: IP address, browser type, device model for support and security purposes.`,
//               },
//               {
//                 title: "2. How We Use Your Information",
//                 content: `We use collected information to:

// • Provide, operate, and improve the Kassapos platform.
// • Process billing and send receipts.
// • Send WhatsApp or SMS alerts you've opted into (low stock, daily reports, etc.).
// • Provide customer support and respond to inquiries.
// • Send product updates, security notices, and compliance information.
// • Comply with legal obligations including GST and Indian tax law.

// We do **not** sell your personal information to third parties.`,
//               },
//               {
//                 title: "3. Data Storage and Security",
//                 content: `Your data is stored on AWS (Amazon Web Services) servers located in India (Mumbai region). We implement industry-standard security including:

// • TLS 1.3 encryption in transit.
// • AES-256 encryption at rest.
// • Role-based access controls.
// • Automated nightly backups to encrypted Google Drive.
// • Regular security audits and penetration testing.`,
//               },
//               {
//                 title: "4. Data Sharing",
//                 content: `We share your data only in the following limited circumstances:

// • **Service Providers**: AWS (hosting), WhatsApp Business API (messaging), Razorpay/PhonePe (payments). All are contractually bound to protect your data.
// • **Legal Compliance**: When required by Indian law, court order, or government request.
// • **Business Transfer**: In case of merger, acquisition, or asset sale, with advance notice to you.`,
//               },
//               {
//                 title: "5. Your Rights",
//                 content: `You have the right to:

// • Access the personal data we hold about you.
// • Correct inaccurate data.
// • Request deletion of your account and associated data (subject to legal retention requirements).
// • Opt out of marketing communications at any time.
// • Data portability — export your business data in CSV/Excel format at any time from Settings.

// To exercise these rights, contact us at info@kassapos.in.`,
//               },
//               {
//                 title: "6. Cookies",
//                 content: `Our website uses essential cookies for authentication and security. We use analytics cookies (Google Analytics) to understand how visitors use our site. You can disable analytics cookies in your browser settings. We do not use advertising cookies.`,
//               },
//               {
//                 title: "7. Data Retention",
//                 content: `We retain your business data as long as your account is active. After account closure, data is retained for 7 years as required by Indian tax law (GST records). You may request deletion of non-financial personal data at any time.`,
//               },
//               {
//                 title: "8. Children's Privacy",
//                 content: `Kassapos is a business software platform. We do not knowingly collect information from individuals under 18. If you believe a minor has provided us data, contact us immediately.`,
//               },
//               {
//                 title: "9. Changes to This Policy",
//                 content: `We may update this privacy policy periodically. We will notify you of significant changes via email or in-app notification at least 30 days before they take effect.`,
//               },
//               {
//                 title: "10. Contact Us",
//                 content: `For privacy-related concerns:

// **Kassapos Software Solutions Pvt Ltd**
// No.1/181, 1st Floor Elumalai Salai, Nanmangalam, Chennai – 600 117
// Email: info@kassapos.in
// Phone: +91 87540 31480`,
//               },
//             ]
            
            
            .map((section) => (
              <ScrollReveal key={section.title}>
                <div className="pb-8 border-b border-surface-border last:border-0">
                  <h2 className="text-lg font-bold text-slate-900 mb-4">{section.title}</h2>
                  <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

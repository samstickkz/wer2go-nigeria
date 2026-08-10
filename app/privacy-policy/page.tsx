import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

const PAGE_PATH = "/privacy-policy";
const metaTitle = "Privacy Policy";
const metaDescription =
  "How wer2 GO collects, uses, stores and protects your personal data when you use the wer2 GO ride-hailing app and website in Nigeria.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: `${metaTitle} | ${SITE_NAME}`,
    description:
      "How wer2 GO collects, uses and protects your personal data in Nigeria.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: SITE_NAME,
    locale: "en_NG",
    images: [
      {
        url: "/brand/hero-car.png",
        width: 1920,
        height: 1080,
        alt: "wer2 GO — ride-hailing in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${metaTitle} | ${SITE_NAME}`,
    description:
      "How wer2 GO collects, uses and protects your personal data in Nigeria.",
    images: ["/brand/hero-car.png"],
  },
};

const LAST_UPDATED = "January 2026";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-bold text-2xl sm:text-3xl text-charcoal mt-12 mb-4">
      {children}
    </h2>
  );
}
function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display font-semibold text-lg text-charcoal mt-7 mb-2">
      {children}
    </h3>
  );
}
function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-display font-semibold text-base text-charcoal mt-5 mb-2">
      {children}
    </h4>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 leading-relaxed text-charcoal/75">{children}</p>;
}
function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-3 space-y-2 text-charcoal/75">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
function Term({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <p className="mt-3 leading-relaxed text-charcoal/75">
      <strong className="font-semibold text-charcoal">{term}</strong> {children}
    </p>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20">
          <p className="text-xs uppercase tracking-wider text-brand font-semibold">
            Legal
          </p>
          <h1 className="mt-3 font-display font-bold text-4xl sm:text-5xl text-charcoal">
            Privacy Policy
          </h1>
          <p className="mt-4 text-charcoal/60 text-sm">
            Last updated: {LAST_UPDATED} · Applies to wer2 GO in Nigeria
          </p>

          <H2>Introduction</H2>
          <P>
            wer2 GO Company (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;wer2&rdquo;,
            &ldquo;wer2 GO&rdquo;) is committed to protecting the privacy of all
            visitors to our website and all visitors who access our website or
            services through any mobile application (together, the
            &ldquo;Website&rdquo;). This Privacy Policy explains how your personal
            information is collected, used, and disclosed by wer2 GO, including
            for riders and drivers using wer2 GO in Nigeria.
          </P>
          <P>
            Please read the following privacy policy, which explains how we use
            and protect your information. By visiting and/or ordering services on
            this Website, you agree and, where required, you consent to the
            collection, use, and transfer of your information as set out in this
            policy.
          </P>

          <H2>1. Interpretation and Definitions</H2>
          <H3>1.1 Definitions</H3>
          <P>For the purposes of this Privacy Policy:</P>
          <Term term="Applications">
            refers to the Company iOS driver app, iOS Customer app, Android
            driver app, and Android Customer app.
          </Term>
          <Term term="Account">
            means a unique account created for you to access our Service or parts
            of our Service.
          </Term>
          <Term term="Company">
            (referred to as either &ldquo;the Company&rdquo;, &ldquo;We&rdquo;,
            &ldquo;Us&rdquo;, &ldquo;Our&rdquo; or &ldquo;wer2&rdquo;) refers to
            wer2 GO.
          </Term>
          <Term term="Cookies">
            are small files that are placed on your computer, mobile device or any
            other device by a website, containing the details of your browsing
            history on that website among its many uses.
          </Term>
          <Term term="Customer">
            refers to a person that signs up to use the Company Service.
          </Term>
          <Term term="Device">
            means any device that can access the Service such as a computer, a
            cell phone or a digital tablet.
          </Term>
          <Term term="IP address">
            is the number assigned to a device when connected to the Internet.
          </Term>
          <Term term="Personal Data">
            is any information that relates to an identified or identifiable
            individual.
          </Term>
          <Term term="Service">refers to the Website and Applications.</Term>
          <Term term="Service Provider">
            means any natural or legal person who processes the data on behalf of
            wer2 GO.
          </Term>
          <Term term="Usage Data">
            refers to data collected automatically, either generated by the use of
            the Service or from the Service infrastructure itself.
          </Term>
          <Term term="Website">
            refers to wer2 GO, accessible from gower2.com.
          </Term>
          <Term term="You">
            means the individual accessing or using the Service, or the company or
            other legal entity on behalf of which such individual is accessing or
            using the Service, as applicable.
          </Term>

          <H2>2. Collecting and Using Your Personal Data</H2>
          <H3>2.1 Types of Data Collected</H3>
          <H4>2.1.1 Personal Data</H4>
          <P>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. Personally identifiable information may include, but is
            not limited to:
          </P>
          <UL
            items={[
              "Email address",
              "First name and last name",
              "Phone number",
              "Address",
              "State, Province, ZIP/Postal code, City",
              "Usage Data",
            ]}
          />
          <H4>2.1.2 Usage Data</H4>
          <P>Usage Data is collected automatically when using the Service.</P>
          <P>
            Usage Data may include information such as your Device&rsquo;s
            Internet Protocol address (e.g. IP address), browser type, browser
            version, pages of our Service that you visit, and more.
          </P>
          <H3>2.2 Tracking Technologies and Cookies</H3>
          <P>
            We use Cookies and similar tracking technologies to track activity on
            our Service and store certain information. Tracking technologies used
            are beacons, tags, and scripts to improve and analyse our Service.
            These may include:
          </P>
          <UL
            items={[
              <>
                <strong className="font-semibold text-charcoal">
                  Cookies or Browser Cookies
                </strong>
                : small files placed on your Device.
              </>,
              <>
                <strong className="font-semibold text-charcoal">
                  Web Beacons
                </strong>
                : small electronic files that allow the Company to count users and
                track website statistics.
              </>,
            ]}
          />

          <H2>3. Use of Your Personal Data</H2>
          <P>The Company may use Personal Data for the following purposes:</P>
          <UL
            items={[
              "To provide and maintain our Service.",
              "To manage your Account.",
              "For the performance of a contract with you.",
              "To contact you for updates or security notifications.",
              "To send promotional news, offers, or similar products.",
              "To manage requests or business transfers.",
              "For business analysis and improvement of services.",
            ]}
          />

          <H2>4. Third Party Services</H2>
          <P>
            We may share the information we collect with third parties such as
            advertisers and service providers, including hosting, database
            management, and customer service providers.
          </P>
          <P>
            We may also share non-personal information for analytics purposes with
            third parties such as web analytics partners or ad networks.
          </P>

          <H2>5. Retention of Your Personal Data</H2>
          <P>
            The Company will retain your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. This
            includes legal obligations and dispute resolution.
          </P>

          <H2>6. Deletion of Your Personal Data</H2>
          <P>Your personal data may be deleted upon request.</P>
          <P>
            We respond to data deletion and transfer requests within one month.
          </P>

          <H2>7. Transfer of Your Personal Data</H2>
          <P>
            Your information may be processed in countries with different data
            protection laws. By using the Service, you consent to such data
            transfers.
          </P>

          <H2>8. Disclosure of Your Personal Data</H2>
          <H3>8.1 Business Transactions</H3>
          <P>
            If the Company is involved in a merger or asset sale, your Personal
            Data may be transferred. We will notify you before this happens.
          </P>
          <H3>8.2 Law Enforcement</H3>
          <P>
            We may disclose your data to comply with legal obligations or respond
            to law enforcement requests.
          </P>
          <H3>8.3 Other Legal Requirements</H3>
          <P>
            We may disclose your data if we believe it is necessary to:
          </P>
          <UL
            items={[
              "Comply with legal obligations.",
              "Protect our rights or property.",
              "Prevent wrongdoing.",
              "Ensure public safety.",
            ]}
          />

          <H2>9. Security of Your Personal Data</H2>
          <P>
            We strive to protect your Personal Data, but no method is 100%
            secure. We employ commercially acceptable measures to protect your
            data.
          </P>

          <H2>10. Links to Other Websites</H2>
          <P>
            Our Service may contain links to third-party sites. We are not
            responsible for their privacy policies and recommend reviewing them
            before use.
          </P>

          <H2>11. Changes to this Privacy Policy</H2>
          <P>
            We may update this Privacy Policy. Any changes will be posted on this
            page, and we will notify you via email or in-service notices.
          </P>

          <H2>Contact Us</H2>
          <P>
            If you have any questions about this Privacy Policy, you can contact
            us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-brand hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </P>
        </section>
      </main>
      <Footer />
    </>
  );
}

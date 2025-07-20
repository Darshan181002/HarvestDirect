// import React from 'react';
// import '../styles/LegalPages.css';

// function PrivacyPolicy() {
//   return (
//     <div className="legal-page">
//       <div className="legal-container">
//         <h1>Privacy Policy</h1>
//         <p className="effective-date">Effective Date: May 1, 2025</p>

//         <p className="intro">
//           Harvest Direct values your privacy. This Privacy Policy outlines how we collect, use, and protect the information you provide when using our waitlist website.
//         </p>

//         <section>
//           <h2>1. What We Collect</h2>
//           <p>When you register for the waitlist, we may collect:</p>
//           <ul>
//             <li>Business name, owner/manager name</li>
//             <li>Contact number and email</li>
//             <li>Business address (optional)</li>
//             <li>Type of establishment (e.g., restaurant, bar, cloud kitchen)</li>
//           </ul>
//         </section>

//         <section>
//           <h2>2. How We Use Your Information</h2>
//           <p>We use your data to:</p>
//           <ul>
//             <li>Reach out for onboarding and verification</li>
//             <li>Share updates about our services, launch timelines, or offers</li>
//             <li>Analyze customer demand and build relevant supply categories</li>
//           </ul>
//           <p>We do not sell or rent your data to third parties.</p>
//         </section>

//         <section>
//           <h2>3. Third-Party Services</h2>
//           <p>
//             We may use third-party tools for communication (e.g., WhatsApp, email campaigns, CRM tools). These platforms may store limited data as per their own policies.
//           </p>
//         </section>

//         <section>
//           <h2>4. Data Security</h2>
//           <p>
//             We take reasonable steps to protect your data using modern security practices. However, no platform can be completely secure, and we cannot guarantee absolute data protection.
//           </p>
//         </section>

//         <section>
//           <h2>5. Your Rights</h2>
//           <p>You may:</p>
//           <ul>
//             <li>Request to view, modify, or delete your data</li>
//             <li>Opt out of communications at any time by contacting us</li>
//           </ul>
//         </section>

//         <section>
//           <h2>6. Changes to This Policy</h2>
//           <p>
//             We may update this policy as we expand. All changes will be reflected here with the updated effective date.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default PrivacyPolicy; 

import React from 'react';
import { Helmet } from "react-helmet-async";
import '../styles/LegalPages.css';

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Harvest Direct</title>
        <meta
          name="description"
          content="Read how Harvest Direct collects, uses, and protects your data as part of our B2B food supply waitlist in Mumbai."
        />
        <link rel="canonical" href="https://harvestdirect.vercel.app/privacy-policy" />
      </Helmet>
      <div className="legal-page">
        <div className="legal-container">
          <h1>Privacy Policy</h1>
          <p className="effective-date">Effective Date: May 1, 2025</p>

          <p className="intro">
            Harvest Direct values your privacy. This Privacy Policy outlines how we collect, use, and protect the information you provide when using our waitlist website.
          </p>

          <section>
            <h2>1. What We Collect</h2>
            <p>When you register for the waitlist, we may collect:</p>
            <ul>
              <li>Business name, owner/manager name</li>
              <li>Contact number and email</li>
              <li>Business address (optional)</li>
              <li>Type of establishment (e.g., restaurant, bar, cloud kitchen)</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Reach out for onboarding and verification</li>
              <li>Share updates about our services, launch timelines, or offers</li>
              <li>Analyze customer demand and build relevant supply categories</li>
            </ul>
            <p>We do not sell or rent your data to third parties.</p>
          </section>

          <section>
            <h2>3. Third-Party Services</h2>
            <p>
              We may use third-party tools for communication (e.g., WhatsApp, email campaigns, CRM tools). These platforms may store limited data as per their own policies.
            </p>
          </section>

          <section>
            <h2>4. Data Security</h2>
            <p>
              We take reasonable steps to protect your data using modern security practices. However, no platform can be completely secure, and we cannot guarantee absolute data protection.
            </p>
          </section>

          <section>
            <h2>5. Your Rights</h2>
            <p>You may:</p>
            <ul>
              <li>Request to view, modify, or delete your data</li>
              <li>Opt out of communications at any time by contacting us</li>
            </ul>
          </section>

          <section>
            <h2>6. Changes to This Policy</h2>
            <p>
              We may update this policy as we expand. All changes will be reflected here with the updated effective date.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;

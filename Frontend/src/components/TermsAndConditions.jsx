import React from 'react';
import '../styles/LegalPages.css';

function TermsAndConditions() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Terms & Conditions (T&C)</h1>
        <p className="effective-date">Effective Date: May 1, 2025</p>

        <p className="intro">
          Welcome to Harvest Direct! These Terms & Conditions ("Terms") govern your use of our website and services related to our waitlist and onboarding process. By accessing or using the site, you agree to be bound by these Terms.
        </p>

        <section>
          <h2>1. About Harvest Direct</h2>
          <p>
            Harvest Direct is a B2B food supply chain startup based in Mumbai, India. We are currently building a network to supply fresh produce and kitchen essentials to restaurants, cloud kitchens, hotels, and similar businesses. Our waitlist allows interested businesses to register interest in becoming early customers.
          </p>
        </section>

        <section>
          <h2>2. Eligibility</h2>
          <p>By joining our waitlist or using our services, you confirm that:</p>
          <ul>
            <li>You are an authorized representative of a business with a valid GST and FSSAI license.</li>
            <li>You are at least 18 years of age.</li>
          </ul>
        </section>

        <section>
          <h2>3. Waitlist Registration</h2>
          <p>When you join the waitlist:</p>
          <ul>
            <li>You agree to provide accurate business and contact information.</li>
            <li>Joining the waitlist does not guarantee delivery, pricing, or availability of products.</li>
            <li>We may contact you via email, WhatsApp, or phone for onboarding, feedback, or updates.</li>
          </ul>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this site—including text, logos, visuals, and graphics—is the property of Harvest Direct and may not be copied, modified, or used without permission.
          </p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>
            This site and waitlist are provided "as is." We are not liable for any direct, indirect, or incidental losses arising from your use of our site, delays in service rollout, or product availability.
          </p>
        </section>

        <section>
          <h2>6. Modifications</h2>
          <p>
            We reserve the right to update or modify these Terms at any time. Changes will be effective upon posting. It is your responsibility to review them periodically.
          </p>
        </section>

        <section>
          <h2>7. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TermsAndConditions; 
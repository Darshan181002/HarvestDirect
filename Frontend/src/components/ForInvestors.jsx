import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import '../styles/ForInvestors.css';
import logoOnly from '../assets/logo-only.png';

const ForInvestors = () => {
  const [downloadCount, setDownloadCount] = useState({});
  const availableDocuments = [1, 2,];
  // 3, 4, 5, 6
  const documents = [
    {
      id: 1,
      title: "One Pager",
      description: "Get an at-a-glance overview of our vision, product, and growth story.",
      fileName: "HarvestDirect_OnePager.pdf",
      // fileSize: "1.5 MB",
      category: "Overview ",
      icon: "📝"
    },
    {
      id: 2,
      title: "Pitch Deck",
      description: "Complete overview of Harvest Direct's business model, market opportunity, and growth strategy",
      fileName: "HarvestDirect_PitchDeck.pdf",
      // fileSize: "2.4 MB",
      category: "Overview",
      icon: "📊"
    },
    {
      id: 3,
      title: "Financial Projections",
      description: "Detailed financial forecasts, revenue models, and projected growth metrics",
      fileName: "HarvestDirect_FinancialProjections.pdf",
      // fileSize: "1.8 MB",
      category: "Financials",
      icon: "💰"
    },
    {
      id: 4,
      title: "Market Analysis",
      description: "In-depth analysis of the B2B food supply market in Mumbai and expansion opportunities",
      fileName: "HarvestDirect_MarketAnalysis.pdf",
      // fileSize: "3.1 MB",
      category: "Market",
      icon: "📈"
    },
    {
      id: 5,
      title: "Product Demo",
      description: "Technical overview of our platform, features, and user experience",
      fileName: "HarvestDirect_ProductDemo.pdf",
      // fileSize: "5.2 MB",
      category: "Product",
      icon: "🔧"
    },
    {
      id: 6,
      title: "Traction Milestone",
      description: "Discover the key achievements powering our momentum.",
      fileName: "HarvestDirect_TractionMilestone.pdf",
      // fileSize: "1.5 MB",
      category: "Business Progress",
      icon: "🚀"
    }
  ];

  const handleDownload = (doc) => {
    setDownloadCount(prev => ({
      ...prev,
      [doc.id]: (prev[doc.id] || 0) + 1
    }));

    if (availableDocuments.includes(doc.id)) {
      const link = document.createElement('a');
      link.href = `/pdfs/${doc.fileName}`;
      link.download = doc.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log(`Downloaded: ${doc.title}`);
    } else {
      alert(`${doc.title} will be available soon. Please check back later.`);
    }
  };

  return (
    <>
      <Helmet>
        <title>For Investors | Harvest Direct B2B Food Supply Mumbai</title>
        <meta
          name="description"
          content="Download the Harvest Direct pitch deck and investor documents. Explore opportunities to invest in Mumbai's fastest-growing B2B food supply startup."
        />
        <link rel="canonical" href="https://harvestdirect.vercel.app/investors" />
      </Helmet>
      <div className="investors-container">

        {/* Navigation */}
        <nav className="investors-nav">
          <div className="nav-brand">
            <Link to="/">
              <img src={logoOnly} alt="Harvest Direct logo" className="nav-logo" />
              <span className="nav-text">Harvest Direct</span>
            </Link>
          </div>
          <div className="nav-right">
            <Link to="/" className="nav-back-link">
              ← Back to Home
            </Link>
          </div>
        </nav>

        {/* Header Section */}
        <div className="investors-header">
          <div className="investors-header-content">
            <h1 className="investors-title">For Investors</h1>
            <p className="investors-subtitle">
              Download our comprehensive investment materials and learn about the opportunity to revolutionize Mumbai's B2B food supply chain.
            </p>
          </div>
        </div>

        {/* Documents Section */}
        <div className="investors-content">
          <section className="documents-section">
            <h2 className="section-title">Investment Documents</h2>
            <p className="section-subtitle">
              Access our complete investor package including pitch deck, financials, market analysis, and more.
            </p>
            <div className="documents-grid">
              {documents.map((doc) => (
                <div key={doc.id} className="document-card">
                  <div className="document-icon">{doc.icon}</div>
                  <div className="document-content">
                    <h3 className="document-title">{doc.title}</h3>
                    <p className="document-description">{doc.description}</p>
                    <div className="document-meta">
                      <span className="document-category">{doc.category}</span>
                      <span className="document-size">{doc.fileSize}</span>
                    </div>
                  </div>
                  <button
                    className={`download-button ${availableDocuments.includes(doc.id) ? 'available' : 'coming-soon'}`}
                    onClick={() => handleDownload(doc)}
                  >
                    <span className="download-icon">📄</span>
                    {availableDocuments.includes(doc.id) ? 'Download PDF' : 'Coming Soon'}
                  </button>
                  {downloadCount[doc.id] && (
                    <div className="download-count">
                      Downloaded {downloadCount[doc.id]} time{downloadCount[doc.id] !== 1 ? 's' : ''}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
            <h2 className="section-title">Ready to Invest?</h2>
            <p className="section-subtitle">
              Get in touch with our team to discuss investment opportunities and next steps.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:harvestdirect.in@gmail.com">harvestdirect.in@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+91xxxxxxxxxx">+91 xxxxx xxxxx</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🏢</div>
                <div className="contact-details">
                  <h4>Office</h4>
                  <p>Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="investors-footer">
          <div className="footer-content">
            <div className="footer-copyright">© 2025 Harvest Direct. All rights reserved.</div>
            <div className="footer-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ForInvestors;

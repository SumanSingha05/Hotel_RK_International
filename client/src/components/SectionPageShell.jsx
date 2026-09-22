import React, { useEffect } from "react";
import { Home } from "lucide-react";

const SectionPageShell = ({ title, tagline, path, metaTitle, metaDescription, onNavigate, children }) => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content") || "";
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute("href") || "";

    document.title = metaTitle;
    description?.setAttribute("content", metaDescription);
    canonical?.setAttribute("href", `https://www.hotelrkinternational.com${path}`);

    return () => {
      document.title = previousTitle;
      description?.setAttribute("content", previousDescription);
      canonical?.setAttribute("href", previousCanonical);
    };
  }, [metaDescription, metaTitle, path]);

  return (
    <main className="section-detail-page">
      <div className="corporate-gallery-top-bar">
        <div className="container">
          <div className="gallery-header-row">
            <div>
              <div className="corporate-breadcrumb">
                <button type="button" onClick={() => onNavigate("/")} className="breadcrumb-link">
                  <Home size={14} />
                  <span>Home</span>
                </button>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">{title}</span>
              </div>
              <h1 className="gallery-page-main-title">{title}</h1>
              <p className="gallery-page-tagline">{tagline}</p>
            </div>
          </div>
        </div>
      </div>
      {children}
    </main>
  );
};

export default SectionPageShell;

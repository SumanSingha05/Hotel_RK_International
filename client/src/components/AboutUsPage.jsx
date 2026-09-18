import React, { useEffect } from "react";
import { Home } from "lucide-react";
import AboutSection from "./AboutSection";

const ABOUT_TITLE = "About Hotel RK International | Boutique Hotel in New Digha";
const ABOUT_DESCRIPTION =
  "Learn about Hotel RK International, our central New Digha location, nearby attractions, comfortable rooms, amenities, and hospitality.";

const AboutUsPage = ({ onNavigate, onOpenBooking }) => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.getAttribute("content") || "";
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute("href") || "";

    document.title = ABOUT_TITLE;
    description?.setAttribute("content", ABOUT_DESCRIPTION);
    canonical?.setAttribute("href", "https://www.hotelrkinternational.com/about-us");

    return () => {
      document.title = previousTitle;
      description?.setAttribute("content", previousDescription);
      canonical?.setAttribute("href", previousCanonical);
    };
  }, []);

  return (
    <main className="corporate-gallery-page">
      <div className="corporate-gallery-top-bar">
        <div className="container">
          <div className="gallery-header-row">
            <div>
              <div className="corporate-breadcrumb">
                <button
                  type="button"
                  onClick={() => onNavigate("/")}
                  className="breadcrumb-link"
                >
                  <Home size={14} />
                  <span>Home</span>
                </button>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">About Us</span>
              </div>
              <h1 className="gallery-page-main-title">About Hotel RK International</h1>
              <p className="gallery-page-tagline">
                Comfortable stays, thoughtful hospitality, and a central location in New Digha.
              </p>
            </div>
          </div>
        </div>
      </div>

      <AboutSection onOpenBooking={onOpenBooking} />
    </main>
  );
};

export default AboutUsPage;

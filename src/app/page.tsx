"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  {
    "id": "hero-image",
    "url": "https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "modern office workspace - Photo by Pew Nguyen"
  },
  {
    "id": "about-image",
    "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Overhead view of a diverse team in a business meeting using laptops and tablets."
  },
  {
    "id": "service-strong-security",
    "url": "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Close-up view of a mouse cursor over digital security text on display."
  },
  {
    "id": "service-efficiency",
    "url": "https://images.pexels.com/photos/7213436/pexels-photo-7213436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "A modern workspace with a notebook, smartphone, and sticky notes emphasizing productivity and organization."
  },
  {
    "id": "service-innovation",
    "url": "https://images.pexels.com/photos/12060424/pexels-photo-12060424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Free stock photo of 3d, abstract, art"
  },
  {
    "id": "client-companies-logos",
    "url": "https://images.pexels.com/photos/12113816/pexels-photo-12113816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "alt": "Industrial wall featuring Michelin and Pirelli signage with smoking area sign."
  }
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Your Brand"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroSplit
            title="Build Your Business"
            description="Innovative solutions tailored for your growth."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            imagePosition="right"
            buttons={[
              { text: "Get Started", href: "about" },
              { text: "Services", href: "services" }
            ]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <SplitAbout
            title="About Us"
            description="Learn more about our mission, values, and what drives us forward"
            imageSrc={assetMap.find(a => a.id === "about-image")?.url}
            bulletPoints={[
              { title: "Innovation", description: "We push boundaries" },
              { title: "Quality", description: "Excellence in every detail" }
            ]}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FeatureCardOne
            title="Our Services"
            description="Discover the tools and capabilities we offer."
            features={[
              {
                title: "Strong Security",
                description: "Advanced measures to protect your data.",
                imageSrc: assetMap.find(a => a.id === "service-strong-security")?.url
              },
              {
                title: "Efficiency",
                description: "Streamlined processes for better productivity.",
                imageSrc: assetMap.find(a => a.id === "service-efficiency")?.url
              },
              {
                title: "Innovation",
                description: "Leading-edge technology to drive success.",
                imageSrc: assetMap.find(a => a.id === "service-innovation")?.url
              }
            ]}
          />
        </div>
      </div>

      <div id="socialProof" data-section="socialProof" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <SocialProofOne
            title="Trusted by Leading Brands"
            description="Proudly serving industry leaders worldwide."
            logos={[assetMap.find(a => a.id === "client-companies-logos")?.url]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactSplit
            tag="Contact Us"
            title="Reach Out"
            description="Get in touch for collaborations and inquiries."
            imageSrc={assetMap.find(a => a.id === "about-image")?.url}
            mediaPosition="right"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24 ">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterLogoEmphasis
            columns={[
              {
                items: [
                  { label: "Home", href: "home" },
                  { label: "About", href: "about" },
                  { label: "Services", href: "services" },
                  { label: "Contact", href: "contact" }
                ]
              }
            ]}
            logoText="Your Brand"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

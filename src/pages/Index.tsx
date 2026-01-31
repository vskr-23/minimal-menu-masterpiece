import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import PhotoGallery from "@/components/PhotoGallery";
import Reviews from "@/components/Reviews";
import Info from "@/components/Info";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <Menu />
      <PhotoGallery />
      <Reviews />
      <Info />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

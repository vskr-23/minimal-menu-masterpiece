import { Clock, Phone, MapPin } from "lucide-react";

const Info = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl mb-2">Hours</h3>
            <p className="text-muted-foreground">
              Every Day<br />
              <span className="text-foreground font-medium">11:30 AM – 10:30 PM</span>
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl mb-2">Phone</h3>
            <a
              href="tel:+919875990099"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 98759 90099
            </a>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-xl mb-2">Address</h3>
            <p className="text-muted-foreground">
              110, Punjab Avenue<br />
              Ladhewali, Jalandhar<br />
              Punjab 144009
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

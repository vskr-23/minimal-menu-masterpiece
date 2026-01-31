import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Best pizza in Jalandhar! The crust is perfectly crispy and toppings are so fresh. My go-to place for family dinners.",
    date: "2 weeks ago",
  },
  {
    name: "Rahul Gupta",
    rating: 5,
    text: "Amazing paneer tikka pizza - a perfect fusion! The staff is super friendly and the ambiance is cozy. Highly recommend!",
    date: "1 month ago",
  },
  {
    name: "Anita Kaur",
    rating: 5,
    text: "We ordered for a birthday party and everyone loved it. Quick delivery and the pizzas arrived hot. Will order again!",
    date: "3 weeks ago",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 px-4 md:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title glow-text">What People Say</h2>
        <p className="section-subtitle mb-16">
          Loved by our customers
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-card/50 backdrop-blur px-6 py-4 rounded-2xl border border-border/50">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.8</span>
            <span className="text-muted-foreground">on Zomato</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

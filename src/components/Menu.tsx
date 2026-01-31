import { Flame } from "lucide-react";

const menuItems = [
  {
    name: "Margherita",
    description: "Fresh tomatoes, mozzarella, basil, olive oil",
    price: "₹249",
    isPopular: true,
  },
  {
    name: "Pepperoni Feast",
    description: "Double pepperoni, mozzarella, oregano",
    price: "₹349",
    isPopular: true,
  },
  {
    name: "BBQ Chicken",
    description: "Grilled chicken, BBQ sauce, onions, cilantro",
    price: "₹399",
    isPopular: false,
  },
  {
    name: "Veggie Supreme",
    description: "Bell peppers, olives, mushrooms, onions, corn",
    price: "₹299",
    isPopular: false,
  },
  {
    name: "Paneer Tikka",
    description: "Spiced paneer, capsicum, onions, mint sauce",
    price: "₹329",
    isPopular: true,
  },
  {
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, chicken",
    price: "₹449",
    isPopular: false,
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title glow-text">Our Menu</h2>
        <p className="section-subtitle mb-16">
          Handcrafted with love, baked to perfection
        </p>

        <div className="grid gap-4">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="menu-item flex items-center justify-between opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-serif font-medium text-foreground">
                    {item.name}
                  </h3>
                  {item.isPopular && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                      <Flame className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  {item.description}
                </p>
              </div>
              <span className="text-primary font-bold text-xl whitespace-nowrap ml-6">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

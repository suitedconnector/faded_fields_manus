import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingBag, Sparkles } from "lucide-react";
import { useState } from "react";

/**
 * Faded Fields - Premium Vintage Clothing & Accessories
 * Design System: Terracotta, Olive Green, Warm Cream, Charcoal
 * Typography: Playfair Display (headings), Lato (body)
 * Layout: Asymmetric, curated, storytelling-focused
 */

export default function Home() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Vintage Leather Jacket",
      era: "1980s",
      price: "$145",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310419663031518977/mpGVP9EeMN7aj7s9FreJPG/hero_vintage_aesthetic-3Hw8kTKjh3CAoKxL6ULSos.webp",
    },
    {
      id: 2,
      name: "Antique Accessories Collection",
      era: "1920s-1950s",
      price: "$89",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310419663031518977/mpGVP9EeMN7aj7s9FreJPG/vintage_accessories_detail-k58cVCnZK2cA9UkLdXaAXv.webp",
    },
    {
      id: 3,
      name: "Faded Textiles Bundle",
      era: "1970s-1990s",
      price: "$125",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310419663031518977/mpGVP9EeMN7aj7s9FreJPG/vintage_textiles_banner-KSv2KCohSWCphWK7sJrXrR.webp",
    },
  ];

  const categories = [
    { name: "Women's Clothing", count: "245 items" },
    { name: "Men's Clothing", count: "189 items" },
    { name: "Accessories", count: "312 items" },
    { name: "Footwear", count: "87 items" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center">
            <img
              src="/faded-fields-logo.png"
              alt="Faded Fields"
              className="h-12 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Shop
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              About
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ShoppingBag className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[500px]">
          {/* Image */}
          <div className="relative h-[400px] md:h-[600px] order-2 md:order-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031518977/mpGVP9EeMN7aj7s9FreJPG/hero_vintage_aesthetic-3Hw8kTKjh3CAoKxL6ULSos.webp"
              alt="Vintage clothing collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="bg-primary p-8 md:p-12 flex flex-col justify-center order-1 md:order-2">
            <div className="space-y-6">
              <div>
                <p className="text-primary-foreground/80 text-sm font-display tracking-wide mb-2">
                  DISCOVER TIMELESS TREASURES
                </p>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground leading-tight">
                  Faded Fields
                </h1>
                <p className="text-lg text-primary-foreground/90 mt-2">
                  Quality Vintage Clothing + Accessories
                </p>
              </div>

              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                Carefully curated vintage pieces sourced from around the world.
                Each item tells a story. Each find is a treasure. Authentic,
                timeless, and made to last.
              </p>

              <div className="flex gap-3 pt-4">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-white"
                >
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="mb-12">
            <p className="text-secondary text-sm font-display tracking-wide mb-2">
              CURATED COLLECTION
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Featured Finds
            </h2>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 bg-muted h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-all shadow-md"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        favorites.has(product.id)
                          ? "fill-primary text-primary"
                          : "text-foreground"
                      }`}
                    />
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-secondary text-xs font-display tracking-wide">
                    {product.era}
                  </p>
                  <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-primary font-bold text-lg">{product.price}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground mt-4"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="mb-12">
            <p className="text-secondary text-sm font-display tracking-wide mb-2">
              SHOP BY CATEGORY
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Browse Our Collection
            </h2>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, idx) => (
              <Card
                key={idx}
                className="p-8 hover:shadow-lg transition-all duration-300 cursor-pointer border-border bg-background hover:bg-muted"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">{category.count}</p>
                  </div>
                  <Sparkles className="w-8 h-8 text-primary opacity-50" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-secondary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-foreground/80 text-sm font-display tracking-wide mb-4">
                ABOUT FADED FIELDS
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Curated with Care
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-4 leading-relaxed">
                Every piece in our collection is hand-selected for quality,
                authenticity, and character. We source from trusted sellers and
                carefully inspect each item before it reaches you.
              </p>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Whether you're hunting for a specific era or discovering
                something unexpected, Faded Fields brings the thrill of vintage
                shopping to your fingertips.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <p className="text-4xl font-display font-bold mb-2">500+</p>
                <p className="text-primary-foreground/80">Items in Stock</p>
              </div>
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <p className="text-4xl font-display font-bold mb-2">100%</p>
                <p className="text-primary-foreground/80">Authentic Vintage</p>
              </div>
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <p className="text-4xl font-display font-bold mb-2">1980s</p>
                <p className="text-primary-foreground/80">Earliest Era</p>
              </div>
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <p className="text-4xl font-display font-bold mb-2">24/7</p>
                <p className="text-primary-foreground/80">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Discover?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of vintage lovers and find your next favorite
            piece.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Start Shopping
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-display font-bold mb-4">Faded Fields</h4>
              <p className="text-primary-foreground/70 text-sm">
                Quality Vintage Clothing + Accessories
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary-foreground">
                    All Items
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground">
                    Women's
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground">
                    Men's
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-bold mb-4">Follow</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70">
                <li>
                  <a href="#" className="hover:text-primary-foreground">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary-foreground">
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2026 Faded Fields. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

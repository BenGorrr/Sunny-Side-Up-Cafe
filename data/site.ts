export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
  badge?: string;
  art: string;
};

export type Promotion = {
  title: string;
  description: string;
  tag: string;
  cta: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type GalleryItem = {
  title: string;
  subtitle: string;
  tone: string;
};

export type VisitHighlight = {
  title: string;
  description: string;
};

export type ContactDetails = {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: { day: string; hours: string }[];
  landmark: string;
  parking: string;
};

export const featuredItems: MenuItem[] = [
  {
    name: "Sunrise Big Breakfast",
    description: "Soft scrambled eggs, sourdough toast, chicken sausage, roasted tomato, and herb butter.",
    price: "$14.90",
    category: "Breakfast",
    badge: "Best Seller",
    art: "Golden breakfast plate",
  },
  {
    name: "Brown Sugar Sea Salt Latte",
    description: "Double-shot espresso with silky milk, brown sugar syrup, and a light sea salt cream finish.",
    price: "$5.80",
    category: "Coffee",
    badge: "Popular",
    art: "Iced latte swirl",
  },
  {
    name: "Lemon Ricotta Pancakes",
    description: "Fluffy pancakes topped with whipped ricotta, honey drizzle, and citrus zest.",
    price: "$12.50",
    category: "Desserts",
    art: "Stacked pancake tower",
  },
  {
    name: "Sunny Chicken Aglio Olio",
    description: "Garlic-infused olive oil pasta with grilled chicken, chili flakes, and fresh parsley.",
    price: "$15.40",
    category: "Mains",
    art: "Warm pasta bowl",
  },
  {
    name: "Caramel Banana French Toast",
    description: "Brioche toast with caramelized banana, maple cream, and toasted almond crunch.",
    price: "$11.90",
    category: "Breakfast",
    badge: "Chef Pick",
    art: "French toast slice",
  },
  {
    name: "Tiramisu Cloud Cake",
    description: "Light mascarpone sponge layered with espresso cream and cocoa dusting.",
    price: "$7.20",
    category: "Desserts",
    art: "Soft cake square",
  },
];

export const promotions: Promotion[] = [
  {
    title: "Morning Combo Delight",
    description: "Get any breakfast plate with a hot coffee before 11:00 AM and enjoy a special combo price.",
    tag: "Weekday Favorite",
    cta: "See Breakfast Deals",
  },
  {
    title: "Cake & Coffee for Two",
    description: "Share two handcrafted drinks and one dessert platter, perfect for catch-ups and cozy dates.",
    tag: "Limited-Time Special",
    cta: "Plan Your Cafe Date",
  },
  {
    title: "Weekend Family Brunch",
    description: "Kids eat at a friendly add-on price with selected mains every Saturday and Sunday afternoon.",
    tag: "Popular Promo",
    cta: "Reserve a Table",
  },
];

export const visitHighlights: VisitHighlight[] = [
  {
    title: "Fresh Ingredients",
    description: "Daily-prepped produce, thoughtfully sourced beans, and dishes made to order.",
  },
  {
    title: "Cozy Ambiance",
    description: "A warm, sunlit space designed for slow mornings, quick lunches, and lingering chats.",
  },
  {
    title: "Great Coffee",
    description: "Balanced espresso, smooth specialty lattes, and seasonal drinks worth coming back for.",
  },
  {
    title: "Friendly Service",
    description: "A welcoming team that remembers regulars and makes first visits feel easy.",
  },
  {
    title: "Made for Gatherings",
    description: "Comfortable seating and shareable plates for friends, families, and casual meetings.",
  },
];

export const galleryItems: GalleryItem[] = [
  { title: "Signature brunch spread", subtitle: "Food styling placeholder", tone: "from-[#ffe29a] via-[#ffd37b] to-[#f7b66b]" },
  { title: "Barista coffee moment", subtitle: "Drink shot placeholder", tone: "from-[#f2d2ab] via-[#d8a976] to-[#9b6d46]" },
  { title: "Sunny window seating", subtitle: "Interior placeholder", tone: "from-[#fff6dd] via-[#f5e4b7] to-[#d8bb8a]" },
  { title: "Fresh pastries display", subtitle: "Dessert placeholder", tone: "from-[#ffd1a8] via-[#ffb98d] to-[#d8875c]" },
  { title: "Friends at brunch", subtitle: "Lifestyle placeholder", tone: "from-[#fff0c8] via-[#fbdc95] to-[#f0aa68]" },
  { title: "Cozy evening lighting", subtitle: "Cafe ambience placeholder", tone: "from-[#c99765] via-[#8e6343] to-[#4a3327]" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The pancakes were incredibly fluffy, the coffee was spot on, and the whole place felt calm and welcoming. We stayed much longer than planned.",
    name: "Alicia Tan",
    role: "Weekend Brunch Guest",
  },
  {
    quote:
      "Sunny Side Up Cafe has become my favorite spot for catch-ups. The staff are warm, the food arrives fast, and the latte quality is consistently excellent.",
    name: "Marcus Lee",
    role: "Regular Customer",
  },
  {
    quote:
      "I booked a table for my family through WhatsApp and everything was smooth. Easy parking, great portions, and a place we'd absolutely revisit.",
    name: "Nurul Aisyah",
    role: "Family Dining Guest",
  },
];

export const contactDetails: ContactDetails = {
  address: "6, Riveria City, LG-08, 5, Jalan Tun Sambanthan, Brickfields, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur",
  phone: "+60 12-709 0504",
  whatsapp: "https://wa.me/60127090504",
  email: "hello@sunnysideupcafe.com",
  hours: [
    { day: "Monday", hours: "9:30 AM - 5:00 PM" },
    { day: "Tuesday", hours: "Closed" },
    { day: "Wednesday - Sunday", hours: "9:30 AM - 5:00 PM" },
  ],
  landmark: "Just opposite Serene Community Park",
  parking: "Free Street parking and gated visitors parking available",
};

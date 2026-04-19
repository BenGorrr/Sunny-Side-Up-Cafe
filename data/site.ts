export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
  badge?: string;
  art: string;
  imageSrc?: string;
  imageAlt?: string;
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
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imagePanelClassName?: string;
};

export type VisitHighlight = {
  title: string;
  description: string;
};

export type ContactDetails = {
  address: string;
  phone: string;
  whatsapp: string;
  mapUrl: string;
  email: string;
  hours: { day: string; hours: string }[];
  landmark: string;
  parking: string;
};

export const featuredItems: MenuItem[] = [
  {
    name: "Banana Matcha",
    description: "Creamy oat matcha finished with banana cloud cream.",
    price: "Price coming soon",
    category: "Signature Drink",
    badge: "Best Seller",
    art: "Banana Matcha image coming soon",
    imageSrc: "/content/banana-matcha-large.jpeg",
    imageAlt: "Banana Matcha served in a glass with creamy cloud foam on top",
  },
  {
    name: "Original Salt Bread",
    description: "Soft and fluffy inside with a crispy bottom, finished with a light touch of sea salt.",
    price: "Price coming soon",
    category: "Signature Bread",
    badge: "Top Pick",
    art: "Original Salt Bread image coming soon",
    imageSrc: "/content/salt-bread-large.jpeg",
    imageAlt: "Freshly baked Original Salt Bread arranged on a cooling rack",
  },
  {
    name: "Peanut Panic",
    description: "Bold iced black coffee top with peanut butter cream foam.",
    price: "Price coming soon",
    category: "Signature Drink",
    art: "Peanut Panic image coming soon",
    imageSrc: "/content/peanut-panic-large.jpeg",
    imageAlt: "Peanut Panic iced black coffee topped with peanut butter cream foam",
  },
  {
    name: "Butter Scone",
    description:
      "Rich buttery scone with a delicate crumb and golden finish, paired with homemade mixed berry jam and silky whipped cream.",
    price: "Price coming soon",
    category: "Pastry",
    badge: "Crowd's Favorite",
    art: "Butter Scone image coming soon",
    imageSrc: "/content/scone-large.jpeg",
    imageAlt: "Golden Butter Scones baked until crisp on the outside",
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
  {
    title: "Signature drinks lineup",
    subtitle: "Menu poster with real drinks",
    tone: "from-[#ffe29a] via-[#ffd37b] to-[#f7b66b]",
    imageSrc: "/content/signature-drinks.png",
    imageAlt: "Sunny Side Up Cafe signature drinks poster showing Banana Matcha, Peanut Panic, Orange Sunrise, and Mint Chocolate",
    imageFit: "contain",
    imagePanelClassName: "bg-[#fff6cf]",
  },
  {
    title: "Current drinks menu",
    subtitle: "Menu snapshot",
    tone: "from-[#f2d2ab] via-[#d8a976] to-[#9b6d46]",
    imageSrc: "/content/drinks-menu.png",
    imageAlt: "Sunny Side Up Cafe drinks menu showing coffee, non coffee, tea, juices, and signature drinks",
    imageFit: "contain",
    imagePanelClassName: "bg-[#fff7d8]",
  },
  { title: "Sunny window seating", subtitle: "Interior placeholder", tone: "from-[#fff6dd] via-[#f5e4b7] to-[#d8bb8a]" },
  {
    title: "Fresh pastries display",
    subtitle: "Housemade pastries",
    tone: "from-[#ffd1a8] via-[#ffb98d] to-[#d8875c]",
    imageSrc: "/content/pastries.png",
    imageAlt: "Sunny Side Up Cafe housemade pastries poster featuring scone, salt bread, banana cake, and cinnamon roll",
    imageFit: "contain",
    imagePanelClassName: "bg-[#d8e5f6]",
  },
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
  mapUrl: "https://maps.google.com/?q=6,+Riveria+City,+LG-08,+5,+Jalan+Tun+Sambanthan,+Brickfields,+50470+Kuala+Lumpur",
  email: "hello@sunnysideupcafe.com",
  hours: [
    { day: "Monday", hours: "9:30 AM - 5:00 PM" },
    { day: "Tuesday", hours: "Closed" },
    { day: "Wednesday - Sunday", hours: "9:30 AM - 5:00 PM" },
  ],
  landmark: "A short walk from KL Sentral in Brickfields",
  parking: "Free Street parking and gated visitors parking available",
};

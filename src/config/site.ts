// src/config/site.ts — Te AMO Vegan Café

import momosImg     from "@/assets/momos.webp";
import thukpaImg    from "@/assets/thukpa.webp";
import tingmoImg    from "@/assets/tingmo.webp";
import butterTeaImg from "@/assets/butter-tea.webp";
import gallery1     from "@/assets/gallery-1.jpg";
import gallery2     from "@/assets/gallery-2.jpg";
import gallery3     from "@/assets/gallery-3.jpg";
import gallery4     from "@/assets/gallery-4.jpg";
import gallery5     from "@/assets/gallery-5.jpg";
import gallery6     from "@/assets/gallery-6.jpg";

export const siteConfig = {

  // ── BRAND ──────────────────────────────────
  name:           "Te AMO",
  namePart1:      "Te",
  namePart2:      "AMO",
  loadingTagline: "100% Vegan. 100% Love.",
  cuisine:        "Vegan, Plant-Based, Café",

  // ── CONTACT ────────────────────────────────
  phone:        "+917947147746",
  phoneDisplay: "+91 79471 47746",
  whatsapp:     "https://wa.me/917947147746",
  instagram:    "https://www.instagram.com/teamocafeteria",
  email:        "hello@teamocafe.in",
  website:      "https://teamocafe.in",

  // ── LOCATION ───────────────────────────────
  address:      "Ground Floor, 22-A Munirka Village, Near JNU Main Gate, New Delhi, 110067",
  addressFull:  "Ground Floor, 22-A Munirka Village, Near, JNU Ring Rd, Main Gate, New Delhi, Delhi 110067",
  mapsLink:     "https://maps.app.goo.gl/x18kqq1wYZiw4BuY8",
  mapsEmbed:    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.619580902814!2d77.17048836589258!3d28.551152059317616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d8ffe8e7ecd%3A0x8e6f9bb476f5b7e1!2sTe%20Amo%20Cafeteria!5e0!3m2!1sen!2sin!4v1772534888311!5m2!1sen!2sin",
  neighborhood: "Munirka, Near JNU",
  city:         "Delhi",
  lat:          "28.551152059317616",
  lng:          "77.17048836589258",

  // ── HOURS ──────────────────────────────────
  hours:       "Monday – Sunday: 11:00 AM – 11:00 PM",
  hoursShort:  "Mon – Sun: 11 AM – 11 PM",
  hoursSchema: "Mo-Su 11:00-23:00",

  // ── SEO ────────────────────────────────────
  seoTitle:       "Te AMO | 100% Vegan Café in Munirka, Delhi",
  seoDescription: "Delhi's cosiest vegan café near JNU. Plant-based coffee, dimsum, mocktails, shakes & more. Open daily 11AM–11PM in Munirka.",
  seoKeywords:    "vegan cafe Delhi, plant based cafe Munirka, vegan coffee Delhi, vegan dimsum, Te AMO cafe, cafe near JNU Delhi",
  seoRating:      "4.4",
  seoRatingCount: "150",

  // ── COLORS ─────────────────────────────────
  colors: {
    primary: "152 42% 30%",
    accent:  "32 78% 52%",
    deep:    "152 50% 18%",
  },

  // ── FONTS ──────────────────────────────────
  fonts: {
    display:   '"Playfair Display"',
    body:      '"DM Sans"',
    googleUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap",
  },

  // ── STATS ──────────────────────────────────
  stats: [
    { value: "2000+", label: "Happy Guests"   },
    { value: "50+",   label: "Menu Items"     },
    { value: "4.4",   label: "Google Rating"  },
    { value: "3+",    label: "Years of Love"  },
  ],

  // ── HERO ───────────────────────────────────
  hero: {
    badge:       "100% Vegan · 100% Delicious",
    h1:          "Te AMO",
    tagline:     "Where Every Sip Speaks Love",
    description: "Delhi's cosiest plant-based café near JNU — handcrafted teas, artisan coffee, steamed dimsum, and mocktails that hit different. No guilt. Just good vibes.",
  },

  // ── FEATURES ───────────────────────────────
  features: {
    heading: "The Te AMO Difference",
    items: [
      { title: "100% Plant-Based",      desc: "Every single item on our menu is completely vegan — made with plant-based milk, whole ingredients, and zero compromise." },
      { title: "Handcrafted with Love", desc: "From tulsi teas to tofu dimsum, every dish is made fresh in-house. No shortcuts, no frozen food, just honest cooking." },
      { title: "A Vibe Like No Other",  desc: "Cosy corners, warm lighting, good music — Te AMO is where you slow down, connect, and fall in love with food again." },
    ],
  },

  // ── SPECIALTIES ────────────────────────────
  specialties: [
    { name: "Golden Cheese N Corn Pizza",            desc: "Wheat Hand Rolled Pizza Base.A Combination of Juicy Sweet Corn and Plant based Cheese with Flavourful Signature Pelati Sauce.",  img: momosImg,     price: "₹199", tag: "Fan Fav"    },
    { name: "Crispy Chilli Potatoes",       desc: "Crispy golden potato cubes tossed in a bold Indo-Chinese chilli sauce, wok-fried with bell peppers, onions and a touch of soy — fiery, crunchy and totally addictive.",                    img: butterTeaImg, price: "₹59",  tag: "Must Try"  },
    { name: "Noodles & Manchurian",  desc: "Wok-tossed chilli garlic noodles paired with crispy veg Manchurian balls in a rich dark soy glaze — the ultimate Indo-Chinese duo, smoky, saucy and dangerously good.",                        img: tingmoImg,    price: "₹199", tag: "Chef's Pick"},
    { name: "House Mojito Collection",     desc: "Seven handcrafted mojitos made with fresh fruits, muddled mint and sparkling water — from classic mint lime to watermelon, blueberry, green apple and beyond. Pick your mood, sip your vibe.",                     img: thukpaImg,    price: "₹99",  tag: "Bestseller"},
  ],

  // ── REVIEWS ────────────────────────────────
  reviews: [
    { name: "Sneha R.",    text: "Best vegan café in South Delhi! The tulsi teas are incredible and the dimsum is absolutely on point. My new regular spot.",           rating: 5, avatar: "S" },
    { name: "Aryan M.",    text: "Didn't even miss the meat! The tofu dimsum and mocktails are chef's kiss. Love that everything is 100% plant-based.",                 rating: 5, avatar: "A" },
    { name: "Priyanka T.", text: "Such a cosy vibe near JNU. Perfect for catching up with friends. The Pita Pocket with Hummus and the Oreo Shake are my go-tos.",     rating: 5, avatar: "P" },
  ],

  // ── POPULAR ITEMS (footer) ─────────────────
  popularItems: ["Veg Dimsum", "Tulsi Green Tea", "Watermelon Mojito", "Pita Pocket & Hummus", "Oreo Shake"],

  // ── AMBIANCE ───────────────────────────────
  ambiance: {
    heading: "A Little Café. A Lot of Love.",
    story:   "Tucked away in Munirka Village near JNU, Te AMO is Delhi's most heartfelt plant-based café — where cosy corners, handcrafted drinks, and zero-compromise vegan food come together to create something truly special.",
  },

  // ── CTA ────────────────────────────────────
  cta: {
    heading: "Come as You Are. Leave Feeling Good.",
    subtext: "Walk in anytime between 11AM and 11PM — or call ahead and we'll keep a cosy corner just for you in Munirka.",
  },

  // ── ABOUT ──────────────────────────────────
  about: {
    subtitle:       "A plant-based café born from love, near JNU, Delhi",
    valuesHeading:  "Why Te AMO",
    bannerHeadline: "Made with Plants. Served with Soul.",
    bannerSub:      "At Te AMO, every ingredient is chosen with intention — because what you eat should make you feel as good as it tastes.",
    story: [
      "Te AMO was born from a simple belief — that vegan food should never feel like a compromise. Nestled in Munirka Village, just steps from JNU's main gate, our café was built to be a sanctuary for plant-based lovers, curious foodies, and anyone who wants to eat well without the guilt.",
      "From our hand-picked tulsi teas and plant-milk coffees to our freshly steamed dimsum and globally inspired quick bites, every item on our menu is crafted with care, creativity, and a deep respect for ingredients. We don't just remove the meat — we build something better.",
      "At Te AMO, food is an act of love. Love for the planet, love for your body, and love for the beautiful experience of sharing a great meal with people who matter.",
    ],
    values: [
      { title: "Unapologetically Vegan", desc: "We don't do 'vegan options' — our entire menu is 100% plant-based, every single day, without exception." },
      { title: "Fresh. Always.",          desc: "No frozen, no processed. Every dish is made fresh in our kitchen — from teas to dimsum to shakes." },
      { title: "Inclusive Vibes",         desc: "Whether you're vegan, veg-curious, or just looking for a great café — everyone is welcome at Te AMO." },
      { title: "Good for the Planet",     desc: "Plant-based eating is the most powerful thing you can do for the environment. We make it delicious." },
    ],
  },

  // ── GALLERY ────────────────────────────────
  gallery: {
    subtitle: "Good food, good vibes, good people",
    images: [
      { src: gallery1,     alt: "Café Interior",           cat: "Ambiance" },
      { src: momosImg,     alt: "Veg Dimsum",              cat: "Food"     },
      { src: gallery2,     alt: "Cosy Corner Seating",     cat: "Ambiance" },
      { src: butterTeaImg, alt: "Tulsi Green Tea",         cat: "Food"     },
      { src: tingmoImg,    alt: "Pita Pocket with Hummus", cat: "Food"     },
      { src: gallery3,     alt: "Mocktail Selection",      cat: "Food"     },
      { src: gallery4,     alt: "Café Ambiance",           cat: "Ambiance" },
      { src: thukpaImg,    alt: "Watermelon Mojito",       cat: "Food"     },
      { src: gallery5,     alt: "Quick Bites Platter",     cat: "Food"     },
      { src: gallery6,     alt: "Café Entrance",           cat: "Ambiance" },
    ],
  },

  // ── MENU ───────────────────────────────────
  menu: [
    {
      category: "Tea", emoji: "🍃",
      items: [
        { name: "Assam Black Tea",               price: "₹49",  desc: "Classic full-bodied Assam black tea",                                        popular: false },
        { name: "Darjeeling Black Tea",          price: "₹49",  desc: "Delicate and aromatic Darjeeling brew",                                      popular: false },
        { name: "Earl Grey Tea",                 price: "₹49",  desc: "Classic bergamot-infused Earl Grey",                                         popular: false },
        { name: "Lemon Tea",                     price: "₹49",  desc: "Refreshing tea with a squeeze of fresh lemon",                               popular: false },
        { name: "Kadak Desi Chai",               price: "₹119", desc: "Strong spiced chai made with plant-based milk",                              popular: true  },
        { name: "Tulsi Green Tea Classic",       price: "₹59",  desc: "Pure tulsi-infused green tea, clean and calming",                            popular: true  },
        { name: "Tulsi Green Tea Original",      price: "₹59",  desc: "Original tulsi green blend — earthy and grounding",                         popular: false },
        { name: "Tulsi Green Tea Ginger",        price: "₹59",  desc: "Tulsi green tea with a warming ginger kick",                                 popular: false },
        { name: "Tulsi Green Tea Lemon Ginger",  price: "₹59",  desc: "Zesty lemon and ginger tulsi green blend",                                   popular: false },
        { name: "Tulsi Green Tea Jasmine",       price: "₹59",  desc: "Floral jasmine-infused tulsi green tea",                                     popular: false },
        { name: "Tulsi Detox Kahwa",             price: "₹69",  desc: "Warming detox blend with tulsi, spices and herbs",                           popular: true  },
        { name: "Tulsi Sweet Rose",              price: "₹69",  desc: "Delicate rose and tulsi blend, naturally sweet",                             popular: false },
        { name: "Tulsi Sweet Lemon",             price: "₹69",  desc: "Sweet citrusy tulsi tea — light and refreshing",                             popular: false },
        { name: "Tulsi Pepper Mint Refresh",     price: "₹69",  desc: "Cool peppermint with energising tulsi",                                      popular: false },
        { name: "Simply Chamomile",              price: "₹79",  desc: "Pure chamomile — soothing, gentle, perfect for winding down",                popular: false },
        { name: "Moringa Hibiscus",              price: "₹79",  desc: "Vibrant hibiscus and superfood moringa blend",                               popular: false },
      ],
    },
    {
      category: "Snacks With Tea", emoji: "🥪",
      items: [
        { name: "Vada Pav",              price: "₹39", desc: "Classic Mumbai street-style vada pav — crispy, spicy, perfect with chai", popular: true  },
        { name: "Achaari Aloo Sandwich", price: "₹49", desc: "Tangy pickled potato filling in a toasted sandwich",                      popular: false },
      ],
    },
    {
      category: "Coffee", emoji: "☕",
      items: [
        { name: "Americano",     price: "₹59",  desc: "Pure black coffee — bold and clean",                               popular: false },
        { name: "Hot Coffee",    price: "₹149", desc: "Classic hot coffee made with plant-based milk",                    popular: true  },
        { name: "Cappuccino",    price: "₹169", desc: "Frothy cappuccino with plant-based milk foam",                     popular: true  },
        { name: "Cafe Latte",    price: "₹169", desc: "Smooth and creamy latte — entirely plant-based",                  popular: false },
        { name: "Hot Chocolate", price: "₹199", desc: "Rich, indulgent hot chocolate made with plant-based milk",        popular: false },
      ],
    },
    {
      category: "Maggi", emoji: "🍜",
      items: [
        { name: "Plain Maggi",            price: "₹59",  desc: "Simple, timeless Maggi — the classic taste you grew up loving",                               popular: false },
        { name: "Masala Vegetable Maggi", price: "₹99",  desc: "Seasonal veggies, bold masala — nourishing and delicious",                                    popular: true  },
        { name: "Mexican Style Maggi",    price: "₹149", desc: "Colourful veggies, Mexican spices — a healthy and exciting spin on Maggi",                    popular: false },
      ],
    },
    {
      category: "Dimsum", emoji: "🥟",
      items: [
        { name: "Veg Dimsum (Steam)",  price: "₹149", desc: "Lightly sautéed assorted vegetables in a soft translucent wrapper, steamed to perfection",    popular: true  },
        { name: "Veg Dimsum (Gravy)",  price: "₹199", desc: "Steamed veg dimsum served in a rich, flavourful gravy",                                       popular: false },
        { name: "Tofu Dimsum (Steam)", price: "₹169", desc: "Fluffy steamed dumplings filled with spiced tofu, served with tangy dipping sauce",           popular: true  },
        { name: "Tofu Dimsum (Gravy)", price: "₹229", desc: "Tofu dimsum bathed in a bold, aromatic gravy",                                                popular: false },
      ],
    },
    {
      category: "Quick Bites", emoji: "🍟",
      items: [
        { name: "Seasoned Fries",                   price: "₹79",  desc: "Potato finger fries with salt, peri-peri or za'atar — pick your flavour",          popular: false },
        { name: "Corn Chaat",                       price: "₹99",  desc: "Steamed corn tossed with onion, capsicum, green chilli, lemon and tangy masala",   popular: true  },
        { name: "Cajun Spiced Potato Wedges",       price: "₹149", desc: "Thick-cut potato wedges with Cajun spice, sriracha mayo and house made dip",      popular: false },
        { name: "Crumbled Tofu Balls",              price: "₹169", desc: "Plant-based cheese, tofu, exotic veggies — crispy outside, soft inside",          popular: true  },
        { name: "Pita Pocket with Falafel & Hummus", price: "₹199", desc: "Pita bread, creamy hummus, Greek salad, falafel and house made dip",             popular: true  },
      ],
    },
    {
      category: "Mocktails", emoji: "🍹",
      items: [
        { name: "Fresh Mint Lime Mojito", price: "₹59", desc: "Classic mint lime mojito — fresh, cool and refreshing",                popular: true  },
        { name: "Green Mint Mojito",      price: "₹79", desc: "Minty green mojito with a herby twist",                                popular: false },
        { name: "Blueberry Mojito",       price: "₹79", desc: "Sweet blueberry with mint and lime — gorgeous in a glass",             popular: false },
        { name: "Green Apple Mojito",     price: "₹79", desc: "Crisp green apple with mint and sparkling water",                      popular: false },
        { name: "Blue Lagoon Mojito",     price: "₹89", desc: "Stunning blue lagoon with a tropical tangy twist",                     popular: false },
        { name: "Watermelon Mojito",      price: "₹99", desc: "Fresh watermelon, mint, lime and soda — summer in a glass",            popular: true  },
        { name: "Lemon Ice Tea",          price: "₹59", desc: "Chilled lemon-infused iced tea — light and zesty",                     popular: false },
        { name: "Peach Ice Tea",          price: "₹69", desc: "Sweet peach iced tea — fruity, floral and refreshing",                 popular: false },
      ],
    },
    {
      category: "Shakes", emoji: "🥤",
      items: [
        { name: "Caramel Cold Coffee", price: "₹119", desc: "Cold coffee swirled with rich caramel — a café classic",               popular: true  },
        { name: "Chocolate Shake",     price: "₹129", desc: "Rich, creamy plant-based chocolate shake",                             popular: true  },
        { name: "Vanilla Shake",       price: "₹99",  desc: "Classic smooth vanilla shake — simple and satisfying",                 popular: false },
        { name: "Butterscotch Shake",  price: "₹99",  desc: "Sweet butterscotch — a comfort in a glass",                           popular: false },
        { name: "Strawberry Shake",    price: "₹109", desc: "Fresh strawberry blended into a creamy fruity shake",                  popular: false },
        { name: "Black Currant Shake", price: "₹119", desc: "Deep tangy black currant with a gorgeous purple hue",                  popular: false },
        { name: "Oreo Shake",          price: "₹129", desc: "Crushed Oreos blended into a thick, indulgent shake",                  popular: true  },
        { name: "Pina Colada",         price: "₹129", desc: "Tropical pineapple and coconut — non-alcoholic take on the classic",   popular: false },
      ],
    },
  ],

} as const;

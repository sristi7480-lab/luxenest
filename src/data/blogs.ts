export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content: Section[];
  products?: EmbeddedProduct[];
}

export interface Section {
  type: "paragraph" | "heading" | "tip";
  text: string;
}

export interface EmbeddedProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string;
  rating: number;
  sale?: boolean;
  affiliateUrl: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "10-modern-living-room-ideas",
    title: "10 Modern Living Room Ideas That Actually Work",
    excerpt:
      "Clean lines, warm textures, and a few rules worth breaking. Here's how to style a living room that feels both luxurious and lived-in.",
    coverImage:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    category: "Living Room",
    date: "July 1, 2026",
    author: "Srish",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "A beautiful living room doesn't happen by accident — but it also doesn't require a massive budget or an interior designer. What it does require is a clear vision, a few key pieces, and the confidence to break the rules that don't serve you.",
      },
      {
        type: "heading",
        text: "1. Start With a Neutral Base",
      },
      {
        type: "paragraph",
        text: "Neutral walls and floors give you the freedom to experiment with colour and texture through accessories. Think warm whites, soft beiges, and gentle greys. These shades make a room feel larger and more cohesive.",
      },
      {
        type: "heading",
        text: "2. Layer Your Textiles",
      },
      {
        type: "paragraph",
        text: "Cushions, throws, and rugs are the easiest way to add warmth and personality to a living room. Mix textures — linen, cotton, and wool — rather than matching everything perfectly. A floral embroidered cushion on a plain sofa instantly elevates the look.",
      },
      {
        type: "heading",
        text: "3. Choose Statement Lighting",
      },
      {
        type: "paragraph",
        text: "A beautiful pendant light or floor lamp can transform a room more than any piece of furniture. Look for natural materials like rattan and bamboo — they add warmth without overpowering the space.",
      },
      {
        type: "tip",
        text: "Pro tip: Layer your lighting — use a mix of ceiling, floor, and table lamps rather than relying on one overhead light. It makes the room feel instantly cosier.",
      },
      {
        type: "heading",
        text: "4. Add Greenery",
      },
      {
        type: "paragraph",
        text: "Plants breathe life into any room. Even a single ceramic vase with dried pampas grass or a small potted plant on a side table makes a big difference. They add colour, texture, and a sense of calm.",
      },
      {
        type: "heading",
        text: "5. Don't Forget the Walls",
      },
      {
        type: "paragraph",
        text: "Bare walls make a room feel unfinished. A statement mirror not only adds visual interest but also reflects light and makes the space feel larger. A brass or gold-finish mirror works beautifully in modern and traditional living rooms alike.",
      },
      {
        type: "heading",
        text: "6. Use Rugs to Define Zones",
      },
      {
        type: "paragraph",
        text: "In an open-plan space, a rug anchors the seating area and creates a sense of cosiness. Choose one that's large enough for at least the front legs of your sofa to sit on.",
      },
      {
        type: "heading",
        text: "7. Edit Ruthlessly",
      },
      {
        type: "paragraph",
        text: "More isn't always more. A well-curated room with a few beautiful pieces feels far more intentional than a cluttered space. If something doesn't serve a purpose or bring you joy, it doesn't belong.",
      },
      {
        type: "tip",
        text: "The rule of three: group decor items in odd numbers — sets of 3 or 5 look more natural and visually pleasing than pairs.",
      },
      {
        type: "heading",
        text: "8. Mix Old and New",
      },
      {
        type: "paragraph",
        text: "The most interesting rooms combine different eras and styles. A modern sofa with a vintage-inspired rug, or contemporary art above a traditional wooden table — contrast creates character.",
      },
      {
        type: "heading",
        text: "9. Invest in Storage",
      },
      {
        type: "paragraph",
        text: "Beautiful storage is one of the best investments you can make. Bamboo baskets and boxes hide clutter while adding texture — they're functional and decorative at the same time.",
      },
      {
        type: "heading",
        text: "10. Make It Personal",
      },
      {
        type: "paragraph",
        text: "The best living rooms tell a story. Add personal touches — books you love, objects from travels, artwork that means something to you. A room that reflects your personality is always more beautiful than one that follows trends.",
      },
    ],
    products: [
      {
        id: "1",
        name: "CASA-NEST Linen Embroidery Cushion Cover (Pack of 2)",
        description: "Floral embroidered linen cushion covers, beige, set of 2.",
        image: "https://m.media-amazon.com/images/I/61pzKwySR+L._SY879_.jpg",
        price: "₹549",
        originalPrice: "₹1,499",
        rating: 4,
        sale: true,
        affiliateUrl: "https://amzn.to/4eBUiRx",
      },
      {
        id: "2",
        name: "AKWAY Rattan Hanging Lamp / Bamboo Ceiling Pendant Light",
        description: "Handwoven rattan and bamboo pendant lamp, warm ambient glow.",
        image: "https://m.media-amazon.com/images/I/61+mS50mhXL._SX522_.jpg",
        price: "₹3,699",
        originalPrice: "₹3,999",
        rating: 5,
        sale: true,
        affiliateUrl: "https://amzn.to/4eVpSsl",
      },
      {
        id: "5",
        name: "Rousrie Premium Glass Wall Mirror, Golden Frame, 24x18\"",
        description: "Distortion-free glass mirror with elegant golden frame.",
        image: "https://m.media-amazon.com/images/I/811qWEKWV+L._SX679_.jpg",
        price: "₹1,999",
        originalPrice: "₹4,999",
        rating: 4,
        sale: true,
        affiliateUrl: "https://amzn.to/4gTaBuy",
      },
      {
        id: "4",
        name: "Regal Carpet Handwoven Wool Area Rug, 5x7 ft",
        description: "Export-quality handwoven wool blend rug, tufted, beige.",
        image: "https://m.media-amazon.com/images/I/51Vya4-CpNL.jpg",
        price: "₹8,949",
        originalPrice: "₹16,000",
        rating: 5,
        sale: true,
        affiliateUrl: "https://amzn.to/4vGaAio",
      },
    ],
  },
  {
    slug: "small-bedroom-makeover-guide",
    title: "Small Bedroom Makeover: How to Make 90 Sq Ft Feel Twice the Size",
    excerpt:
      "You don't need a huge bedroom to have a beautiful one. Here's how to style a small bedroom so it feels calm, spacious, and completely yours.",
    coverImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&q=80",
    category: "Bedroom",
    date: "July 1, 2026",
    author: "Srish",
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "Small bedrooms get a bad reputation, but with the right approach they can feel just as calm and luxurious as a much larger space. The secret is in how you use every inch — and what you choose to leave out.",
      },
      {
        type: "heading",
        text: "Use Light Colours on Walls and Bedding",
      },
      {
        type: "paragraph",
        text: "Light, airy colours — soft whites, pale creams, and muted pastels — reflect light and make walls feel like they're receding. Dark colours do the opposite. Stick to a soft, neutral palette for walls and bedding, then add personality through accessories.",
      },
      {
        type: "heading",
        text: "Choose Multi-Functional Furniture",
      },
      {
        type: "paragraph",
        text: "Every piece of furniture in a small bedroom should earn its place. Opt for beds with storage drawers underneath, bedside tables with shelves, and ottomans that double as storage. The less furniture on the floor, the larger the room feels.",
      },
      {
        type: "tip",
        text: "Pro tip: Use vertical space. Tall shelves draw the eye upward and make ceilings feel higher. Store things you use less often up high.",
      },
      {
        type: "heading",
        text: "Mirrors Are Your Best Friend",
      },
      {
        type: "paragraph",
        text: "A large mirror on one wall can visually double the size of a room. Place it opposite a window to bounce natural light around the space. A full-length mirror leaning against a wall also works beautifully and takes up no floor space.",
      },
      {
        type: "heading",
        text: "Keep the Floor Clear",
      },
      {
        type: "paragraph",
        text: "Clutter on the floor is the fastest way to make a small room feel cramped. Use baskets and storage boxes to keep things tidy — they look beautiful while keeping everything organised.",
      },
      {
        type: "heading",
        text: "Layer Your Lighting",
      },
      {
        type: "paragraph",
        text: "Avoid harsh overhead lighting in a bedroom. Instead, use warm bedside lamps, fairy lights, or a beautiful pendant light to create a soft, cosy atmosphere. Good lighting makes any room feel more luxurious.",
      },
      {
        type: "tip",
        text: "Warm white bulbs (2700K-3000K) create a much cosier atmosphere than cool white. Always choose warm for bedrooms.",
      },
      {
        type: "heading",
        text: "Less Is More",
      },
      {
        type: "paragraph",
        text: "In a small bedroom, restraint is everything. Choose a few pieces you truly love rather than filling every surface. A beautifully styled bedside table with one lamp, one plant, and one book looks far more intentional than a cluttered surface.",
      },
    ],
    products: [
      {
        id: "5",
        name: "Rousrie Premium Glass Wall Mirror, Golden Frame, 24x18\"",
        description: "Distortion-free glass mirror with elegant golden frame.",
        image: "https://m.media-amazon.com/images/I/811qWEKWV+L._SX679_.jpg",
        price: "₹1,999",
        originalPrice: "₹4,999",
        rating: 4,
        sale: true,
        affiliateUrl: "https://amzn.to/4gTaBuy",
      },
      {
        id: "6",
        name: "HomeStorie Eco-Friendly Bamboo Storage Boxes, Set of 3",
        description: "Stackable bamboo storage boxes with lid, large+medium+small.",
        image: "https://m.media-amazon.com/images/I/71Fh0aZ+oLL._SX679_.jpg",
        price: "₹1,785",
        originalPrice: "₹2,499",
        rating: 4,
        sale: true,
        affiliateUrl: "https://amzn.to/4gTaE9I",
      },
      {
        id: "1",
        name: "CASA-NEST Linen Embroidery Cushion Cover (Pack of 2)",
        description: "Floral embroidered linen cushion covers, beige, set of 2.",
        image: "https://m.media-amazon.com/images/I/61pzKwySR+L._SY879_.jpg",
        price: "₹549",
        originalPrice: "₹1,499",
        rating: 4,
        sale: true,
        affiliateUrl: "https://amzn.to/4eBUiRx",
      },
    ],
  },
  {
    slug: "luxury-decor-under-2000",
    title: "Luxury Home Decor Under ₹2000: Pieces That Look Expensive",
    excerpt:
      "You don't need to spend a fortune to have a beautiful home. Here are our favourite Amazon finds that look high-end without the price tag.",
    coverImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    category: "Budget",
    date: "July 1, 2026",
    author: "Srish",
    readTime: "4 min read",
    content: [
      {
        type: "paragraph",
        text: "One of the biggest myths in home decor is that a beautiful home requires a big budget. The truth is, with a good eye and a little patience, you can find pieces on Amazon that look genuinely luxurious — without spending a fortune.",
      },
      {
        type: "paragraph",
        text: "Here are our tried and tested picks — all under ₹2000 — that will instantly elevate your space.",
      },
      {
        type: "heading",
        text: "1. Embroidered Cushion Covers",
      },
      {
        type: "paragraph",
        text: "New cushion covers are one of the fastest, cheapest ways to refresh a room. Floral linen embroidery looks far more expensive than it is — and a set of two for under ₹600 is an absolute steal. They work on any sofa colour and instantly add texture.",
      },
      {
        type: "heading",
        text: "2. Ceramic Vase Sets",
      },
      {
        type: "paragraph",
        text: "A trio of matte ceramic vases in earthy tones looks like something from a high-end boutique. Style them on a shelf, console table, or dining table with some dried flowers or just leave them empty. Under ₹1000 for a set of three.",
      },
      {
        type: "tip",
        text: "Style tip: Group vases in odd numbers and vary the heights. Three different-sized vases grouped together always looks more intentional than a matching pair.",
      },
      {
        type: "heading",
        text: "3. A Statement Wall Mirror",
      },
      {
        type: "paragraph",
        text: "A good mirror is one of the best investments in home decor. It adds light, space, and a focal point to any room. A gold or brass-finish rectangular mirror under ₹2000 looks like it cost five times as much.",
      },
      {
        type: "heading",
        text: "4. Bamboo Storage Baskets",
      },
      {
        type: "paragraph",
        text: "Beautiful storage is the secret to a tidy, stylish home. Bamboo baskets and boxes with lids hide clutter while adding natural texture. A set of three stackable boxes under ₹1800 is one of the best value buys you'll find.",
      },
      {
        type: "heading",
        text: "5. Natural Fibre Cushion Covers",
      },
      {
        type: "paragraph",
        text: "Linen, jute, and cotton cushion covers in neutral tones have that effortlessly expensive look that's everywhere in luxury interior design right now. And they're incredibly affordable on Amazon.",
      },
      {
        type: "tip",
        text: "Remember: as an Amazon Associate, LuxeNest earns from qualifying purchases. This helps keep the site running at no extra cost to you!",
      },
    ],
    products: [
      {
        id: "1",
        name: "CASA-NEST Linen Embroidery Cushion Cover (Pack of 2)",
        description: "Floral embroidered linen cushion covers, beige, set of 2.",
        image: "https://m.media-amazon.com/images/I/61pzKwySR+L._SY879_.jpg",
        price: "₹549",
        originalPrice: "₹1,499",
        rating: 4,
        sale: true,
        affiliateUrl: "https://amzn.to/4eBUiRx",
      },
      {
        id: "3",
        name: "Trio Ceramic Vase Set, Matte Finish",
        description: "Handmade set of 3 decorative ceramic vases, modern matte finish.",
        image: "https://m.media-amazon.com/images/I/71-WNEe2mcL._SX679_.jpg",
        price: "₹949",
        originalPrice: "₹2,700",
        rating: 4,
        sale: true,
        affiliateUrl: "https://amzn.to/3T9Tvid",
      },
      {
        id: "5",
        name: "Rousrie Premium Glass Wall Mirror, Golden Frame, 24x18\"",
        description: "Distortion-free glass mirror with elegant golden frame.",
        image: "https://m.media-amazon.com/images/I/811qWEKWV+L._SX679_.jpg",
        price: "₹1,999",
        originalPrice: "₹4,999",
        rating: 4,
        sale: true,
        affiliateUrl: "https://amzn.to/4gTaBuy",
      },
      {
        id: "6",
        name: "HomeStorie Eco-Friendly Bamboo Storage Boxes, Set of 3",
        description: "Stackable bamboo storage boxes with lid, large+medium+small.",
        image: "https://m.media-amazon.com/images/I/71Fh0aZ+oLL._SX679_.jpg",
        price: "₹1,785",
        originalPrice: "₹2,499",
        rating: 4,
        sale: true,
        affiliateUrl: "https://amzn.to/4gTaE9I",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export type Product = {
  id: string
  name: string
  description: string
  price: number
  rating: number
  reviews: number
  category: string
  brand: string
  colors: string[]
  sizes: string[]
  image: string
  gallery: string[]
  stock: number
  badges?: string[]
}

export const products: Product[] = [
  {
    id: 'aurora-01',
    name: 'Aurora Luxe Smartwatch',
    description:
      'A premium smartwatch with AMOLED display, health tracking, and 5-day battery life.',
    price: 289,
    rating: 4.8,
    reviews: 1240,
    category: 'Wearables',
    brand: 'Aurora Labs',
    colors: ['Obsidian Black', 'Rose Gold', 'Ice Silver'],
    sizes: ['38mm', '42mm'],
    image:
      'https://images.unsplash.com/photo-1524594154908-eddff9a25872?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524594154908-eddff9a25872?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80',
    ],
    stock: 32,
    badges: ['Bestseller', 'Free Shipping'],
  },
  {
    id: 'solstice-02',
    name: 'Solstice Wireless Headphones',
    description:
      'Immersive sound with adaptive noise cancellation and 40-hour battery life.',
    price: 219,
    rating: 4.7,
    reviews: 980,
    category: 'Audio',
    brand: 'Solstice',
    colors: ['Midnight Blue', 'Matte Black'],
    sizes: ['Standard'],
    image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524678714210-9917a6c619c4?auto=format&fit=crop&w=800&q=80',
    ],
    stock: 48,
    badges: ['Editor\'s Choice'],
  },
  {
    id: 'nebula-03',
    name: 'Nebula Ultralight Laptop',
    description:
      '13-inch ultrabook with OLED display, Intel Evo platform, and all-day battery life.',
    price: 1499,
    rating: 4.9,
    reviews: 563,
    category: 'Computers',
    brand: 'Nebula',
    colors: ['Graphite', 'Alpine White'],
    sizes: ['13"'],
    image:
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    ],
    stock: 12,
    badges: ['New Arrival'],
  },
  {
    id: 'zenith-04',
    name: 'Zenith 4K OLED TV',
    description:
      'Immersive 65-inch OLED television with Dolby Vision IQ and cinematic audio.',
    price: 2199,
    rating: 4.6,
    reviews: 342,
    category: 'Home Entertainment',
    brand: 'Zenith Vision',
    colors: ['Eclipse Black'],
    sizes: ['55"', '65"', '77"'],
    image:
      'https://images.unsplash.com/photo-1593357849628-4bdb0f8c762d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80',
    ],
    stock: 20,
  },
  {
    id: 'lumen-05',
    name: 'Lumen Smart Lighting Kit',
    description:
      'Set the mood with dynamic RGBW lighting scenes controllable from anywhere.',
    price: 129,
    rating: 4.5,
    reviews: 768,
    category: 'Smart Home',
    brand: 'Lumen',
    colors: ['Spectrum'],
    sizes: ['Starter Kit'],
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    ],
    stock: 58,
  },
  {
    id: 'stride-06',
    name: 'Stride Performance Sneakers',
    description:
      'Lightweight running shoes engineered with responsive cushioning and support.',
    price: 159,
    rating: 4.3,
    reviews: 894,
    category: 'Apparel',
    brand: 'Stride Labs',
    colors: ['Velocity Red', 'Glacier Gray', 'Ocean Teal'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600180758890-6b94519a8ba2?auto=format&fit=crop&w=800&q=80',
    ],
    stock: 64,
  },
  {
    id: 'pureair-07',
    name: 'PureAir Smart Purifier',
    description:
      'HEPA 14 filtration with live air quality monitoring and whisper-quiet operation.',
    price: 349,
    rating: 4.4,
    reviews: 456,
    category: 'Home Appliances',
    brand: 'PureAir',
    colors: ['Polar White'],
    sizes: ['Large Room'],
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592995807746-757abfc1c0d1?auto=format&fit=crop&w=800&q=80',
    ],
    stock: 27,
    badges: ['Trending'],
  },
  {
    id: 'terra-08',
    name: 'Terra Eco-Friendly Bottle',
    description:
      'Triple-wall insulated bottle made from recycled stainless steel and bamboo.',
    price: 45,
    rating: 4.9,
    reviews: 1632,
    category: 'Lifestyle',
    brand: 'Terra',
    colors: ['Copper', 'Slate', 'Moss'],
    sizes: ['600ml', '750ml'],
    image:
      'https://images.unsplash.com/photo-1526401485004-46910ecc8e51?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    ],
    stock: 120,
  },
]

export const categories = Array.from(new Set(products.map((product) => product.category)))

export const featuredCollections = [
  {
    title: 'Future of Fitness',
    description: 'Wearables and smart gear designed to elevate every workout.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Immersive Audio',
    description: 'Lose yourself in layered soundscapes with premium noise cancelling.',
    image:
      'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Curated Home',
    description: 'Smart lighting, air care, and accents curated for mindful living.',
    image:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80',
  },
]

export const testimonials = [
  {
    name: 'Linh Tran',
    title: 'Product Designer',
    quote:
      'NamZone delivers exceptional products with a concierge-level experience. The new platform is lightning fast and beautiful.',
    avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Carlos Ramirez',
    title: 'Entrepreneur',
    quote:
      'I love the curated collections and personalized suggestions. Checkout is seamless, even on mobile.',
    avatar: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Amelia Grant',
    title: 'Fitness Coach',
    quote:
      'Every order has arrived ahead of schedule and the customer care is outstanding. Highly recommend NamZone!',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
  },
]

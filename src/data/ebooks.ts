export type Ebook = {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  pdfUrl: string;
  priceUsd: number;
  // Optional Stripe Price ID if using pre-created Prices for Checkout
  priceId?: string;
};

// Public-domain ebooks (PDFs) from trusted sources (e.g., Project Gutenberg)
export const ebooks: Ebook[] = [
  {
    id: "pg1342",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A classic romantic novel exploring manners, upbringing, morality, and marriage in early 19th-century Britain.",
    coverUrl:
      "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/1342/1342-pdf.pdf",
    priceUsd: 20,
  },
  {
    id: "pg1661",
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    description:
      "Twelve short stories featuring detective Sherlock Holmes and Dr. Watson.",
    coverUrl:
      "https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/1661/1661-pdf.pdf",
    priceUsd: 30,
  },
  {
    id: "pg11",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    description:
      "Alice falls through a rabbit hole into a whimsical world of peculiar creatures.",
    coverUrl: "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/11/11-pdf.pdf",
    priceUsd: 25,
  },
  {
    id: "pg1952",
    title: "The Yellow Wallpaper",
    author: "Charlotte Perkins Gilman",
    description:
      "A seminal work of feminist literature depicting a woman's descent into madness.",
    coverUrl:
      "https://www.gutenberg.org/cache/epub/1952/pg1952.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/1952/1952-pdf.pdf",
    priceUsd: 20,
  },
  {
    id: "pg98",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    description:
      "A story of love, sacrifice, and revolution set in London and Paris.",
    coverUrl: "https://www.gutenberg.org/cache/epub/98/pg98.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/98/98-pdf.pdf",
    priceUsd: 30,
  },
  {
    id: "pg5200",
    title: "Metamorphosis",
    author: "Franz Kafka",
    description:
      "Gregor Samsa wakes to find himself transformed into a gigantic insect.",
    coverUrl: "https://www.gutenberg.org/cache/epub/5200/pg5200.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/5200/5200-pdf.pdf",
    priceUsd: 25,
  },
  {
    id: "pg2701",
    title: "Moby-Dick; or, The Whale",
    author: "Herman Melville",
    description:
      "Captain Ahab's obsessive quest to kill the white whale, Moby Dick.",
    coverUrl:
      "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/2701/2701-pdf.pdf",
    priceUsd: 20,
  },
  {
    id: "pg174",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description:
      "A cautionary tale about vanity, moral duplicity, and eternal youth.",
    coverUrl: "https://www.gutenberg.org/cache/epub/174/pg174.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/174/174-pdf.pdf",
    priceUsd: 30,
  },
  {
    id: "pg84",
    title: "Frankenstein; Or, The Modern Prometheus",
    author: "Mary Wollstonecraft Shelley",
    description:
      "A scientist creates a sentient creature with tragic consequences.",
    coverUrl: "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/84/84-pdf.pdf",
    priceUsd: 25,
  },
  {
    id: "pg120",
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    description:
      "A coming-of-age adventure with pirates and buried treasure.",
    coverUrl: "https://www.gutenberg.org/cache/epub/120/pg120.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/120/120-pdf.pdf",
    priceUsd: 20,
  },
  {
    id: "pg16328",
    title: "Beowulf",
    author: "Anonymous",
    description:
      "An Old English epic poem about the hero Beowulf's battles with monsters.",
    coverUrl:
      "https://www.gutenberg.org/cache/epub/16328/pg16328.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/16328/16328-pdf.pdf",
    priceUsd: 30,
  },
  // Custom ebooks/courses
  {
    id: "personal-development-ebook",
    title: "Personal Development Ebook",
    author: "Various",
    description: "A concise guide to habits, mindset, and goal-setting.",
    coverUrl: "https://picsum.photos/seed/personal-development-ebook/300/450",
    pdfUrl: "https://example.com/personal-development.pdf",
    priceUsd: 25,
    // Fill with your Stripe Price ID (e.g., price_123)
    priceId: "",
  },
  {
    id: "financial-freedom-ebook",
    title: "Financial Freedom Ebook",
    author: "Various",
    description: "Strategies for budgeting, investing, and building wealth.",
    coverUrl: "https://picsum.photos/seed/financial-freedom-ebook/300/450",
    pdfUrl: "https://example.com/financial-freedom.pdf",
    priceUsd: 30,
    priceId: "",
  },
  {
    id: "digital-marketing-guide",
    title: "Digital Marketing Guide",
    author: "Various",
    description: "Practical playbook for SEO, ads, email, and social media.",
    coverUrl: "https://picsum.photos/seed/digital-marketing-guide/300/450",
    pdfUrl: "https://example.com/digital-marketing.pdf",
    priceUsd: 35,
    priceId: "",
  },
  {
    id: "health-wellness-ebook",
    title: "Health & Wellness Ebook",
    author: "Various",
    description: "Nutrition, movement, and recovery fundamentals for longevity.",
    coverUrl: "https://picsum.photos/seed/health-wellness-ebook/300/450",
    pdfUrl: "https://example.com/health-wellness.pdf",
    priceUsd: 40,
    priceId: "",
  },
  {
    id: "productivity-masterclass",
    title: "Productivity Masterclass",
    author: "Various",
    description: "Systems and tools to get more done with less stress.",
    coverUrl: "https://picsum.photos/seed/productivity-masterclass/300/450",
    pdfUrl: "https://example.com/productivity-masterclass.pdf",
    priceUsd: 45,
    priceId: "",
  },
  {
    id: "mindfulness-meditation-guide",
    title: "Mindfulness & Meditation Guide",
    author: "Various",
    description: "Daily practices to reduce anxiety and improve focus.",
    coverUrl: "https://picsum.photos/seed/mindfulness-meditation-guide/300/450",
    pdfUrl: "https://example.com/mindfulness-meditation.pdf",
    priceUsd: 60,
    priceId: "",
  },
  {
    id: "entrepreneurship-blueprint",
    title: "Entrepreneurship Blueprint",
    author: "Various",
    description: "From idea validation to launch and early traction.",
    coverUrl: "https://picsum.photos/seed/entrepreneurship-blueprint/300/450",
    pdfUrl: "https://example.com/entrepreneurship-blueprint.pdf",
    priceUsd: 65,
    priceId: "",
  },
  {
    id: "wellness-program",
    title: "Wellness Program",
    author: "Various",
    description: "Holistic program combining fitness, nutrition, and sleep.",
    coverUrl: "https://picsum.photos/seed/wellness-program/300/450",
    pdfUrl: "https://example.com/wellness-program.pdf",
    priceUsd: 75,
    priceId: "",
  },
  {
    id: "success-coaching",
    title: "Success Coaching",
    author: "Various",
    description: "Guided frameworks and exercises for personal success.",
    coverUrl: "https://picsum.photos/seed/success-coaching/300/450",
    pdfUrl: "https://example.com/success-coaching.pdf",
    priceUsd: 85,
    priceId: "",
  },
];



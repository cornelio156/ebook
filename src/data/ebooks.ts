export type Ebook = {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  pdfUrl: string;
  priceUsd: number;
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
    priceUsd: 2.99,
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
    priceUsd: 2.49,
  },
  {
    id: "pg11",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    description:
      "Alice falls through a rabbit hole into a whimsical world of peculiar creatures.",
    coverUrl: "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/11/11-pdf.pdf",
    priceUsd: 1.99,
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
    priceUsd: 0.99,
  },
  {
    id: "pg98",
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    description:
      "A story of love, sacrifice, and revolution set in London and Paris.",
    coverUrl: "https://www.gutenberg.org/cache/epub/98/pg98.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/98/98-pdf.pdf",
    priceUsd: 2.99,
  },
  {
    id: "pg5200",
    title: "Metamorphosis",
    author: "Franz Kafka",
    description:
      "Gregor Samsa wakes to find himself transformed into a gigantic insect.",
    coverUrl: "https://www.gutenberg.org/cache/epub/5200/pg5200.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/5200/5200-pdf.pdf",
    priceUsd: 1.49,
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
    priceUsd: 2.99,
  },
  {
    id: "pg174",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description:
      "A cautionary tale about vanity, moral duplicity, and eternal youth.",
    coverUrl: "https://www.gutenberg.org/cache/epub/174/pg174.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/174/174-pdf.pdf",
    priceUsd: 1.99,
  },
  {
    id: "pg84",
    title: "Frankenstein; Or, The Modern Prometheus",
    author: "Mary Wollstonecraft Shelley",
    description:
      "A scientist creates a sentient creature with tragic consequences.",
    coverUrl: "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/84/84-pdf.pdf",
    priceUsd: 1.99,
  },
  {
    id: "pg120",
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    description:
      "A coming-of-age adventure with pirates and buried treasure.",
    coverUrl: "https://www.gutenberg.org/cache/epub/120/pg120.cover.medium.jpg",
    pdfUrl: "https://www.gutenberg.org/files/120/120-pdf.pdf",
    priceUsd: 1.49,
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
    priceUsd: 1.29,
  },
];



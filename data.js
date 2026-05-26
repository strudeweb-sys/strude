// data.js
const mockShoes = [
  {
    id: 1,
    name: "Stryde Phantom Runner",
    price: 120.00,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    description: "Lightweight running shoe for everyday miles."
  },
  {
    id: 2,
    name: "Stryde Urban High-Top",
    price: 150.00,
    img: "https://images.unsplash.com/photo-1508296695146-257a814050b4?w=500&q=80",
    description: "Classic street style with premium leather."
  },
  {
    id: 3,
    name: "Stryde Velocity",
    price: 135.50,
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
    description: "Built for speed and track performance."
  }
];

const mockReviews = [
  { shoeId: 1, user: "Alex M.", rating: 5, text: "Most comfortable running shoes I've ever owned." },
  { shoeId: 1, user: "Sarah J.", rating: 4, text: "Great fit, but the laces are a bit short." },
  { shoeId: 2, user: "Chris P.", rating: 5, text: "Looks amazing with jeans." }
];

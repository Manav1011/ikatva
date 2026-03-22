import { Cormorant_Garamond, Playfair_Display, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
});
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: '--font-bodoni',
  adjustFontFallback: false
});

export const metadata = {
  title: "IKATVA | Indian Handcrafted Luxury Purses & Heritage Leather Bags",
  description: "IKATVA brings the soul of India's traditional arts to the world. Discover luxury handcrafted purses, leather bags, and timeless artisan-made slow fashion.",
  keywords: "Indian handcrafted purses, traditional bags, heritage crafts, slow fashion, artisan-made products, luxury leather bags india",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${playfair.variable} ${bodoni.variable}`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

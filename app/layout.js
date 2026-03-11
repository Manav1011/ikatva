import { Cormorant_Garamond, Playfair_Display, Bodoni_Moda } from "next/font/google";
import "./globals.css";

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
  weight: ['400', '500', '600', '700'],
  variable: '--font-bodoni'
});

export const metadata = {
  title: "IKATVA | Carry Heritage. Carry IKATVA.",
  description: "Luxury heritage brand rooted in unity through tradition and strength through culture. Handmade purses inspired by India's timeless craftsmanship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${playfair.variable} ${bodoni.variable}`}>
        {children}
      </body>
    </html>
  );
}

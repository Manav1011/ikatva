import { Inter, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
});
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600'],
  variable: '--font-playfair' 
});

export const metadata = {
  title: "IKATVA | Carry Heritage. Carry IKATVA.",
  description: "Luxury heritage brand rooted in unity through tradition and strength through culture. Handmade purses inspired by India's timeless craftsmanship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}

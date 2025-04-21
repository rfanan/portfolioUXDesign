import { Gabarito, Outfit } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Rofianan's - Portfolio",
  description: "UI/UX Designer Portfolio",
  icons: {
    icon: "/icon/polygon.svg",
  },
};

const font = Gabarito({
  subsets: ["latin"],
  weight: ["400"],
});

const font2 = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font2.className} antialiased`}>{children}</body>
    </html>
  );
}

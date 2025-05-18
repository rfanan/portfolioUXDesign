import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "Rofianan's - Portfolio",
  description: "UI/UX Designer Portfolio",
  icons: {
    icon: "/icon/polygon.svg",
  },
};
const font2 = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font2.className} antialiased`}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  );
}

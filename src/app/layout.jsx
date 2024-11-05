import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "RS Coalition",
  description: "Everyday is a new day!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricolageGrotesque.variable} ${inter.variable} bg-neutral-900 text-neutral-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

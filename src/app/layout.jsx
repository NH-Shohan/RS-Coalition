import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "lenis/dist/lenis.css";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolageGrotesque.variable} ${inter.variable} bg-neutral-100 dark:bg-neutral-900 text-neutral-100 antialiased`}
      >
        <div className="fixed -z-50 top-0 left-0 right-0 inset-0 bg-[url('/noise.png')] opacity-50 invert dark:invert-0 pointer-events-none" />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

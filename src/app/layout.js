import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import CommonLayout from "@/components/CommonLayout"; 
import { ThemeProvider } from "@/components/ThemeProvider"; 
import CircleCursor from "@/components/CircleCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sayyub Ansari",
};


export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
       <link rel="icon" href="/code.png" type="image/png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
          <CommonLayout>
          <CircleCursor/>
            <Navbar /> {/* Ensure Navbar is included */}
            <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        > {children} </ThemeProvider>
          </CommonLayout>
       
      </body>
    </html>
  );
}

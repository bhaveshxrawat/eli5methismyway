import type { Metadata } from "next";
import { OpenPanelComponent } from "@openpanel/nextjs";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ELI5 Me",
  description: "Your Personalised Learning Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <div>
          <OpenPanelComponent
            clientId="bb986662-2548-4e90-802a-96911ecadf4d"
            trackScreenViews={true}
            trackOutgoingLinks={true}
          />
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

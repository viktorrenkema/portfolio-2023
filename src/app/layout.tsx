"use client";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Viktor | Front-end developer</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <text y=%22.9em%22 font-size=%2290%22>
        👋
      </text>
    </svg>"
        ></link>
        <meta name="title" content="I’m looking for a new front-end role!" />
        <meta
          name="description"
          content="I’m looking for a new front-end role!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.viktorrenkema.com/" />
        <meta property="og:title" content="Viktor | Front-end developer" />
        <meta
          property="og:description"
          content="I’m looking for a new front-end role!"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/vPy95R2/card.jpg?123"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vrenkema" />
        <meta name="twitter:title" content="Viktor | Front-end developer" />
        <meta
          name="twitter:description"
          content="I’m looking for a new front-end role!"
        />
        <meta
          name="twitter:image:src"
          content="https://i.ibb.co/vPy95R2/card.jpg?123"
        />
      </head>
      <body>
        <Analytics />
        <AnimatePresence mode="wait">
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </AnimatePresence>
      </body>
    </html>
  );
}

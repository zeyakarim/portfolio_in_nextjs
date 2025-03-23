import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Zeya Karim - Portfolio",
  description: "Professional UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/zk.png" className="rounded-full" />
      </head>
      <body className="bg-[#F9F9F9] text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
import "./globals.css";

export const metadata = {
  title: "Zeya Karim - Portfolio",
  description: "Professional UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F9F9F9] text-gray-900">{children}</body>
    </html>
  );
}
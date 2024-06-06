import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "To do list",
  description: "Task manager created with next, prisma & tailwindcss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Lexbot - Chatbot Interface",
  description: "Manage your chatbot integrations across web and social media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "The Muslim Tracker",
  description: "Track Salah, Coding, and Gym easily",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
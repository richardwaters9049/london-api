import "./globals.css";
import AuthProvider from "@/components/SessionProvider";

export const metadata = {
  title: "My Store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
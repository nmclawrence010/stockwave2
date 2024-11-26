import "./globals.css";
import NavigationWrapper from "../../components/navigation-wrapper";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <NavigationWrapper />
          <main>{children}</main>
        </body>
      </UserProvider>
    </html>
  );
}

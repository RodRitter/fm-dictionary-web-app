import useTheme from "@/hooks/useTheme";
import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/containers/ThemeProvider";
import dynamic from "next/dynamic";

const NoSSRThemeProvider = dynamic(
  () => import("../containers/ThemeProvider"),
  {
    loading: () => <div>Loading...</div>,
  }
);

export const metadata: Metadata = {
  title: "Dictionary",
  description: "Dictionary web app - a Frontend Mentors challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NoSSRThemeProvider>{children}</NoSSRThemeProvider>
    </html>
  );
}

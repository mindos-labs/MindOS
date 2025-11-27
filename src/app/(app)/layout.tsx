import { AppLayout } from "@/components/app";

export default function AppLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}

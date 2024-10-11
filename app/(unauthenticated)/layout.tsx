import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Layout({ children }: { children: JSX.Element }) {
  const session = await auth();

  if (session) {
    redirect("/blogs");
  }

  return children;
}
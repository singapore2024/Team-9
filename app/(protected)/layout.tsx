import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Sidebar from "@/components/Sidebar";

export default async function ProtectedLayout({
  children,
}: {
  children: JSX.Element;
}) {
  const session = await auth();
  if (session === null) {
    redirect("/sign-up");
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar/>
        </div>
        <div className="container col-span-10">
          {children}
        </div>
      </div>
    </main>
  );
}
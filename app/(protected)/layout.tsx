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

  const name = session?.user?.name

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Flex layout for responsiveness */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-64 flex-shrink-0">
          <Sidebar name={name}/>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          {children}
        </div>
      </div>
    </main>
  );
}

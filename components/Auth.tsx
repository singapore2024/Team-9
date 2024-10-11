"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"



interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter();


  return (
    <div className={cn("grid gap-6", className)} {...props}>
      
      <div className="relative">
        
        <div className="relative flex justify-center text-xs uppercase ">
          <span className="bg-background px-2 text-muted-foreground font-bold text-lg">
            Sign in with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={async () => {
          try {
            setIsLoading(true);
            await signIn("google");
            setTimeout(() => {
              setIsLoading(false)
            }, 3000)
            router.push("/home")

          } catch (error) {
            console.error("Error signing in with Google:", error);
            setIsLoading(false); // Reset loading state on error
          }
        }}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  )
}
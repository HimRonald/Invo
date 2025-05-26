"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useSession, signOut } from "@/lib/auth-client";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Welcome = () => {
  const { data, isPending } = useSession();
  const [loading, setLoading] = React.useState(false);

  if (isPending) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="size-12 animate-spin" />
      </div>
    );
  }

  if (data?.user) {
    return (
      <div className="mx-auto w-full max-w-sm overflow-hidden border-none">
        <div className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="space-y-2 text-center">
              <p className="font-bold text-2xl text-primary uppercase tracking-wider">
                Welcome
              </p>
              <span className="font-medium text-3xl uppercase">{data.user.name}</span>.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 py-10">
      <Button
        asChild={true}
        size="lg"
      >
        <Link href="/auth/sign-up">
          Sign Up <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <Button
        asChild={true}
        variant="outline"
        size="lg"
      >
        <Link href="/auth/sign-in">Sign In</Link>
      </Button>
    </div>
  );
};

export default Welcome;

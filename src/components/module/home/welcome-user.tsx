"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useSession, signOut } from "@/lib/auth-client";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const WelcomeUser = () => {
  const { data, isPending } = useSession();
  const [loading, setLoading] = React.useState(false);

  if (isPending) {
    return (
      <div>
        <Loader2 className="size-12 animate-spin" />
      </div>
    );
  }

  if (data?.user) {
    return (
      <Card className="mx-auto w-full max-w-sm overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="size-16">
              <AvatarImage
                src={data.user.image || ""}
                alt={data.user.name}
              />
              <AvatarFallback>
                {data.user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="space-y-2 text-center">
              <p className="text-base">
                Welcome, You are currently logged in as
                <span className="font-medium">{data.user.name}</span>.
              </p>
              <p className="text-gray-500 text-sm">Email: {data.user.email}</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center p-6 pt-0">
          <Button
            className="w-full max-w-[120px]"
            onClick={() =>
              signOut(
                {},
                {
                  onRequest: () => {
                    setLoading(true);
                  },
                  onResponse: () => {
                    setLoading(false);
                  },
                },
              )
            }
            disabled={loading}
          >
            {loading ? "Logging out..." : "Log Out"}
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <div className="flex gap-4 py-10">
      <Button
        asChild={true}
        size="lg"
      >
        <Link href="/auth/sign-up">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
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

export default WelcomeUser;

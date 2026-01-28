import { Button } from "@/shadcn-components/button";
import { Input } from "@/shadcn-components/input";
import { Label } from "@/shadcn-components/label";
import { Card, CardContent, CardHeader } from "@/shadcn-components/card";
import Image from "next/image";
import { GraduationCap, Link as LinkIcon } from "lucide-react";

export default function SignupForm() {
  return (
    <Card className="w-full max-w-md shadow-lg border">
      <CardHeader className="text-center space-y-2">
        <div className="flex justify-center">
          <div className="p-3 rounded-full">
            
            <Image
            width={70}
            height={70}
            src="/acadlink-small.png"
            alt="AcadLink"
            />
            
          </div>
        </div>

        <h2 className="text-2xl font-semibold">Log in to your account</h2>
        <p className="text-sm text-muted-foreground">
          Welcome back!please enter your details
        </p>
      </CardHeader>

      <CardContent className="space-y-4">

        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="email">Email*</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <Label htmlFor="password">Password*</Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a password"
          />
          <p className="text-xs text-muted-foreground">
           Forgot password
          </p>
        </div>

        {/* Submit */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Sign in 
        </Button>

        {/* Divider */}
        <div className="relative text-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">
            OR
          </span>
          <div className="absolute inset-0 top-1/2 border-t" />
        </div>

        {/* Google Sign Up */}
        <Button variant="outline" className="w-full gap-2">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-4 w-4"
          />
          Sign up with Google
        </Button>

        
      </CardContent>
    </Card>
  );
}

import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Card>
        <CardHeader className="items-center">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent>
          <form id="login" className="flex flex-col gap-5">
            <Input type="email" name="email" placeholder="Email ID" required />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <div className="flex gap-5">
              <div className="flex items-center gap-1">
                <Checkbox id="remember-me" />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <div>
                <Link href="/password-reset">Forgot Password?</Link>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <Button form="login">LOGIN</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

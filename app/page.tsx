import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-5 md:w-1/2">
      <Card className="flex flex-col justify-center text-center">
        <CardHeader>
          <CardDescription>BACK GROUND</CardDescription>
          <CardTitle>MAI MUSIC</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            An AI compositional feature that allows for quick, easy, accurate
            creation of music, using a variety of specific criteria. Create tons
            of songs in under a minute with a more intuitive and simple way to
            compose.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>
            <Link href="/chat">Start Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

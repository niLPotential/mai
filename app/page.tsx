import Link from "next/link";

import Image from "next/image";
import HomeImage from "/public/home.png";

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
    <div className="flex flex-col items-center justify-center p-5">
      <Card className="flexflex-col relative justify-center border-transparent bg-transparent text-center">
        <CardHeader>
          <CardDescription>BACK GROUND</CardDescription>
          <CardTitle>MAI MUSIC</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="m-auto  w-3/4 text-xl">
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
        <Image
          src={HomeImage}
          alt="Picture of AI composing music"
          className="absolute left-1/2 top-1/2 -z-10 translate-x-[-50%] translate-y-[-40%]"
        />
      </Card>
    </div>
  );
}

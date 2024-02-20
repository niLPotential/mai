import Link from "next/link";

import Image from "next/image";
import HomeImage from "/public/home.png";
import LogoLong from "/public/logo_long.png";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Card className="relative flex flex-col justify-center border-transparent bg-transparent text-center">
        <CardHeader className="mb-32">
          <CardTitle className="flex justify-center">
            <Image src={LogoLong} alt="M:AI Music" width={500} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="m-auto  w-3/4 text-xl text-accent">
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
          className="absolute inset-0 -z-10"
        />
      </Card>
    </div>
  );
}

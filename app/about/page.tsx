import Image from "next/image";
import About_1 from "/public/about_1.png";
import About_2 from "/public/about_2.png";
import About_3 from "/public/about_3.png";
import About_4 from "/public/about_4.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-5 md:w-1/2">
      <Carousel className="text-center">
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>We reach out to our customers endlessly</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-accent">
                  Our company will always strive to provide the most complete
                  music and convenience for our customers.
                </p>
                <Image src={About_1} alt="Picture of people discussing" />
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>Create the music you want in a minute</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <Image src={About_2} alt="Picture of AI bot" />
                <p className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-accent">
                  Once you&apos;ve created your music with AI, work with a
                  professional composerfor fine-tuning and refinement.
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>Working with Compositors and Details</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <Image
                  src={About_3}
                  alt="Picture of a woman working on music"
                />
                <p className="translate-y-[-50% absolute left-1/2 top-1/2 translate-x-[-50%] text-xl text-accent">
                  Once you&apos;ve created your music with AI, work with a
                  professional composer for fine-tuning and refinement.
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>Detailed Options Features</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <Image src={About_4} alt="Picture of a music workstation" />
                <p className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-xl text-accent">
                  We analyze your tastes, situation, and needs to create the
                  perfect soundtrack
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

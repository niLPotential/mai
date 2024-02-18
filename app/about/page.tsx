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
              <CardContent>
                <p>
                  Our company will always strive to provide the most complete
                  music and convenience for our customers.
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>Create the music you want in a minute</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
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
              <CardContent>
                <p>
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
              <CardContent>
                <p>
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

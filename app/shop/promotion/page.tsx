import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Promotion 1</CarouselItem>
        <CarouselItem>Promotion 2</CarouselItem>
        <CarouselItem>Promotion 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

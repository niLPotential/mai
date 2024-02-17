import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page() {
  return (
    <div className="flex justify-center">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>Promotion 1</CarouselItem>
          <CarouselItem>Promotion 2</CarouselItem>
          <CarouselItem>Promotion 3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

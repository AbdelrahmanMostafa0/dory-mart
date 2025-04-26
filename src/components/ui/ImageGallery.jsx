import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useMemo } from "react";

const ImageGallery = ({ data }) => {
  return (
    <Carousel
    // opts={{
    //   loop: true,
    // }}
    >
      <CarouselContent>
        {data?.images?.map((item, i) => {
          return (
            <CarouselItem key={i}>
              <Image
                src={item}
                width={400}
                height={400}
                className="aspect-square w-full object-cover rounded-xl "
                alt={` detail image number ${i} `}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="mx-14 rounded-lg scale-110" />
      <CarouselNext className="mx-14 rounded-lg scale-110" />
    </Carousel>
  );
};
export default ImageGallery;

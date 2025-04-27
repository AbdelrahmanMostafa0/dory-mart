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
    <Carousel>
      <CarouselContent>
        {data?.images?.map((item, i) => {
          return (
            <CarouselItem key={i}>
              <Image
                src={item || "/no-img-placeholder.png"}
                width={400}
                height={400}
                className="aspect-square w-full object-cover rounded-xl "
                alt={data?.title}
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

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Card from "./card/Card";
import { rings as matrimonioRings } from "../shop/matrimonio/Template";
import { rings as compromisoRings } from "../shop/compromiso/Template";
import { rings as cintillosRings } from "../shop/cintillos/Template";
import { rings as setRings } from "../shop/set/Template";
import { CategoryType } from "../types/category";
import { useState } from "react";

interface RingsCarouselProps {
  category: CategoryType;
  title: string;
}

export default function RingsCarousel({ category, title }: RingsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();

  const getRingsByCategory = () => {
    switch (category) {
      case "matrimonio":
        return matrimonioRings;
      case "compromiso":
        return compromisoRings;
      case "cintillos":
        return cintillosRings;
      case "set":
        return setRings;
      default:
        return [];
    }
  };

  const rings = getRingsByCategory();

  return (
    <div className="w-full py-10">
      <div className="flex justify-between items-center mb-8 px-4">
        <h2 className="text-2xl font-semibold text-left text-myZinc">
          {title}
        </h2>
        <div className="hidden lg:flex gap-2">
          <button
            onClick={() => api?.scrollPrev()}
            className="icon-[hugeicons--greater-than] rotate-180 h-5 w-5 text-zinc-600 hover:text-myZinc"
          />
          <button
            onClick={() => api?.scrollNext()}
            className="icon-[hugeicons--greater-than] h-5 w-5 text-zinc-600 hover:text-myZinc"
          />
        </div>
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          containScroll: false,
          breakpoints: {
            "(min-width: 1024px)": {
              slidesToScroll: 4,
            },
          },
        }}
        className="w-full"
      >
        <CarouselContent>
          {rings.slice(0, 8).map((ring, index) => (
            <CarouselItem
              key={index}
              className="basis-[300px] md:basis-1/3 lg:basis-1/4"
            >
              <Card product={ring} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

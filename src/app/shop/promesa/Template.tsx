"use client";
import Button from "@/app/components/Button";
import Card from "@/app/components/card/Card";
import InstructionColors from "@/app/components/InstructionColors";
import { gtmPageView } from "@/app/lib/gtm";
import { gaPageView } from "@/app/lib/ga";
import { useEffect } from "react";
import Image from "next/image";
import { CategoryType } from "@/app/types/category";

export const rings = [
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-001/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-001/blanco.jpg",
    imageRose: "/modelos/promesa/ap-001/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoyAm6vnmX/?igsh=ZjdnOWEzMHo3dTJv",
    alt: "imagen modelo ap-001",
    model: "AP-001",
    color: "amarillo",
    grabado: false,
    grams: 2,
    garantia: true,
  },
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-002/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-002/blanco.jpg",
    imageRose: "/modelos/promesa/ap-002/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoyDzEvIIJ/?igsh=aG5ndzkxbXQ4MzZt",
    alt: "imagen modelo ap-002",
    model: "AP-002",
    color: "amarillo",
    grabado: true,
    grams: 2,
    garantia: true,
  },
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-003/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-003/blanco.jpg",
    imageRose: "/modelos/promesa/ap-003/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoyG39vtdr/?igsh=MTE4eXMyczZxcmM0ZA==",
    alt: "imagen modelo ap-003",
    model: "AP-003",
    color: "amarillo",
    grabado: true,
    grams: 2,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-004/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-004/blanco.jpg",
    imageRose: "/modelos/promesa/ap-004/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoyJ8hPtw1/?igsh=MTd6bG5iZXczdGE3cA==",
    alt: "imagen modelo ap-004",
    model: "AP-004",
    color: "amarillo",
    grabado: true,
    grams: 2,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-005/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-005/blanco.jpg",
    imageRose: "/modelos/promesa/ap-005/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoyMcav8eU/?igsh=aDNmYnB0b2FyNnkz",
    alt: "imagen modelo ap-005",
    model: "AP-005",
    color: "amarillo",
    grabado: true,
    grams: 2,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-006/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-006/blanco.jpg",
    imageRose: "/modelos/promesa/ap-006/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoyPnLvG9V/?igsh=cHcxd2I2c2JhZ3o4",
    alt: "imagen modelo ap-006",
    model: "AP-006",
    color: "amarillo",
    grabado: true,
    grams: 2,
    garantia: true,
    bestSeller: true,
  },
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-007/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-007/blanco.jpg",
    imageRose: "/modelos/promesa/ap-007/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoyTRPvU-A/?igsh=MTdscjc1Y2pocTB2aA==",
    alt: "imagen modelo ap-007",
    model: "AP-007",
    color: "amarillo",
    grabado: true,
    grams: 3,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-008/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-008/blanco.jpg",
    imageRose: "/modelos/promesa/ap-008/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoyVafPfRP/?igsh=MWpkbDF5cXptd3hnNg==",
    alt: "imagen modelo ap-008",
    model: "AP-008",
    color: "amarillo",
    grabado: true,
    grams: 3,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-009/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-009/blanco.jpg",
    imageRose: "/modelos/promesa/ap-009/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoyYr-PtwL/?igsh=Z3M3MHMxZHNsbXp0",
    alt: "imagen modelo ap-009",
    model: "AP-009",
    color: "amarillo",
    grabado: true,
    grams: 3,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-010/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-010/blanco.jpg",
    imageRose: "/modelos/promesa/ap-010/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoybNMvzYX/?igsh=MTh5Z3A4MGFsaXJrMQ==",
    alt: "imagen modelo ap-010",
    model: "AP-010",
    color: "amarillo",
    grabado: true,
    grams: 4,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-011/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-011/blanco.jpg",
    imageRose: "/modelos/promesa/ap-011/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoyeLQPGwD/?igsh=MWFodzlkOGhmMGEyeA==",
    alt: "imagen modelo ap-011",
    model: "AP-011",
    color: "amarillo",
    grabado: true,
    grams: 4,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "promesa" as CategoryType,
    image: "/modelos/promesa/ap-012/amarillo.jpg",
    imageSilver: "/modelos/promesa/ap-012/blanco.jpg",
    imageRose: "/modelos/promesa/ap-012/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoyhXDPVYC/?igsh=MXh5OGtkNnNkZW50bg==",
    alt: "imagen modelo ap-012",
    model: "AP-012",
    color: "amarillo",
    grabado: true,
    grams: 4,
    garantia: true,
    bestSeller: false,
  },
];

export default function ShopTemplate() {
  useEffect(() => {
    const props = {
      page_title: "promesa",
    };
    gtmPageView(props);
    gaPageView(window.location.href);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Button />
      <h1 className="text-myZinc text-lg mb-10 font-bold">
        Anillos de Promesa
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {rings.map((model, index) => {
          return <Card key={index} product={model} />;
        })}
      </div>

      <Button />
    </div>
  );
}

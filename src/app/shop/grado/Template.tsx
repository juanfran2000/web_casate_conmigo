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
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-001/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-001/blanco.jpg",
    imageRose: "/modelos/grado/ag-001/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozLrKPuKO/?igsh=ZzdyczhrODV6dnE5",
    alt: "imagen modelo ag-001",
    model: "AG-001",
    color: "amarillo",
    grabado: false,
    grams: 2,
    garantia: true,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-002/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-002/blanco.jpg",
    imageRose: "/modelos/grado/ag-002/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozNssPLXQ/?igsh=MXRvYnIwNTBsY29icQ==",
    alt: "imagen modelo ag-002",
    model: "AG-002",
    color: "amarillo",
    grabado: true,
    grams: 3,
    garantia: true,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-003/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-003/blanco.jpg",
    imageRose: "/modelos/grado/ag-003/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozQlHvg7z/?igsh=bjBoaWp4ZXd4cmgy",
    alt: "imagen modelo ag-003",
    model: "AG-003",
    color: "amarillo",
    grabado: true,
    grams: 3,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-004/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-004/blanco.jpg",
    imageRose: "/modelos/grado/ag-004/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozS3hvPsf/?igsh=MXJuNHJid2tlZWlzNw==",
    alt: "imagen modelo ag-004",
    model: "AG-004",
    color: "amarillo",
    grabado: true,
    grams: 4,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-005/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-005/blanco.jpg",
    imageRose: "/modelos/grado/ag-005/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozVGxPc9m/?igsh=enpsZXFyZmRxcms0",
    alt: "imagen modelo ag-005",
    model: "AG-005",
    color: "amarillo",
    grabado: true,
    grams: 5,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-006/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-006/blanco.jpg",
    imageRose: "/modelos/grado/ag-006/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozaM0Ph0l/?igsh=MTA2YTNmeW40Mnk3Zw==",
    alt: "imagen modelo ag-006",
    model: "AG-006",
    color: "amarillo",
    grabado: true,
    grams: 5,
    garantia: true,
    bestSeller: true,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-007/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-007/blanco.jpg",
    imageRose: "/modelos/grado/ag-007/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozcbcPWMk/?igsh=ZGYyZWNlcWNuMXRs",
    alt: "imagen modelo ag-007",
    model: "AG-007",
    color: "amarillo",
    grabado: true,
    grams: 10,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-008/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-008/blanco.jpg",
    imageRose: "/modelos/grado/ag-008/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozftVPnF1/?igsh=MXZsM2tjMXJsa2p3Zw==",
    alt: "imagen modelo ag-008",
    model: "AG-008",
    color: "amarillo",
    grabado: true,
    grams: 10,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-009/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-009/blanco.jpg",
    imageRose: "/modelos/grado/ag-009/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozjcCP1Tu/?igsh=MWQxdGVyNGpodHQyeg==",
    alt: "imagen modelo ag-009",
    model: "AG-009",
    color: "amarillo",
    grabado: true,
    grams: 10,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-010/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-010/blanco.jpg",
    imageRose: "/modelos/grado/ag-010/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozmBivDGY/?igsh=ODRteTcwdW1pbXFj",
    alt: "imagen modelo ag-010",
    model: "AG-010",
    color: "amarillo",
    grabado: true,
    grams: 12,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-011/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-011/blanco.jpg",
    imageRose: "/modelos/grado/ag-011/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozoFiPc19/?igsh=MXBqeG84Nmk3NTNmeQ==",
    alt: "imagen modelo ag-011",
    model: "AG-011",
    color: "amarillo",
    grabado: true,
    grams: 12,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-012/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-012/blanco.jpg",
    imageRose: "/modelos/grado/ag-012/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHozqr8PVJK/?igsh=MXd0d3BpaXhuYmxxNg==",
    alt: "imagen modelo ag-012",
    model: "AG-012",
    color: "amarillo",
    grabado: true,
    grams: 12,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-013/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-013/blanco.jpg",
    imageRose: "/modelos/grado/ag-013/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoztY8P0ur/?igsh=MWpxdjA1YTB0YjlqZA==",
    alt: "imagen modelo ag-013",
    model: "AG-013",
    color: "amarillo",
    grabado: true,
    grams: 14,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-014/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-014/blanco.jpg",
    imageRose: "/modelos/grado/ag-014/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoz163v1EN/?igsh=Z2swdmlwanprMnNi",
    alt: "imagen modelo ag-014",
    model: "AG-014",
    color: "amarillo",
    grabado: true,
    grams: 14,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-015/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-015/blanco.jpg",
    imageRose: "/modelos/grado/ag-015/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoz6FzP-y0/?igsh=cDRkdGdiN3A2cjlq",
    alt: "imagen modelo ag-015",
    model: "AG-015",
    color: "amarillo",
    grabado: true,
    grams: 14,
    garantia: true,
    bestSeller: false,
  },
  {
    category: "grado" as CategoryType,
    image: "/modelos/grado/ag-016/amarillo.jpg",
    imageSilver: "/modelos/grado/ag-016/blanco.jpg",
    imageRose: "/modelos/grado/ag-016/rosado.jpg",
    linkProduct:
      "https://www.instagram.com/p/DHoz9QbPVRL/?igsh=MTgzenN1bGx2eWUxOA==",
    alt: "imagen modelo ag-016",
    model: "AG-016",
    color: "amarillo",
    grabado: true,
    grams: 14,
    garantia: true,
    bestSeller: false,
  },
];

export default function ShopTemplate() {
  useEffect(() => {
    const props = {
      page_title: "grado",
    };
    gtmPageView(props);
    gaPageView(window.location.href);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Button />
      <h1 className="text-myZinc text-lg mb-10 font-bold">Anillos de Grado</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {rings.map((model, index) => {
          return <Card key={index} product={model} />;
        })}
      </div>

      <Button />
    </div>
  );
}

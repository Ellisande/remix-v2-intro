import { PrismaClient } from "@prisma/client";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card } from "~/components/Card";
import landingStylesUrls from "~/styles/landing.css";

export const meta: MetaFunction = () => {
  return [
    { title: "High Steaks" },
    { name: "description", content: "Luxury hats made of premium meats" },
  ];
};

export const links = () => [{ rel: "stylesheet", href: landingStylesUrls }];

export const loader = async () => {
  const products = await new PrismaClient().product.findMany();
  return { products };
};

export default function Index() {
  const { products } = useLoaderData<typeof loader>();
  return (
    <div className="my-5 mx-10">
      <h1 className="hero my-5">High Steaks</h1>
      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
}

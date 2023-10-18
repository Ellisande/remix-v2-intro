import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { SizeSelect } from "~/components/SizeSelect";
import { getProductById } from "~/models/product.server";
import productStylesUrls from "~/styles/product.css";
import { slugUrlMap } from "~/utils/imageUtils";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.product) {
    return [];
  }
  const { product } = data;
  return [
    { title: product.name },
    { name: "description", content: product.description },
  ];
};

export const links = () => [{ rel: "stylesheet", href: productStylesUrls }];

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const { id } = params;
  if (!id || isNaN(Number(id))) {
    throw new Error("No id provided");
  }
  const product = await getProductById(Number(id));
  if (!product) {
    throw { message: "No product found", status: 404 };
  }
  const url = new URL(request.url);
  const size = url.searchParams.get("size") || "md";
  return json({ product, size });
};

export default function ProductPage() {
  const { product, size } = useLoaderData<typeof loader>();
  const { imageSlug, name, description, id } = product || {};
  const imageUrl = imageSlug ? slugUrlMap[imageSlug] : slugUrlMap.hat_1;
  return (
    <div className="flex flex-col gap-3 justify-center items-center mx-10">
      <div className="grid grid-cols-2 w-full mx-5">
        <div className="flex flex-col gap-4 max-w-1/2 ml-auto">
          <img
            src={imageUrl}
            alt="hat made out of meat"
            className="h-[768px]"
          />
          <h1 className="text-4xl text-slate-900 font-bold justify-center flex">
            {name}
          </h1>
          <h2 className="text-lg text-slate-900">Product description:</h2>
          <div className="text-slate-600 mx-2">{description}</div>
          <h2>Options:</h2>
          <Form
            method="get"
            preventScrollReset
            reloadDocument
            className="mx-2 flex gap-3 items-center"
          >
            <label htmlFor="size">Size:</label>
            <SizeSelect selectedSize={size as any} />
          </Form>
          <Link to="/" className="text-sky-700 underline">
            {"<"} Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}

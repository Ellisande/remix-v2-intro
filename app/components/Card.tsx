import { Link } from "@remix-run/react";
import { slugUrlMap } from "~/utils/imageUtils";

export const Card = ({
  product,
}: {
  product: {
    id: number;
    name: string;
    description?: string | null;
    imageSlug?: string | null;
  };
}) => {
  const imageUrl = product.imageSlug
    ? slugUrlMap[product.imageSlug]
    : slugUrlMap.hat_1;
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col relative text-transparent hover:text-white transition-colors"
    >
      <img src={imageUrl} />
      <h2 className=" font-bold absolute text-8xl w-full text-center top-1/2 ">
        {product.name}
      </h2>
    </Link>
  );
};

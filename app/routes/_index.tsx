import type { MetaFunction } from "@remix-run/node";
import hat1Url from "~/images/hat_1.png";
import landingStylesUrls from "~/styles/landing.css";

export const meta: MetaFunction = () => {
  return [
    { title: "High Steaks" },
    { name: "description", content: "Luxury hats made of premium meats" },
  ];
};

export const links = () => [{ rel: "stylesheet", href: landingStylesUrls }];

export default function Index() {
  return (
    <div className="my-5 mx-10">
      <h1 className="hero my-5">High Steaks</h1>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col relative text-transparent hover:text-white transition-colors">
          <img src={hat1Url} />
          <h2 className=" font-bold absolute text-8xl w-full text-center top-1/2 ">
            Ribeye on the Range
          </h2>
        </div>
      </div>
    </div>
  );
}

import type { MetaFunction } from "@remix-run/node";
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
    </div>
  );
}

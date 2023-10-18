import { Link } from "@remix-run/react";
import whereIsTheBeefGifUrl from "~/images/where_is_the_beef.gif";

export default function NotFound() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center gap-4">
      <img
        src={whereIsTheBeefGifUrl}
        alt="where is the beef"
        className="h-96"
      />
      <h1 className="text-3xl">
        We aren't sure what you were looking for... but its not here.
      </h1>
      <Link to="/" className="underline text-sky-700">
        Back to home
      </Link>
    </div>
  );
}

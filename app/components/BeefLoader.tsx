import { ReactNode } from "react";
import dancingBeefGifUrl from "~/images/dancing_beef.gif";

export const BeefLoader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <img
        src={dancingBeefGifUrl}
        alt="dancing beef"
        className="mx-auto w-1/2"
      />
      {children}
    </div>
  );
};

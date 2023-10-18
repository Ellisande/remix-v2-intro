import { Link } from "@remix-run/react";

interface SuccessProps {
  amount: number;
  currency: string;
}

export default function Success({ amount, currency }: SuccessProps) {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Payment Successful!</h1>
      <p className="text-2xl text-emerald-600">Thank you for your purchase.</p>
      <Link to="/" className="m-10 underline text-sky-700">
        Back to catalog
      </Link>
    </div>
  );
}

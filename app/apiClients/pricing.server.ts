type PricingInfo = {
  basePrice: number;
  totalPrice: number;
  lineItems: {
    description: string;
    price: number;
  }[];
  fees: {
    description: string;
    price: number;
  }[];
};

export const getPrice = async (
  productId: number,
  size: string
): Promise<PricingInfo> => {
  // Super slow pricing API
  await new Promise((r) => setTimeout(r, 3000));
  const basePrice = Math.random() * 400 + 100;
  const lineItems = [
    {
      description: "Butchering",
      price: Math.random() * 40,
    },
    {
      description: "Tailoring",
      price: Math.random() * 20,
    },
    {
      description: "Millinering",
      price: Math.random() * 100,
    },
  ];
  const fees = [
    {
      description: "Taxes",
      price: Math.random() * 20,
    },
    {
      description: "Mercurcy disposal fee",
      price: Math.random() * 5,
    },
  ];
  const totalPrice =
    basePrice +
    lineItems.reduce((a, b) => a + b.price, 0) +
    fees.reduce((a, b) => a + b.price, 0);
  return {
    basePrice,
    totalPrice,
    lineItems,
    fees,
  };
};

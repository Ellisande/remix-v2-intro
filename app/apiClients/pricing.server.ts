export const getPrice = async (productId: number, size: string) => {
  // Super slow pricing API
  await new Promise((r) => setTimeout(r, 5000));
  return Math.random() * 400 + 100;
};

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

enum FulfillmentStatus {
  New = "NEW",
  Processing = "PROCESSING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
}

interface PurchaseInput {
  productId: number;
  price: number;
}

export async function createPurchase(purchaseInput: PurchaseInput) {
  const { productId, price } = purchaseInput;

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Error(`Product with id ${productId} not found`);
  }

  const purchase = await prisma.purchase.create({
    data: {
      product: { connect: { id: productId } },
      price,
      fulfillmentStatus: FulfillmentStatus.New,
    },
  });

  return purchase;
}

export async function getPurchaseById(purchaseId: number) {
  const purchase = await prisma.purchase.findUnique({
    where: { id: purchaseId },
    include: { product: true },
  });

  if (!purchase) {
    throw new Error(`Purchase with id ${purchaseId} not found`);
  }

  return purchase;
}

export async function getAllPurchases() {
  const purchases = await prisma.purchase.findMany({
    include: { product: true },
  });

  return purchases;
}

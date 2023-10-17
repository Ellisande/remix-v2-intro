import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

// Create a new product
async function createProduct(data: Product): Promise<Product> {
  const product = await prisma.product.create({ data });
  return product;
}

// Get all products
async function getAllProducts(): Promise<Product[]> {
  const products = await prisma.product.findMany();
  return products;
}

// Get a single product by ID
async function getProductById(id: number): Promise<Product | null> {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
}

// Update a product by ID
async function updateProductById(
  id: number,
  data: Product
): Promise<Product | null> {
  const product = await prisma.product.update({ where: { id }, data });
  return product;
}

// Delete a product by ID
async function deleteProductById(id: number): Promise<Product | null> {
  const product = await prisma.product.delete({ where: { id } });
  return product;
}

export {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};

import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";
const QueryProducts = require("@/app/lib/QueryProducts");

const formateProduct = (products) => {
  const productArray = [];
  let i = 0;
  while (i < products.length) {
    let temp = [];
    let j = i;
    while (j < i + 3) {
      if (products[j]) {
        temp.push(products[j]);
      }
      j++;
    }
    productArray.push([...temp]);
    i = j;
  }
  return productArray;
};

export async function GET(req, res) {
  try {
    const parPage = 25;
    const products = await prisma.products.findMany({
      take: 25,
      orderBy: {
        createdAt: "desc",
      },
    });
   
    const latestProduct = formateProduct(products);

    return NextResponse.json({
      products,
      latestProduct,
    });
  } catch (error) {
    return NextResponse.json({
      error: error,
      message:error
    });
  }
}

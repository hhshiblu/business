import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

import { queryProducts } from "@/libs/QueryProducts";

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

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = {};
    const latestestPro = await prisma.products.findMany({
      take: 9,
      orderBy: {
        createdAt: "desc",
      },
    });
    const latestProduct = formateProduct(latestestPro);
    for (const [key, value] of searchParams.entries()) {
      query[key] = value;
    }

    const pageNumber = parseInt(query.pageNumber) || 1;
    const parPage = parseInt(query.parPage) || 25;

    const products = await prisma.products.findMany({
      take: parPage,
      skip: (pageNumber - 1) * parPage,
      orderBy: {
        createdAt: "desc",
      },
    });

    const result = new queryProducts(products, query)
      .categoryQuery()
      .subCategoryQuery()
      .ratingQuery()
      .priceQuery()
      .highPriceQuery()
      .searchQuery()
      // .sortByPrice()
      .skip()
      .limit()
      .getProducts();
    const totalproduct = new queryProducts(products, query)
      .categoryQuery()
      .subCategoryQuery()
      .ratingQuery()
      .priceQuery()
      .highPriceQuery()
      .searchQuery()
      // .sortByPrice()
      .countProducts();
    const resultWithoutQuery = { ...result };
    delete resultWithoutQuery.query;

    return NextResponse.json({
      result: resultWithoutQuery,
      totalproduct,
      latestProduct,
    });
  } catch (e) {
    return NextResponse.json({
      message: error.message,
    });
  }
}

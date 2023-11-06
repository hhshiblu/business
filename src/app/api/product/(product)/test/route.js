import { queryProducts } from "@/libs/QueryProducts";
import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = {};

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

    // const result = new queryProducts(products, query).categoryQuery();
    const result = new queryProducts(products, query)
      .categoryQuery()
      .subCategoryQuery()
      .ratingQuery()
      .priceQuery()
      .highPriceQuery()
      .searchQuery()
      .sortByPrice()
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
      .sortByPrice()
      .countProducts();
    const resultWithoutQuery = { ...result };
    delete resultWithoutQuery.query;

    return NextResponse.json({
      result: resultWithoutQuery,
      totalproduct,
    });
  } catch (e) {
    return NextResponse.json({
      message: error.message,
    });
  }
}

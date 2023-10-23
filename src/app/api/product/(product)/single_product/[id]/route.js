import { NextResponse } from "next/server";
import prisma from "../../../../../../../prisma/prisma";

export async function GET(req, { params }) {
  try {
    const id = params.id;
    const product = await prisma.products.findUnique({
      where: {
        id: id,
      },
    });

    const relatedProducts = await prisma.products.findMany({
      where: {
        id: {
          not: {
            equals: product.id,
          },
        },
        category: {
          equals: product.category,
        },
      },
      take: 20,
    });

    const moreProducts = await prisma.products.findMany({
      where: {
        id: {
          not: {
            equals: product.id,
          },
        },
        sellerId: {
          equals: product.sellerId,
        },
      },
      take: 20,
    });

    return NextResponse.json({
      product,
      relatedProducts,
      moreProducts,
    });
  } catch (error) {
    return NextResponse.json({
      error: error,
    });
  }
}


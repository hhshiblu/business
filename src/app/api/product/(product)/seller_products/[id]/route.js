import { NextResponse } from "next/server";
import prisma from "../../../../../../../prisma/prisma";

export async function GET(req, { params }) {
  try {
    const id = params.id;

    const sellerProducts = await prisma.products.findMany({
      where: {
        sellerId: id,
      },
    });
    return NextResponse.json({
      success: true,
      sellerProducts,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message, // Access the error message using error.message
    });
  }
}

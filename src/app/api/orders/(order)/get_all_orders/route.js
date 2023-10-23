import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function GET(req, res) {
  try {
    const orders = await prisma.orders.findMany({
      orderBy: {
        deliveredAt: "desc",
        createdAt: "desc",
      },
    });
    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    });
  }
}

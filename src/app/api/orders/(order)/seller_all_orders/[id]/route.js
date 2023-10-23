import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const id = params.id;
    const orders = await prisma.orders.findMany({
      where: {
        cart: {
          sellerId: id,
        },
      },
      orderBy: {
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

import { NextResponse } from "next/server";
import prisma from "../../../../../../../prisma/prisma";


export async function GET(req, {params}) {
    try {
      const userId=params.userId
  

    const orders = await prisma.orders.findMany({
      where: {
        user: {
          userId: userId,
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

        message:error.message
      });
  }
}
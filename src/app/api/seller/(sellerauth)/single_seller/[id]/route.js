import { NextResponse } from "next/server";
import prisma from "../../../../../../../prisma/prisma";

export async function GET(req, { params }) {
  try {
    const id = params.id;
      const sellerInfo = await prisma.shops.findUnique({
        where: {
          id:id
        },
      });

  return NextResponse.json({
      success: true,
      sellerInfo,
    });
  } catch (error) {
     return NextResponse.json({
      message:error.message
     });
  }
}



import { NextResponse } from "next/server";
import prisma from "../../../../../../../prisma/prisma";

export async function GET(req, { params }) {
  try { 
    const id = params.id;
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      success:true,
      user,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: "Error",
      error: error.message,
    });
  }
}

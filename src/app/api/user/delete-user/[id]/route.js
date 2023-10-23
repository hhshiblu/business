import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function GET(req, { params }) {
  try {
    const id = params.id;
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) {
      return  NextResponse.json({ message: "user not found" });
    }
    await prisma.users.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({
      message: "user delete successfully",
    
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: "Error",
      error: error.message,
    });
  }
}

import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";
import prisma from "../../../../../../prisma/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function GET(req, res) {
  const session = await getServerSession(authOptions);
  const id = session?.user?.id;
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Error",
      error: error.message,
    });
  }
}

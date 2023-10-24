import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";


export async function GET(req, res) {
  const session = await getServerSession(authOptions);
const s=session?.user
  try {

    const users = await prisma.users.findMany({});


    return NextResponse.json({
      success: true,
      s,
      users,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: "Error",
      error: error.message,
    });
  }
}

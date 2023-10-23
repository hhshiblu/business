import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";


export async function GET(req, res) {
  try {

    const users = await prisma.users.findMany({});


    return NextResponse.json({
      success: true,
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

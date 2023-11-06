import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";
import { sign } from "jsonwebtoken"; // Correct import for jwt
import { compare } from "bcryptjs"; // Correct import for bcrypt

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json({ message: "Please fill in all fields" });
    }

    const user = await prisma.users.findFirst({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: "This user does not exist" });
    }

    // Check if the provided password matches the stored hashed password
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: "Invalid password" });
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: "Error",
      error: error.message,
    });
  }
}

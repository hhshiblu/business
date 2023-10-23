import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import prisma from '../../../../../../prisma/prisma';






export async function GET(req, res) {
  try {
    // Use Prisma to query all users
      // const users = await prisma.users.findMany({});
    
    return NextResponse.json({
      message: "All users",
      // users: users, // Include the users in the response
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: "Error",
      error: error.message,
    });
  }
}


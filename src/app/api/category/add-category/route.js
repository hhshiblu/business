import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";
import slugify from "slugify";
import shortid from "shortid";

export async function POST(req, res) {
  const reqBody = await req.json();

  const categoryObj = {
    name: reqBody.name,
    slug: `${slugify(reqBody.name)}-${shortid.generate()}`,
    v: 0,
    createdAt: new Date(),
  };

  if (req.file) {
    categoryObj.avatar = req.file.filename;
  }

  if (reqBody.parentId) {
    categoryObj.parentId = reqBody.parentId; 
  }

  try {
    const category = await prisma.categories.create({
      data: categoryObj,
    });

    return NextResponse.json({
      success: true,
      category,
    });
  } catch (error) {
    return NextResponse.json({
      status: "Error",
      error: error.message,
    });
  }
}

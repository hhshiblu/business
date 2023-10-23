import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function DELETE(req, res) {
  try {
    const reqBody = await req.json();
    const { ids } = reqBody;
    const deletedCategories = [];
      for (let i = 0; i < ids.length; i++) {
       
      const deleteCategory = await prisma.categories.delete({
        where: {
          id: ids[i]._id,
        },
      });
      deletedCategories.push(deleteCategory);
    }

    if (deletedCategories.length === ids.length) {
      return NextResponse.json({
        success: true,
        message: "Categories removed",
      });
    } else {
      return NextResponse.json({
        message: "Something went wrong",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: "error",
      error: error.message,
    });
  }
}

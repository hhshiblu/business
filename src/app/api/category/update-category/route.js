import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function PUT(req, res) {
  try {
    const reqBody = await req.json();
    const { _id, name, parentId } = reqBody;
    const updatedCategories = [];
    if (name instanceof Array) {
      for (let i = 0; i < name.length; i++) {
        const category = {
          name: name[i],
        };
        if (parentId[i] !== "") {
          category.parentId = parentId[i];
        }

        const updatedCategory = await prisma.categories.update({
          where: {
            id: _id[i],
          },
          data: category,
        });
        updatedCategories.push(updatedCategory);
      }
      return NextResponse.json({ updateCategories: updatedCategories });
    } else {
      const category = {
        name,
      };
      if (parentId !== "") {
        category.parentId = parentId;
      }
      const updatedCategory = await prisma.categories.update({
        where: {
          id:_id,
        },
        data: category,
      });

      return NextResponse.json({ updatedCategory });
    }
  } catch (error) {
    return NextResponse.json({
      status: "error",
      error: error.message,
    });
  }
}

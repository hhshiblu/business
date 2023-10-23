import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  for (let cate of category) {
    
    categoryList.push({
      id: cate.id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
      children: createCategories(categories, cate.id),
    });
  }

  return categoryList;
}

export async function GET(req, res) {
  try {
    const categories = await prisma.categories.findMany({});

    if (categories) {
      const categoryList = createCategories(categories);
      return NextResponse.json({
        success: true,
        categoryList,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: "error",
      error: error.message,
    });
  }
}

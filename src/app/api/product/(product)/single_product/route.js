import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function POST(req, res) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const description = formData.get("description");
    const category = formData.get("category");
    const tags = formData.get("tags");
    const subCategory = formData.get("subCategory");
    const originalPrice = parseInt(formData.get("originalPrice"));
    const discountPrice = parseInt(formData.get("discountPrice"));
    const stock = parseInt(formData.get("stock"));
    const color = formData.getAll("color[]"); // Parse colors as an array
    const size = formData.getAll("size[]");
    const sellerId = formData.get("sellerId");

    const product = await prisma.products.create({
      data: {
        name,
        description,
        category,
        subCategory,
        originalPrice,
        discountPrice,
        stock,
        color,
        size,
        tags,
        sold_out: 0,
        sellerId,
        v: 0,
        createdAt: new Date(),
      },
    });

    return NextResponse.json(
      {
        product,
        success: true,
        message: "Product created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req, res) {
  try {
    const reqBody = await req.json();
    const { id } = reqBody;
    const deleteProduct = await prisma.products.delete({
      where: {
        id: id,
      },
    });
    if (!deleteProduct) {
      return NextResponse.json({
        message: "product is not found",
      });
    }
    return NextResponse.json({
      message: "product delete success",
    });
  } catch (error) {
    return NextResponse.json({
      error: error,
    });
  }
}

export async function UPDATE(req, res) {
  try {
    const reqBody = await req.json();
    const {
      id,
      category,
      color,
      description,
      discountPrice,
      originalPrice,
      name,
      images,
      subcategory,
      stock,
      tag,
      size,
    } = reqBody;

    const updatedProduct = await prisma.products.update({
      where: {
        id: id,
      },
      data: {
        category: category,
        color: color,
        description: description,
        discountPrice: discountPrice,
        originalPrice: originalPrice,
        name: name,
        images: images, // Assuming 'images' is an array field
        subcategory: subcategory,
        stock: stock,
        tag: tag,
        size: size,
      },
    });

    if (!updatedProduct) {
      return NextResponse.json({
        message: "Product is not found",
      });
    }

    return NextResponse.json({
      message: "Product update success",
    });
  } catch (error) {
    return NextResponse.json({
      error: error,
    });
  }
}

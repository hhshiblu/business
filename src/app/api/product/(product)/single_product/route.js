import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const { sellerId, ...productData } = reqBody;

    // Check if the seller exists using Prisma
    const seller = await prisma.sellers.findUnique({
      where: {
        id: sellerId,
      },
    });

    if (!seller) {
      return NextResponse.json({ message: "Shop Id is invalid!" });
    } else {
      //   const files = req.files;
      //   const imageUrls = files.map((file) => `${file.filename}`);

      // Create the product data with image URLs and seller reference
      const product = await prisma.product.create({
        data: {
          ...productData,
          //   images: imageUrls,
          seller: {
            connect: { id: sellerId },
          },
        },
      });

      return NextResponse.json({
        success: true,
        product,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error,
    });
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

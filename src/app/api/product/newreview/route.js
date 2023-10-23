import { NextResponse } from "next/server";

const { default: prisma } = require("../../../../../prisma/prisma");


export async function PUT (req,res){
    try {
        const reqBody = await req.json();
    const { user, rating, comment, productId, orderId } = reqBody;

    // Find the product by productId
    const product = await prisma.products.findUnique({
      where: {
        id: productId,
      },
      include: {
        reviews: true,
      },
    });

        if (!product) {
            return NextResponse.json({
            message:"Product not found",
        })

    }

    const review = {
      user,
      rating,
      comment,
      productId,
    };

    // Check if the user has already reviewed the product
    const existingReview = product.reviews.find(
      (rev) => rev.userId === req.user.id // Adjust this condition based on your Prisma schema
    );

    if (existingReview) {
      // Update the existing review
      await prisma.review.update({
        where: { id: existingReview.id }, // Adjust the condition based on your Prisma schema
        data: {
          rating,
          comment,
          user,
        },
      });
    } else {
      // Create a new review
      await prisma.review.create({
        data: review,
      });

      // Add the new review to the product
      await prisma.product.update({
        where: {
          id: productId,
        },
        data: {
          reviews: {
            connect: {
              id: review.id,
            },
          },
        },
      });
    }

    // Calculate the new average rating
    const reviewRatings = product.reviews.map((rev) => rev.rating);
    const averageRating =
      reviewRatings.reduce((a, b) => a + b, 0) / reviewRatings.length;

    // Update the product's ratings
    await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        ratings: averageRating,
      },
    });

    // Mark the product as reviewed in the order
    await prisma.orders.update({
      where: {
        id: orderId,
      },
      data: {
        cart: {
          update: {
            where: {
              id: productId,
            },
            data: {
              isReviewed: true,
            },
          },
        },
      },
    });

  return NextResponse.json({
      success: true,
      message: "Reviewed successfully!",
    });
  } catch (error) {
        return NextResponse.json({
      message:error.message
  })
  } 
};
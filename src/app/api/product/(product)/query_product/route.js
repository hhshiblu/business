import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const subcategories = ["men", "women", "children", "all"];

    const minshoes = await Promise.all(
      subcategories.map(async (subcategory) => {
        const topRatedProduct = await prisma.products.findMany({
          where: {
            category: "phone",
            subCategory: "i love you",
          },
          orderBy: { sold_out: "asc" },
          take: 1,
        });

        return {
          title: subcategory,
          product: topRatedProduct,
        };
      })
    );
   const maxshoes= await prisma.products.findMany({
          where: {
            category: "phone",
          },
          orderBy: { sold_out: "asc" },
          take: 13,
        });

        const shoesProduct={
          maxshoes,
          minshoes
        }
    //  fashions
    const fashionproduct = await Promise.all(
      subcategories.map(async (subcategory) => {
        const productInfo = await prisma.products.findMany({
          where: {
            category: "fashion",
            subCategory: `${subcategory}'s fashion`,
          },
          orderBy: { sold_out: "asc" },
          take: 1,
        });
        if (!productInfo) {
          return NextResponse.json({
            message: "product not found",
          });
        }

        return {
          title: subcategory,
          product: productInfo,
        };
      })
    );


    //under products
const underProducts = await prisma.products.findMany({
  where: {

    OR: [
      {
        discountPrice: {
          lte: 600,
        },
      },
      {
        originalPrice: {
          lte: 600,
        },
      },
    ],
  },
  orderBy: {
    sold_out: "asc",
  },
  take: 25,
});



    return NextResponse.json({
      shoesProduct,
      //   fashionproduct,
      underProducts,
    });
  } catch (error) {
    return NextResponse.json({
      error: error,
      message: error,
    });
  }
}

import { NextResponse } from "next/server";

export async function POST(req, res) {
 try {
   const reqBody = await req.body;
   const { cart, shippingAddress, user, paymentInfo } = reqBody;

   const cartWithProductDetails = await Promise.all(
     cart.map(async (item) => {
       const { product, quantity } = item;
       const productInfo = await prisma.products.findUnique({
         where: {
           id: product,
         },
       });

       return {
         productInfo,
         quantity,
         sellerId: productInfo.sellerId,
         color: item.color,
         size: item.size,
       };
     })
   );

   // Group cart items by sellerId
   const shopItemsMap = new Map();

   for (const item of cartWithProductDetails) {
     const sellerId = item.sellerId;
     if (!shopItemsMap.has(sellerId)) {
       shopItemsMap.set(sellerId, []);
     }
     shopItemsMap.get(sellerId).push(item);
   }

   // Create an order for each shop
   const orders = [];
   const sellerTotalPrices = {};

   for (const [sellerId, items] of shopItemsMap) {
     const shopTotalPrice = items.reduce(
       (total, item) => total + item.productInfo.discountPrice * item.quantity,
       0
     );

     if (!sellerTotalPrices[sellerId]) {
       sellerTotalPrices[sellerId] = 0;
     }
     sellerTotalPrices[sellerId] += shopTotalPrice;

     const order = await prisma.order.create({
       data: {
         cart: {
           create: items.map((item) => ({
             productInfoId: item.productInfo.id,
             quantity: item.quantity,
             color: item.color,
             size: item.size,
           })),
         },
         shippingAddress,
         user,
         totalPrice: sellerTotalPrices[sellerId],
         shopTotalPrice,
         paymentInfo,
         sellerId,
       },
     });

     orders.push(order);
   }

  return NextResponse.json({
     success: true,
     orders,
     sellerTotalPrices,
   });
 } catch (error) {
   return NextResponse.json({
     message: error.message,
   });
 }
}

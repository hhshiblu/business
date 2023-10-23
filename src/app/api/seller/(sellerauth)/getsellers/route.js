import { NextResponse } from "next/server";


 export async function GET(req,res){
     try {
         const sellers = await prisma.shops.findMany({});
         return NextResponse.json({
             success: true,
             sellers
         })
    }
    catch(err){
         return NextResponse.json({
            message:err.message
        })
    }
 }
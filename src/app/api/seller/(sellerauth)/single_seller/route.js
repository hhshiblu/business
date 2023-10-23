import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function DELETE(req, res) {
  try {
    const reqBody = await req.json();
    const { id } = reqBody;
    const seller = await prisma.shops.delete({
        where:{
            id:id
        }
    });

    if (!seller) {
        return NextResponse.json({ message: "Seller is not available with this id" })
      
    }
return NextResponse.json({
      success: true,
      message: "Seller deleted successfully!",
    });
  } catch (error) {
    return NextResponse.json({
     
      message: error.message,
    });
  }
}


export async function PUT(req, res) {
  try {
    const reqBody = await req.json();
    const { id, name, address, phoneNumber, zipCode, email, description } =
      reqBody;

    const seller = await prisma.shops.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        address: address,
        phoneNumber: phoneNumber,
        zipCode: zipCode,
        email: email,
        description: description,
      },
    });

    if (!seller) {
      return NextResponse.json({
        message: "Seller is not available with this id",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Seller updated successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
    });
  }
}




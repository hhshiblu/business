import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";
import bcrypt from "bcryptjs"

export async function POST(req, res) {
  try {

    const formData = await req.formData();
    const name = formData.get("name");
     const email = formData.get("email"); 
   const phoneNumber = parseInt(formData.get("phoneNumber"));
    const password = formData.get("password");

    if (!name || !email || !password || !phoneNumber) {
      return NextResponse.json({
        message:"all field are require"
      })

    }
    const hashPassword= await bcrypt.hash(password,10)

       const UserExit = await prisma.users.findFirst({
  where: {
    email,
  },
});

         if (UserExit){
 return NextResponse.json({
      message: "user all ready exit",
  
    });
         }
         else{
          const newUser = await prisma.users.create({
            data: {
              name,
              email,
              phoneNumber,
              password: hashPassword,
              v: 0,
              createdAt: new Date(),
              role: "user",
            },
          });

           console.log("User created:", newUser);
           return NextResponse.json({
           message:"user create  successfully",
  
    });
         }
   
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: "Error",
      error: error.message,
    });
  }
}
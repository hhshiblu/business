// import { NextResponse } from "next/server";

//  export const sendToken = (user, statusCode, res) => {
//   const token = user.getJwtToken();

//   const cookieOptions = {
//     expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
//     httpOnly: true,
//     secure: true,
//     sameSite: "none",
//   };

//   const cookie = new NextResponse().cookie("token", token, cookieOptions);

//   cookie.status(statusCode).json({
//     success: true,
//     user,
//     token,
//   });

//   return cookie;
// };

import { PrismaClient } from "@prisma/client";
import { cache } from "react";
import "server-only";

class PrismaSingleTon{
    static prisma:PrismaClient;
    
}
let prisma = PrismaSingleTon.prisma;
if(!prisma){
    PrismaSingleTon.prisma = new PrismaClient();
    prisma = PrismaSingleTon.prisma;
}
export default prisma;
import prisma from "@/services/singleton_prisma";

export default async function ValidateRegisterStart(email:string,password:string) {
    let result : boolean = false;
    if(email && password){
        const user = await prisma.user.findUnique({
            where:{
                email:email
            }
        });
        if(!user){
            result = true;
        }
    }
    return result;
}
import prisma from "@/services/singleton_prisma";

export default async function ValidateLogin(email: string, password: string) {
    let result: boolean = false;
    let user = null;
    if (email && password) {
        user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        result = user?.password === password;
    }
    return { result, user };
}
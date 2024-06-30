"use server";

import prisma from "@/services/singleton_prisma";


export default async function SearchUsersServer(value: string) {
    if(value.length == 0){
        return await prisma.user.findMany({});
    }
    return await prisma.user.findMany({
        where: {
            OR: [
                {
                    email: {
                        startsWith: value
                    }
                }, {
                    firstName: {
                        startsWith: value
                    }
                }, {
                    lastName: {
                        startsWith: value
                    }
                }, {
                    telephone: {
                        startsWith: value
                    }
                }

            ]
        }
    });

}
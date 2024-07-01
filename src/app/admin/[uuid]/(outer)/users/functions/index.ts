import { User } from "@prisma/client";


export function SearchUser(users: User[], keyward: string) {

    return users.filter(user => user.firstName.includes(keyward)
        || user.lastName.includes(keyward)
        || user.email.includes(keyward)
        || user.telephone?.includes(keyward)
        || user.address?.includes(keyward)
    )

}
import { Users } from "@/shared";
import axiosIns from "@/shared/api/axiosInstance";

export const Users_List: Users = axiosIns("/users")
    .then(res => {
        const users: Users = res.data;
    })
    .catch((error) => {
        throw new error
    });

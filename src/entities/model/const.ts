import { Users } from "@/shared";
import axiosIns from "@/shared/api/axiosInstance";

export const Users_List = (): Promise<Users> => {
    return axiosIns("/users")
        .then(res => {
            return res.data;
        })
        .catch(error => {
            throw error;
        });
};

import { useQuery } from "@tanstack/react-query"
import { getUserById } from "../api/getUserById"
import { User } from "../../users/types"

export const useUserId = (id: number | string) => {
    return useQuery<User>({
        queryKey: ['user', id],
        queryFn: () => getUserById(id),
    })
}
import { useQuery } from '@tanstack/react-query';
import type { User } from '../types';
import { getUsers } from '../api/user';

export const useUsers = () => {
    return useQuery<User[]>({
        queryKey: ['users'],
        queryFn: getUsers,
    });
};
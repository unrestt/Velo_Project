import { User } from "../../users/types";

interface Props {
    user?: User;
}

export const ProfileHeader = ({ user }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            {/* Backdrop Area */}
            <div className="w-full h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-t-3xl" />
            
            {/* Avatar & Basic Info */}
            <div className="flex flex-col items-center -mt-16 px-6 pb-6 w-full">
                <div className="relative group">
                    <img 
                        src={user?.avatar || 'https://via.placeholder.com/150'} 
                        alt={user?.username} 
                        className="w-32 h-32 rounded-full object-cover ring-4 ring-white dark:ring-neutral-900 shadow-xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white dark:border-neutral-900 rounded-full shadow-sm" />
                </div>
                
                <div className="mt-4 flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-neutral-100 tracking-tight">
                        {user?.username || 'Użytkownik'}
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-neutral-400 font-medium mt-1">
                        {user?.email}
                    </p>
                </div>
            </div>
        </div>
    );
};

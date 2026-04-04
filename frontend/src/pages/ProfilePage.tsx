import { useParams, useNavigate } from "react-router-dom";
import { useUserId } from "../features/profile/hooks/useUserId";
import { ProfileHeader } from "../features/profile/components/ProfileHeader";
import { ProfileBio } from "../features/profile/components/ProfileBio";
import { ProfileInfo } from "../features/profile/components/ProfileInfo";

const ProfilePage = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    
    const { data: user, isLoading, isError } = useUserId(userId || '');

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-full w-full bg-white dark:bg-[#0c0c0c] transition-colors duration-300">
                <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-400 font-medium animate-pulse">Ładowanie profilu...</p>
            </div>
        );
    }

    if (isError || !user) {
        return (
            <div className="flex flex-col items-center justify-center h-full w-full bg-white dark:bg-[#0c0c0c] text-center px-4">
                <div className="text-red-500 mb-4 text-5xl">⚠️</div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">Nie udało się załadować profilu</h2>
                <button 
                    onClick={() => navigate(-1)}
                    className="mt-6 px-6 py-2 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 rounded-xl hover:bg-gray-200 dark:hover:bg-neutral-700 transition-all font-semibold"
                >
                    Wróć wstecz
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col flex-1 h-full bg-white dark:bg-[#0c0c0c] transition-colors duration-300 relative overflow-hidden">
            {/* Close Button */}
            <button 
                onClick={() => navigate(-1)}
                className="absolute top-6 right-6 z-50 p-2.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-full shadow-lg border border-gray-100 dark:border-neutral-800 text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:scale-110 active:scale-95 transition-all duration-200 group"
                aria-label="Zamknij profil"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-0 group-hover:rotate-90 transition-transform duration-300">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <div className="flex flex-col w-full max-w-2xl mx-auto h-full overflow-y-auto scrollbar-hide py-8 px-4 md:px-0">
                <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Header Section */}
                    <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-black/50 overflow-hidden border border-transparent dark:border-neutral-800/50 transition-colors">
                        <ProfileHeader user={user} />
                    </div>

                    {/* Bio Section */}
                    <ProfileBio bio={user.bio} />

                    {/* Detailed Info */}
                    <ProfileInfo user={user} />
                    
                    {/* Extra spacing at bottom */}
                    <div className="h-8 shrink-0" />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
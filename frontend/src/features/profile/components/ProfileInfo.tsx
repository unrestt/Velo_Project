import { User } from "../../users/types";

interface Props {
    user?: User;
}

export const ProfileInfo = ({ user }: Props) => {
    return (
        <div className="flex flex-col gap-4 w-full px-8 py-6 bg-white/50 dark:bg-neutral-900/30 rounded-2xl border border-transparent dark:border-neutral-800/50 shadow-sm transition-all duration-300">
            <h3 className="text-sm font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-widest">
                Informacje
            </h3>

            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 dark:text-neutral-500 font-medium">Email</span>
                        <span className="text-gray-800 dark:text-neutral-200 font-semibold">{user?.email}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple-50 dark:bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 dark:text-neutral-500 font-medium">Username</span>
                        <span className="text-gray-800 dark:text-neutral-200 font-semibold">@{user?.username}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 dark:text-neutral-500 font-medium">Status</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            Weryfikowany
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

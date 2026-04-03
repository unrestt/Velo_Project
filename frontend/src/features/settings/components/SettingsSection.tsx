import { ReactNode } from 'react';

interface SettingsSectionProps {
    title: string;
    description: string;
    children: ReactNode;
    icon?: ReactNode;
}

export const SettingsSection = ({ title, description, children, icon }: SettingsSectionProps) => {
    return (
        <div className="bg-white dark:bg-[#1f1f22] border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] mb-8">
            <div className="flex items-center gap-4 mb-6">
                {icon && (
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-800/80 rounded-2xl text-blue-600 dark:text-blue-400 border border-zinc-100 dark:border-zinc-800">
                        {icon}
                    </div>
                )}
                <div>
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">{title}</h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{description}</p>
                </div>
            </div>
            <div className="pt-2">
                {children}
            </div>
        </div>
    );
};



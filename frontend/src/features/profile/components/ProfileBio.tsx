interface Props {
    bio?: string;
}

export const ProfileBio = ({ bio }: Props) => {
    return (
        <div className="flex flex-col gap-3 w-full px-8 py-6 bg-gray-50/50 dark:bg-neutral-800/20 rounded-2xl border border-transparent dark:border-neutral-800/50">
            <h3 className="text-sm font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-widest">
                O mnie
            </h3>
            <p className="text-gray-700 dark:text-neutral-300 leading-relaxed font-medium">
                {bio || 'Ten użytkownik nie dodał jeszcze opisu.'}
            </p>
        </div>
    );
};

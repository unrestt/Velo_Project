interface Props {
    value: string;
    onChange: (value: string) => void;
    maxLength?: number;
}

export const BioChangeForm = ({ value, onChange, maxLength = 150 }: Props) => {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <label htmlFor="bio" className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    O mnie (Bio)
                </label>
                <span className={`text-xs font-medium ${value.length >= maxLength ? 'text-rose-500' : 'text-zinc-400 dark:text-zinc-500'}`}>
                    {value.length} / {maxLength}
                </span>
            </div>
            <div className="relative">
                <textarea
                    id="bio"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    maxLength={maxLength}
                    rows={4}
                    className="w-full px-5 py-3.5 bg-zinc-50/50 dark:bg-[#18181A] border border-zinc-200 dark:border-zinc-800 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 dark:focus:ring-blue-500/20 dark:text-white transition-all font-medium placeholder:text-zinc-400 dark:placeholder:text-zinc-600 outline-none resize-none"
                    placeholder="Napisz coś o sobie... Twoja biografia będzie widoczna dla innych użytkowników."
                />
                {/* Subtle shadow overlay for text when scrolling (optional design choice) */}
                <div className="absolute inset-px rounded-2xl pointer-events-none ring-1 ring-inset ring-zinc-950/5 dark:ring-white/5" />
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 italic">
                Krótki opis Twojej osoby, zainteresowań lub tego, co chcesz o sobie powiedzieć.
            </p>
        </div>
    );
};

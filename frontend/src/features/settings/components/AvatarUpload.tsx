// import { useState, useRef, ChangeEvent } from 'react';
// import { useUploadAvatar } from '../hooks/useUploadAvatar';
// import { Camera, Loader2, Image as ImageIcon } from 'lucide-react';
// import { SettingsSection } from './SettingsSection';

// export const AvatarUpload = ({ currentAvatarUrl }: { currentAvatarUrl?: string }) => {
//     const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//     const [selectedFile, setSelectedFile] = useState<File | null>(null);
//     const fileInputRef = useRef<HTMLInputElement>(null);

//     const { mutate: uploadAvatar, isPending } = useUploadAvatar();

//     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             setSelectedFile(file);
//             const url = URL.createObjectURL(file);
//             setPreviewUrl(url);
//         }
//     };

//     const handleUploadClick = () => {
//         fileInputRef.current?.click();
//     };

//     const handleSave = () => {
//         if (selectedFile) {
//             uploadAvatar(selectedFile, {
//                 onSuccess: () => {
//                     setSelectedFile(null);
//                 }
//             });
//         }
//     };

//     const displayUrl = previewUrl || currentAvatarUrl;

//     return (
//         <SettingsSection
//             title="Zdjęcie Profilowe"
//             description="Dodaj swoje zdjęcie, aby spersonalizować swoje konto."
//             icon={<ImageIcon className="w-6 h-6 stroke-[1.5]" />}
//         >
//             <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mt-2">
//                 <div className="relative group">
//                     <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#18181A] shadow-sm flex items-center justify-center transition-all group-hover:border-blue-300 dark:group-hover:border-blue-500/50">
//                         {displayUrl ? (
//                             <img src={displayUrl} alt="Avatar" className="w-full h-full object-cover" />
//                         ) : (
//                             <Camera className="w-10 h-10 text-zinc-300 dark:text-zinc-600 cursor-pointer" />
//                         )}
//                     </div>

//                     <button
//                         onClick={handleUploadClick}
//                         disabled={isPending}
//                         className="absolute -bottom-3 -right-3 p-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_12px_rgb(37,99,235,0.3)] transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
//                         title="Wybierz zdjęcie"
//                     >
//                         <Camera className="w-5 h-5" />
//                     </button>
//                 </div>

//                 <div className="flex-1 text-center sm:text-left flex flex-col justify-center py-2">
//                     <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
//                         Wgraj nowy avatar
//                     </h3>
//                     <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5 max-w-sm leading-relaxed">
//                         Wybierz plik w formacie JPG lub PNG. Dla najlepszego efektu zalecamy obraz o proporcjach 1:1, max 5MB.
//                     </p>

//                     <input
//                         type="file"
//                         ref={fileInputRef}
//                         onChange={handleFileChange}
//                         accept="image/jpeg, image/png, image/webp"
//                         className="hidden"
//                     />

//                     {selectedFile && (
//                         <div className="flex items-center justify-center sm:justify-start gap-3">
//                             <button
//                                 onClick={handleSave}
//                                 disabled={isPending}
//                                 className="flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white font-semibold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-sm transition-all active:scale-95"
//                             >
//                                 {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Zapisz zdjęcie'}
//                             </button>
//                             <button
//                                 onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
//                                 disabled={isPending}
//                                 className="px-5 py-2.5 text-red-600 dark:text-red-400 font-medium hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all"
//                             >
//                                 Odrzuć
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </SettingsSection>
//     );
// };

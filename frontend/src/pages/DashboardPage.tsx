export const DashboardPage = () => {
  return (
    <div className="w-full flex-1 bg-white dark:bg-slate-900 shadow-lg shadow-gray-200/50 dark:shadow-black/20 rounded-3xl flex items-center justify-center p-8 transition-colors duration-300">
      <div className="text-center text-gray-500 dark:text-slate-400">
        <h2 className="text-2xl font-light mb-2 dark:text-slate-200">Witaj w komunikatorze</h2>
        <p>Wybierz użytkownika z listy po lewej, aby rozpocząć czat.</p>
      </div>
    </div>
  );
};
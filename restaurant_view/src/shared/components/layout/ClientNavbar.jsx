export const ClientNavbar = () => {
    return (
        <nav className="bg-white shadow-sm border-b border-orange-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src="/src/assets/img/hero.png" alt="Logo" className="h-10 w-auto" />
                    <span className="font-black text-[#e11d48] text-xl">KFC Kinal</span>
                </div>
                
                <div className="flex items-center gap-5 font-bold text-sm text-gray-700">
                    <span className="hover:text-orange-500 cursor-pointer transition-colors">Menú</span>
                    <span className="hover:text-orange-500 cursor-pointer transition-colors">Mis Pedidos</span>
                    <div className="w-10 h-10 rounded-full bg-[#facc15] flex items-center justify-center text-red-700 border-2 border-white shadow-sm cursor-pointer">
                        BO
                    </div>
                </div>
            </div>
        </nav>
    );
};
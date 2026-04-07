import { useState } from 'react';

export const ClientLoginForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="space-y-6">
            {/* Selector de Pestañas */}
            <div className="flex border-b border-orange-100">
                <button 
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-2 text-sm font-bold transition-all ${isLogin ? 'text-[#e11d48] border-b-2 border-[#e11d48]' : 'text-gray-400 hover:text-orange-400'}`}
                >
                    INICIAR SESIÓN
                </button>
                <button 
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-2 text-sm font-bold transition-all ${!isLogin ? 'text-[#e11d48] border-b-2 border-[#e11d48]' : 'text-gray-400 hover:text-orange-400'}`}
                >
                    REGISTRARSE
                </button>
            </div>

            <form className="space-y-4">
                {!isLogin && (
                    <div>
                        <label className="block text-xs font-bold text-[#a16207] uppercase mb-1">Nombre Completo</label>
                        <input type="text" className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#fb923c] focus:ring-2 focus:ring-orange-100 transition-all" placeholder="Tu nombre" />
                    </div>
                )}
                
                <div>
                    <label className="block text-xs font-bold text-[#a16207] uppercase mb-1">Correo Electrónico</label>
                    <input type="email" className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#fb923c] focus:ring-2 focus:ring-orange-100 transition-all" placeholder="cliente@kinalfc.com" />
                </div>

                <div>
                    <label className="block text-xs font-bold text-[#a16207] uppercase mb-1">Contraseña</label>
                    <input type="password" className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#fb923c] focus:ring-2 focus:ring-orange-100 transition-all" placeholder="********" />
                </div>

                {!isLogin && (
                    <div>
                        <label className="block text-xs font-bold text-[#a16207] uppercase mb-1">Confirmar Contraseña</label>
                        <input type="password" className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm outline-none focus:border-[#fb923c] focus:ring-2 focus:ring-orange-100 transition-all" placeholder="********" />
                    </div>
                )}

                <button className="w-full bg-[#e11d48] hover:bg-red-700 text-white font-black py-3 rounded-xl text-sm shadow-[0_8px_15px_-3px_rgba(249,115,22,0.3)] transition-all active:scale-95 mt-4">
                    {isLogin ? 'INGRESAR A COMER' : 'CREAR MI CUENTA'}
                </button>
            </form>
        </div>
    );
};
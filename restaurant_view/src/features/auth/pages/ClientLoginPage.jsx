import { ClientLoginForm } from "../components/ClientLoginForm";

export const ClientLoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#7f1d1d] p-4 transition-all duration-300">
            <div className="bg-[#fffaf2] w-full max-w-[400px] rounded-3xl shadow-2xl p-8 border border-orange-100">
                
                {/* Logo con el borde amarillo del pollo */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-[#facc15] shadow-md overflow-hidden">
                        <img 
                            src="/src/assets/img/hero.png" 
                            alt="Logo KFC" 
                            className="w-14 h-14 object-contain"
                        />
                    </div>
                </div>

                <div className="text-center mb-6">
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Kinal Fried Chicken</h1>
                    <p className="text-[10px] font-bold text-[#dc2626] uppercase tracking-[0.2em] mt-1">¡El mejor sabor de Guate!</p>
                </div>

                <ClientLoginForm />

                <p className="mt-8 text-center text-[11px] text-gray-400">
                    Al continuar, aceptas nuestros <span className="text-[#a16207] font-bold cursor-pointer underline">Términos y Condiciones</span>
                </p>
            </div>
        </div>
    );
};
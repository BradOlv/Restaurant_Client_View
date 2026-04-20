import { useNavigate, useLocation } from "react-router-dom";
// Importar el logo correctamente desde assets
import LOGO_KINAL from "../../../assets/img/logofriedchicken.png";

export const ClientNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className="bg-[#fdfaf5] border-b-2 border-[#ff6b0b] sticky top-0 z-50 h-[110px] flex items-center shadow-sm">
            <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
                
                {/* Logo más grande y Navbar expandido */}
                <div className="flex items-center cursor-pointer transition-transform hover:scale-105" onClick={() => navigate('/portal')}>
                    <img src={LOGO_KINAL} alt="Logo" className="h-24 w-auto object-contain" />
                </div>
                
                {/* Enlaces con coherencia de color */}
                <div className="hidden md:flex items-center gap-8">
                    <span 
                        onClick={() => navigate('/portal')} 
                        className={`cursor-pointer font-black text-xs tracking-widest transition-all ${location.pathname === '/portal' ? 'text-[#ff6b0b] border-b-2 border-[#ff6b0b]' : 'text-gray-500 hover:text-[#ff6b0b]'}`}
                    >
                        INICIO
                    </span>
                    <span 
                        onClick={() => navigate('/portal/menu')} 
                        className={`cursor-pointer font-black text-xs tracking-widest transition-all ${location.pathname === '/portal/menu' ? 'text-[#ff6b0b] border-b-2 border-[#ff6b0b]' : 'text-gray-500 hover:text-[#ff6b0b]'}`}
                    >
                        MENÚ
                    </span>
                    <span className="text-gray-500 font-black text-xs tracking-widest hover:text-[#ff6b0b] cursor-pointer">
                        CUPONES
                    </span>
                </div>

                {/* Perfil Bradley */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#facc15] flex items-center justify-center text-red-900 font-black shadow-md border-2 border-white">
                        BO
                    </div>
                </div>
            </div>
        </nav>
    );
};
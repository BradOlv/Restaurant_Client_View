import { useNavigate, useLocation } from "react-router-dom";
import LOGO_KINAL from "../../../assets/img/logofriedchicken.png";

export const ClientNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Función para no repetir código de estilos
    const getLinkStyle = (path) => {
        const isActive = location.pathname === path;
        return `cursor-pointer font-black text-lg tracking-widest transition-all pb-2 border-b-4 ${
            isActive 
            ? 'text-[#ff6b0b] border-[#ff6b0b]' 
            : 'text-gray-500 border-transparent hover:text-[#ff6b0b]'
        }`;
    };

    return (
        <nav className="bg-[#fdfaf5] border-b-2 border-[#ff6b0b] sticky top-0 z-50 h-[120px] flex items-center shadow-sm">
            <div className="max-w-7xl mx-auto px-8 w-full flex items-center justify-between">
                
                {/* Logo */}
                <div className="flex items-center cursor-pointer transition-transform hover:scale-105" onClick={() => navigate('/portal')}>
                    <img src={LOGO_KINAL} alt="Logo" className="h-28 w-auto object-contain" />
                </div>
                
                {/* Enlaces de Navegación Unificados */}
                <div className="hidden md:flex items-center gap-12">
                    <span 
                        onClick={() => navigate('/portal')} 
                        className={getLinkStyle('/portal')}
                    >
                        INICIO
                    </span>

                    <span 
                        onClick={() => navigate('/portal/menu')} 
                        className={getLinkStyle('/portal/menu')}
                    >
                        MENÚ
                    </span>

                    <span 
                        onClick={() => navigate('/portal/cupones')} 
                        className={getLinkStyle('/portal/cupones')}
                    >
                        CUPONES
                    </span>
                </div>

                {/* Avatar de Usuario */}
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#facc15] flex items-center justify-center text-red-900 font-black shadow-md border-2 border-white text-xl cursor-pointer hover:scale-110 transition-transform">
                        BO
                    </div>
                </div>
            </div>
        </nav>
    );
};
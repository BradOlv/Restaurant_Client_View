import { useState, useEffect } from "react";
import { ClientContainer } from "../../shared/components/layout/ClientContainer";

export const ClientPortalPage = () => {
    // 1. LÓGICA DEL CARRUSEL
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "ENSALADA DE CAMARONES",
            subtitle: "¡NUEVO TAZÓN DE TEMPORADA!",
            bgColor: "bg-[#e11d48]", // Rojo 
            textColor: "text-white"
        },
        {
            id: 2,
            title: "MEGA COMBO KINAL",
            subtitle: "12 PIEZAS + PAPAS + GASEOSA",
            bgColor: "bg-[#fb923c]", // Naranja
            textColor: "text-white"
        },
        {
            id: 3,
            title: "POSTRES DE LA CASA",
            subtitle: "HELADOS Y PASTELES",
            bgColor: "bg-[#facc15]", // Amarillo
            textColor: "text-red-900"
        }
    ];

    // Efecto para que el carrusel cambie cada 4 segundos automáticamente
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);


    // 2. DATOS DEL MENÚ (GRID TIPO BENTO)
    const menuCategories = [
        { id: 1, title: "CAMARONES KINAL", span: "md:col-span-2", bg: "bg-[#facc15]", text: "text-red-900" },
        { id: 2, title: "KINALITOS Y ALITAS", span: "md:col-span-1", bg: "bg-[#fb923c]", text: "text-white" },
        { id: 3, title: "POLLO TRADICIONAL", span: "md:col-span-1", bg: "bg-[#e11d48]", text: "text-white" },
        { id: 4, title: "PIZZAS", span: "md:col-span-1", bg: "bg-[#fb923c]", text: "text-white" },
        { id: 5, title: "ENSALADAS Y DESAYUNOS", span: "md:col-span-1", bg: "bg-[#facc15]", text: "text-red-900" },
    ];

    return (
        <ClientContainer>
            <div className="space-y-12 pb-12">
                
                {/* --- SECCIÓN 1: HERO CARRUSEL --- */}
                <div className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
                    {slides.map((slide, index) => (
                        <div 
                            key={slide.id}
                            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex flex-col justify-center items-center text-center p-6
                                ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
                                ${slide.bgColor}
                                bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]
                            `}
                        >
                            <h2 className={`text-4xl md:text-6xl font-black italic tracking-tighter drop-shadow-lg ${slide.textColor}`}>
                                {slide.title}
                            </h2>
                            <p className={`mt-4 text-lg md:text-2xl font-bold tracking-widest ${slide.textColor}`}>
                                {slide.subtitle}
                            </p>
                            
                            {/* Placeholder de imagen centrada */}
                            <div className="mt-6 w-48 h-48 md:w-64 md:h-64 bg-white/20 rounded-full border-4 border-dashed border-white/50 flex items-center justify-center backdrop-blur-sm">
                                <span className={`${slide.textColor} font-bold opacity-80`}>[Imagen del Plato]</span>
                            </div>
                        </div>
                    ))}

                    {/* Controles manuales (Puntos) */}
                    <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-3 z-20">
                        {slides.map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 shadow-md ${index === currentSlide ? "bg-white scale-125 w-8" : "bg-white/50 hover:bg-white"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* --- SECCIÓN 2: BARRA FLOTANTE (ESTILO CAMPERO) --- */}
                <div className="max-w-4xl mx-auto -mt-20 relative z-30">
                    <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between border border-gray-100 gap-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-gray-200">
                                <span className="text-xl">🍗</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">¡Bienvenido al portal, Bradley!</h3>
                                <p className="text-xs text-gray-500 font-medium">Tienes <span className="text-[#e11d48] font-bold">150 KinalPuntos</span></p>
                            </div>
                        </div>
                        <div className="flex w-full md:w-auto gap-3">
                            <button className="flex-1 md:flex-none px-6 py-2.5 bg-[#facc15] hover:bg-yellow-500 text-red-800 font-bold rounded-xl text-sm transition-colors shadow-sm">
                                Ver mi cuenta
                            </button>
                            <button className="flex-1 md:flex-none px-6 py-2.5 bg-[#e11d48] hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-colors shadow-sm">
                                Menú Completo
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- SECCIÓN 3: GRID DE CATEGORÍAS (BENTO UI) --- */}
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {menuCategories.map((cat) => (
                            <div 
                                key={cat.id} 
                                className={`${cat.span} ${cat.bg} rounded-3xl h-48 md:h-64 p-6 relative overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300`}
                            >
'                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10 mix-blend-overlay"></div>
                                
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <h3 className={`text-2xl md:text-3xl font-black w-2/3 leading-tight ${cat.text} group-hover:scale-105 transition-transform origin-top-left`}>
                                        {cat.title}
                                    </h3>
                                    
                                    <div>
                                        <button className={`px-5 py-2 rounded-full font-bold text-sm shadow-sm transition-all hover:scale-105
                                            ${cat.bg === 'bg-[#facc15]' ? 'bg-white text-red-700' : 'bg-[#facc15] text-red-900'}
                                        `}>
                                            Seleccionar
                                        </button>
                                    </div>
                                </div>

                                {/* Placeholder de imagen en la esquina (el plato cortado a la mitad) */}
                                <div className="absolute -bottom-8 -right-8 w-40 h-40 md:w-48 md:h-48 bg-white/20 rounded-full border-8 border-white/10 group-hover:scale-110 transition-transform flex items-center justify-center">
                                     <span className="text-4xl opacity-50">🍽️</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </ClientContainer>
    );
};
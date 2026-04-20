import { Route, Routes, Navigate } from "react-router-dom";
import { ClientLoginPage } from "../../features/auth/pages/ClientLoginPage";
import { ClientPortalPage } from "../layouts/ClientPortalPage"; // Ruta según tu captura
import { MenuView } from "../../features/menu/components/MenuView.jsx"; 
import { ClientContainer } from "../../shared/components/layout/ClientContainer";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* 1. Login independiente */}
            <Route path="/login" element={<ClientLoginPage />} />

            {/* 2. Rutas Protegidas con un solo Navbar (ClientContainer) */}
            <Route path="/portal" element={<ClientContainer />}>
                {/* Al entrar a /portal, carga el index (ClientPortalPage) */}
                <Route index element={<ClientPortalPage />} />
                <Route path="menu" element={<MenuView />} />
            </Route>
            
            {/* 3. Redirecciones */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};
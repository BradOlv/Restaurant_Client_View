import { Route, Routes, Navigate } from "react-router-dom";
import { ClientLoginPage } from "../../features/auth/pages/ClientLoginPage";
import { ClientPortalPage } from "../layouts/ClientPortalPage";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* 1. Ponemos el PORTAL de primero para que tenga prioridad */}
            <Route path="/portal" element={<ClientPortalPage />} />

            {/* 2. El login */}
            <Route path="/login" element={<ClientLoginPage />} />
            
            {/* 3. Redirecciones automáticas */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* 4. Captura cualquier otra ruta loca y mándala al login */}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};
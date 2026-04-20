import { Route, Routes, Navigate } from "react-router-dom";
import { ClientLoginPage } from "../../features/auth/pages/ClientLoginPage";
import { ClientPortalPage } from "../layouts/ClientPortalPage"; // Ruta según tu captura
import { MenuView } from "../../features/menu/components/MenuView.jsx"; 
import { ClientContainer } from "../../shared/components/layout/ClientContainer";
// src/app/router/AppRoutes.jsx
import { CategoryView } from "../../features/menu/components/CategoryView";
import { CouponView } from "../../features/menu/components/CouponView";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<ClientLoginPage />} />

            {/* Rutas con Navbar */}
            <Route path="/portal" element={<ClientContainer />}>
                <Route index element={<ClientPortalPage />} />
                <Route path="menu" element={<MenuView />} />
                {/* Esta es la ruta que "escucha" el clic de la tarjeta */}
                <Route path="menu/:categoryName" element={<CategoryView />} />
                <Route path="cupones" element={<CouponView />} />
          
            </Route>


            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};
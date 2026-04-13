import { ClientNavbar } from "./ClientNavbar";

export const ClientContainer = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#fffaf2] flex flex-col">
            <ClientNavbar />
            <div className="flex-1 overflow-y-auto">
                <main className="max-w-7xl mx-auto w-full p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};
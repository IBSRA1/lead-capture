import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import ProgramDetails from "./pages/ProgramDetails";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-cream">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout>
                <Home />
              </AppLayout>
            }
          />
          <Route
            path="/programs"
            element={
              <AppLayout>
                <Programs />
              </AppLayout>
            }
          />
          <Route
            path="/program/:id"
            element={
              <AppLayout>
                <ProgramDetails />
              </AppLayout>
            }
          />
          <Route
            path="/booking"
            element={
              <AppLayout>
                <Booking />
              </AppLayout>
            }
          />
          <Route
            path="/about"
            element={
              <AppLayout>
                <div className="max-w-7xl mx-auto px-4 py-16">
                  <h1 className="text-4xl font-poppins font-bold">About Us</h1>
                  <p className="mt-4 text-dark-black">
                    This page is coming soon. Check back to learn more about
                    LearnHub!
                  </p>
                </div>
              </AppLayout>
            }
          />
          <Route
            path="/privacy"
            element={
              <AppLayout>
                <div className="max-w-7xl mx-auto px-4 py-16">
                  <h1 className="text-4xl font-poppins font-bold">
                    Privacy Policy
                  </h1>
                  <p className="mt-4 text-dark-black">
                    This page is coming soon. Check back for our privacy
                    policy!
                  </p>
                </div>
              </AppLayout>
            }
          />
          <Route
            path="/terms"
            element={
              <AppLayout>
                <div className="max-w-7xl mx-auto px-4 py-16">
                  <h1 className="text-4xl font-poppins font-bold">
                    Terms of Service
                  </h1>
                  <p className="mt-4 text-dark-black">
                    This page is coming soon. Check back for our terms!
                  </p>
                </div>
              </AppLayout>
            }
          />
          <Route
            path="*"
            element={
              <AppLayout>
                <NotFound />
              </AppLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

import { Routes, Route } from "react-router-dom";
import "./globals.css";
import SignInFrom from "./_auth/forms/SignInFrom";
import SignUpFrom from "./_auth/forms/SignUpFrom";
import { Home } from "./root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes (Visible by all)*/}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInFrom />} />
          <Route path="/sign-up" element={<SignUpFrom />} />
        </Route>

        {/* Private Routes (Only visible by logged in accounts)*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;

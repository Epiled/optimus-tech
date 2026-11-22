import { BrowserRouter, Route, Routes } from "react-router";
import { paths } from "./paths";
import { Home } from "@/pages/Home/Home";
import PublicLayout from "@/layouts/PublicLayout";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import { NotFound } from "@/pages/NotFound/NotFound";
import { Login } from "@/pages/Login";
import { Register } from "@/pages/Register";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.jobs} element={<NotFound />} />
          <Route path={paths.jobDetails(":id")} element={<NotFound />} />
          <Route path={paths.application(":id")} element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path={paths.login} element={<Login />} />
          <Route path={paths.register} element={<Register />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path={paths.dashboard} element={<NotFound />} />
        </Route>

        <Route path={paths.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

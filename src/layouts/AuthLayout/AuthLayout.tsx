import { Outlet, useLocation, useNavigate } from "react-router";

import Menu from "@/components/Menu";
import Wrap from "@/components/Wrap";
import AuthBenefits from "@/components/AuthBenefits";

import styles from "./AuthLayout.module.scss";
import Tab from "@/components/Tab";

const AuthLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isLogin = pathname === "/login";

  return (
    <div className={`${styles.theme} ${styles.authLayout}`}>
      <Wrap>
        <Menu />
      </Wrap>

      <main className={styles.authLayout__main}>
        <section className={styles.authLayout__panel}>
          <AuthBenefits />

          <div className={styles.authLayout__content}>
            <nav className={styles.authLayout__tabs} aria-label="Autenticação">
              <Tab
                label="Entrar"
                state={isLogin ? undefined : "inactive"}
                onClick={() => navigate("/login")}
              />

              <Tab
                label="Cadastrar"
                state={isLogin ? "inactive" : undefined}
                onClick={() => navigate("/cadastro")}
              />
            </nav>

            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AuthLayout;

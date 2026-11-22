import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.scss";
import Button from "@/components/Button";
import Field from "@/components/Inputs/Field";
import Typography from "@/components/Typography";
import Checkbox from "@/components/Inputs/Checkbox";

export const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.login}>
      <form className={styles.login__form}>
        <Field
          label="E-mail"
          iconBefore={{ name: "mail" }}
          placeholder="seu@gmail.com"
        />

        <Field
          label="Senha"
          iconBefore={{ name: "lockKeyhole" }}
          iconAfter={{
            name: showPassword ? "eyeOff" : "eye",
            props: { onClick: () => setShowPassword((prev) => !prev) },
          }}
          type={showPassword ? "text" : "password"}
          placeholder="********"
        />

        <div className={styles.login__check}>
          <Checkbox label="Lembrar de mim" />

          <Typography variant="link" text="Esqueceu sua senha?" as="a" />
        </div>

        <Button text="Entrar" type="submit" />
      </form>

      <span className={styles.login__divide}>ou</span>

      <div className={styles.login__buttons}>
        <Button
          variant="outline"
          text="Entrar com Google"
          iconBefore={{ name: "google", props: { size: 20, strokeWidth: 0 } }}
        />
        <Button
          variant="outline"
          text="Entrar com LinkedIn"
          iconBefore={{ name: "linkedin", props: { size: 20, strokeWidth: 0 } }}
        />
      </div>

      <div className={styles.login__footer}>
        <Typography variant="body-sm" text="Ainda não tem uma conta?" />
        <Typography
          variant="link"
          text="Cadastre-se"
          as="a"
          onClick={() => navigate("/cadastro")}
        />
      </div>
    </div>
  );
};

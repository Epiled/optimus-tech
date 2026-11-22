import { useState } from "react";
import styles from "./Register.module.scss";
import Button from "@/components/Button";
import Field from "@/components/Inputs/Field";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className={styles.register}>
      <form className={styles.register__form}>
        <Field
          label="Nome"
          iconBefore={{ name: "user" }}
          placeholder="Nome Completo"
        />

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

        <Field
          label="Confirmar Senha"
          iconBefore={{ name: "lockKeyhole" }}
          iconAfter={{
            name: showConfirmPassword ? "eyeOff" : "eye",
            props: { onClick: () => setShowConfirmPassword((prev) => !prev) },
          }}
          type={showConfirmPassword ? "text" : "password"}
          placeholder="********"
        />

        <Button text="Cadastrar" type="submit" />
      </form>
    </div>
  );
};

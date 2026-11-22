import { Outlet } from "react-router";
import Menu from "@/components/Menu";
import Wrap from "@/components/Wrap";
import Section from "@/components/Section";
import Form from "@/components/Form";
import "@/styles/Theme.module.scss";

export default function PublicLayout() {
  return (
    <>
      <Wrap>
        <Menu />
        <main>
          <Outlet />
        </main>
      </Wrap>
      <Section
        title={"Acompanhe as nossas oportunidades"}
        text={"Seja o primeiro a saber quando novas Jobs serão abertas!"}
        type={"form"}
        tag={"aside"}
      >
        <Form />
      </Section>
    </>
  );
}

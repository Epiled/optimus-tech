import Card from "@/components/Card";
import Typography from "@/components/Typography";

import styles from "./AuthBenefits.module.scss";

const cardsList = [
  {
    icon: "briefcase",
    title: "Reviews 5 estrelas",
    text: "Busque vagas que combinam com seu perfil e habilidades.",
  },
  {
    icon: "user",
    title: "Candidate-se com facilidade",
    text: "Salve suas informações e candidate-se em poucos cliques.",
  },
  {
    icon: "trendingUp",
    title: "Acompanhe seu progresso",
    text: "Veja o status das suas candidaturas e próximos passos.",
  },
] as const;

export default function AuthBenefits() {
  return (
    <aside className={styles.authBenefits}>
      <div className={styles.authBenefits__heading}>
        <Typography variant="heading-lg" text="Bem-vindo à OptimusTech" />
        <Typography
          variant="lead"
          text="Faça login ou crie sua conta para se candidatar a vagas e acompanhar suas oportunidades"
        />
      </div>
      <div className={styles.authBenefits__cards}>
        {cardsList.map((card) => {
          return (
            <Card
              key={card.icon}
              variant="alternative"
              imagicon={{
                shape: "circle",
                type: "brand",
                icon: { name: card.icon, props: { size: 32 } },
              }}
              title={{
                variant: "title",
                text: card.title,
              }}
              text={{
                text: card.text,
              }}
            />
          );
        })}
      </div>
    </aside>
  );
}

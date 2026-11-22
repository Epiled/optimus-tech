export const paths = {
  home: "/",
  login: "login",
  register: "cadastro",
  dashboard: "dashboard",
  jobs: "vagas",
  jobDetails: (id: string) => `/vagas/${id}`,
  application: (id: string) => `/vagas/application/${id}`,
  notFound: "*",
} as const;

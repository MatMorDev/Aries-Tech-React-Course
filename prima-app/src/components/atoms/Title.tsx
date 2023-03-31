//specifico esternamente l'interfaccia in modo che posso anche esportarla in altri componenti

//definito con più attributi, specifico di quali attributi stiamo parlando, il ? indica che è facoltativo, definisco i tipi dei parametri
interface TitleProps {
  mainTitle: string;
  subTitle?: string;
}

//con l'interfaccia indico cosa voglio in ingresso
//prenditi mainTitle e subTitle da TitlleProps
export const Title = ({ mainTitle, subTitle }: TitleProps) => {
  return (
    <>
      <h2>Title: {mainTitle}</h2>
      <h3>{subTitle}</h3>
    </>
  );
};

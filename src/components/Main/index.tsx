import S from './styles';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Imagem átomo - React Avançado" />
      <S.Title>React avançado</S.Title>
      <S.Description>
        TypeScript, React JS, Next.JS, Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente a uma tela com código"
      />
    </S.Wrapper>
  );
};

export default Main;

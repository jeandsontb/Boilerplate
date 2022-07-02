import S from './styles';

const Main = ({
  title = 'React avançado',
  description = 'TypeScript, React JS, Next.JS, Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Imagem átomo - React Avançado" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente a uma tela com código"
      />
    </S.Wrapper>
  );
};

export default Main;

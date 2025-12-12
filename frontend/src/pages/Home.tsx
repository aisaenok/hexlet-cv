import { Center, Container, Title } from '@mantine/core';
import { Communities } from '@widgets/Communities';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Center h="100vh">
      <Container ta="center">
        <Title>{t('homePage.greetings')} Я - главная страница!</Title>
        <Communities />
      </Container>
    </Center>
  );
}

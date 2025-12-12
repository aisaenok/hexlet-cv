import { Badge, Button, Container, SimpleGrid, Space, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { TelegramLink } from './components/TelegramLink';
import { openTelegramLink } from './helpers/openTelegramInNewTab';

const TG_USERNAME_HEXLET_CAREER_BOT = 'HexletCareerBot';
const TG_USERNAME_HEXLET_RU = 'hexlet_ru';
const TG_USERNAME_HEXLET_JUNIOR_VACANCIES = 'junior_vacancies';

const SIMPLE_GRID_COLS_CONFIG = { base: 1, sm: 2, md: 3 };

export const Communities: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container size="lg" py="xl">
      <Badge
        color="gray"
        fz="xs"
        radius="xl"
        size="lg"
        variant="filled"
        styles={{
          root: {
            textTransform: 'none',
            fontWeight: 'normal',
          },
        }}
      >
        {t('communities.anchor')}
      </Badge>
      <Title order={1}>{t('communities.title')}</Title>
      <Text>{t('communities.description')}</Text>
      <Space h="md" />
      <SimpleGrid cols={SIMPLE_GRID_COLS_CONFIG}>
        <TelegramLink
          text={t('communities.link_bot_description')}
          title={t('communities.link_bot_title')}
          username={TG_USERNAME_HEXLET_CAREER_BOT}
        />
        <TelegramLink
          text={t('communities.link_channel_hexlet_title')}
          title={t('communities.link_channel_hexlet_title')}
          username={TG_USERNAME_HEXLET_RU}
        />
        <TelegramLink
          text={t('communities.link_channel_vacancies_description')}
          title={t('communities.link_channel_vacancies_title')}
          username={TG_USERNAME_HEXLET_JUNIOR_VACANCIES}
        />
      </SimpleGrid>
      <Space h="md" />
      <Button
        fz="xs"
        onClick={() => {
          openTelegramLink('hexletcommunity');
        }}
        radius="md"
        variant="default"
      >
        {t('communities.action_connect_to')}
      </Button>
    </Container>
  );
};

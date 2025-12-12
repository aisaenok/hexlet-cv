import { Paper, Text } from '@mantine/core';
import { openTelegramLink } from '../helpers/openTelegramInNewTab';

const FONT_SIZE_TELEGRAM_TITLE = 'lg';
const FONT_SIZE_TELEGRAM_TEXT = 'xs';
const STYLE_CURSOR_POINTER = { cursor: 'pointer' };

type TProps = {
  text: string;
  title: string;
  username: string;
};

export const TelegramLink: React.FC<TProps> = (props) => {
  const { text, title, username } = props;

  return (
    <Paper
      component="button"
      onClick={() => {
        openTelegramLink(username);
      }}
      p="sm"
      radius="md"
      style={STYLE_CURSOR_POINTER}
      withBorder
    >
      <Text fw={500} fz={FONT_SIZE_TELEGRAM_TITLE} ta="left">
        {title}
      </Text>
      <Text fz={FONT_SIZE_TELEGRAM_TEXT} ta="left">
        {text}
      </Text>
    </Paper>
  );
};

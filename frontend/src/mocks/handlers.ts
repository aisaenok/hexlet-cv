import { handlers as homeHadnlers } from './home';
import { handlers as personalCabinetHadnlers } from './personal-cabinet';

export const handlers = [...homeHadnlers, ...personalCabinetHadnlers];

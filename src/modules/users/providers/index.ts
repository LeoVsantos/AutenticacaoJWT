import { container } from 'tsyringe';

import IhashProvider from './HashProvider/models/IHashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IhashProvider>('HashProvider', BCryptHashProvider);

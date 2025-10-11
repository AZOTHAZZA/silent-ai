import { CoreModule } from '../core/module.js';

export async function generate(command) {
  const value = await CoreModule.process(command);
  return { command, value };
}
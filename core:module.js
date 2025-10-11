import { foundation } from './foundation.js';
import { silenceTheory } from './silence_theory.js';
import { mathematicalSilence } from './mathematical_silence.js';

export const CoreModule = {
  async process(command) {
    const baseValue = foundation.normalize(command);
    const silenceValue = silenceTheory.apply(baseValue);
    const finalValue = mathematicalSilence.integrate(silenceValue);
    return finalValue;
  }
};
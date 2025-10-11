export const silenceTheory = {
  apply(value) {
    // 数理的沈黙層：非線形変換でゼロ・無限・有限の融合を表現
    return Math.tanh(value * 10);
  }
};
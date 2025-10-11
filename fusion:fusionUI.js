export function updateUI(result, outputEl) {
  outputEl.textContent = `コマンド: ${result.command}\n生成値: ${result.value.toFixed(6)}`;
}
export const foundation = {
  normalize(command) {
    // 土台統一層：文字列を0-1に正規化
    let sum = 0;
    for (let i = 0; i < command.length; i++) {
      sum += command.charCodeAt(i);
    }
    return sum / (command.length * 255);
  }
};
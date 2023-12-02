function ipsBetween(start, end) {
  let startIp = start.split('.');
  let endIp = end.split('.');
  let result = 0;
  for (let i = 0; i < 4; i++) {
    result += (endIp[i] - startIp[i]) * Math.pow(256, 3 - i);
  }
  return result;
}

export function parseRules(text) {
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('!'));
}

export function matchUrl(url, rules) {
  return rules.some(rule => {
    if (rule.startsWith('||')) {
      return url.includes(rule.slice(2, -1));
    }
    return false;
  });
}
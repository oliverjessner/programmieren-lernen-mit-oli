const suffixAmPm = dt => dt.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

console.log(suffixAmPm(new Date()));

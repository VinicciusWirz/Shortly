export default function formatNumRndr(n) {
  n = Math.abs(n);
  return n < 10 ? `0${n}` : n.toLocaleString("pt-BR");
}

const truncateString = (codeValue, codeLength) => codeValue.substr(0, codeLength)
export const getSymbols = (codeValue, codeLength) => [
  ...truncateString(codeValue, codeLength).split(''),
  ...new Array(codeLength).fill('')
].slice(0, codeLength)
export const getStyle = (base, custom, focus) => (custom ? [base, custom, focus] : [base, focus])
export const isLastFilledCell = ({ value, index }) => Boolean(value && value.length - 2 === index)

import { useState } from 'react';

export const useCounter = (valorInicial = 0) => {
  const [count, setCount] = useState(valorInicial);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => setCount(count - 1);
  const resetear = () => setCount(valorInicial);

  return { count, incrementar, decrementar, resetear };
};
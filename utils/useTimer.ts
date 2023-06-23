// This Hook allows you to perform an operation after a given time
export const useTimer = () => {
  const quick = (cb: () => void, delay: number = 2000) => {
    setTimeout(() => {
      cb();
    }, delay);
  };

  return { quick };
};

export default useTimer;

export default async (fun, options = {}) => {
  const {
    retries = 3,
    minTimeoutms = 1000,
    maxTimeoutms = 3000,
    factor = 2,
  } = options;

  for (let i = 1; i <= retries; i++) {
    try { 
      return await fun();
    } catch (err) {
      if (i >= retries) {
        throw err;
      }

      // Calculates the minimum Timeout * factor^i, if this exceeds the maxTimeout it will take the maxTimeout
      const timeout = Math.min(minTimeoutms * Math.pow(factor, i - 1), maxTimeoutms);

      await new Promise((resolve) => setTimeout(resolve, timeout));
    }
  }
}
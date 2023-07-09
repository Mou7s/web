function generatePrimes(quota) {
  return new Promise((resolve, reject) => {
    function isPrime(n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
          return false;
        }
      }
      return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }

    resolve(primes);
  });
}

document.querySelector("#generate").addEventListener("click", async () => {
  const quota = document.querySelector("#quota").value;
  const primes = await generatePrimes(quota);
  document.querySelector(
    "#output"
  ).textContent = `Finished generating ${quota} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

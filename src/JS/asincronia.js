function funcionAsincrona(val, callback) {
  console.log(val * 2);
  return callback;
}

funcionAsincrona(
  3,
  funcionAsincrona(5, () => null)
);

async function funcionAsincronaConAsync(val) {
  return new Promise(resolve => setTimeout(() => val * 2, 2000))
}

// funcionAsincronaConAsync(5)
//   .then((res) => console.log(`El valor es ${res}`))
//   .catch((e) => console.error(e))
//   .finally(() => console.log("Finalizado del todo"))

async function main() {
    const r = await funcionAsincronaConAsync(5);
    console.log(r);
}

main()
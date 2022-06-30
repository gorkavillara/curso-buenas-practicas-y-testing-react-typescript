const provinciasDev = [{ nombre: "ALAVA", provinciaId: 1 }];

const localidadesDev = [{ label: "ABECIA", value: 1 }];

export const fetchProvincias = async() =>
  fetch(
    "https://cloud.metacontratas.com/datos_contacto/v1/paises/64/provincias/"
  )
    .then((r) => r.json())
    .then((listadoProvinciasRaw) => listadoProvinciasRaw)
    .catch((e) => console.error(e));

export const fetchLocalidades = async(provinciaId: number) =>
  fetch(
    `https://cloud.metacontratas.com/datos_contacto/v1/paises/64/provincias/${provinciaId}/localidades/`
  )
    .then((r) => r.json())
    .then((listadoLocalidadesRaw) => {
      const newLocalidades = listadoLocalidadesRaw.map((loc: any) => {
        return { label: loc.nombre, value: loc.idLocalidad };
      });
      return newLocalidades;
    })
    .catch((e) => console.error(e));

export const fetchProvinciasDev = async() => {
//   let prov;
//   const prom = new Promise(setTimeout(() => (prov = provinciasDev), 1000));
//   await prom();
  return provinciasDev;
};
export const fetchLocalidadesDev = async(id: number) => {
//   let loc;
//   setTimeout(() => (loc = localidadesDev), 1000);
  return localidadesDev;
};

/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { fetchProvincias, fetchLocalidades } from "./controllers";

const DropDownView = () => {
  const [provincia, setProvincia] = useState<number>(0);
  const [provinciasOptions, setProvinciasOptions] = useState<any[]>([]);
  const [localidad, setLocalidad] = useState<number>(0);
  const [localidadesOptions, setLocalidadesOptions] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const prov = await fetchProvincias();
      setProvinciasOptions(prov);
    };
    load();
  }, []);

  useEffect(() => {
    if (provincia === 0) return;
    // Hacer la llamada
    const load = async () => {
      const loc = await fetchLocalidades(provincia);
      setLocalidadesOptions(loc);
    };
    load();
  }, [provincia]);

  const seleccionaProvincia = (e: any) => setProvincia(e.value);
  const seleccionaLocalidad = (e: any) => setLocalidad(e.value);
  return (
    <div>
      <h1>Dropdowns</h1>
      {provinciasOptions && provinciasOptions.length > 0 ? (
        <Dropdown
          role="provincias-dropdown"
          options={provinciasOptions}
          optionLabel="nombre"
          optionValue="idProvincia"
          value={provincia}
          onChange={seleccionaProvincia}
        />
      ) : (
        <h4>Cargando provincias...</h4>
      )}
      {localidadesOptions && localidadesOptions.length > 0 && (
        <Dropdown
          role="localidades-dropdown"
          options={localidadesOptions}
          value={localidad}
          onChange={seleccionaLocalidad}
        />
      )}
    </div>
  );
};

export default DropDownView;

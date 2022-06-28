import React, { createContext } from "react";

interface IAppContext {
  counterValue?: number;
  setCounterValue?: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext<IAppContext>({});

// export const AdminContext = createContext<any>({})

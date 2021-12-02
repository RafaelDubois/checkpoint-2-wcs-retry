import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();
const ApiContextPvd = ({children}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://apis.wilders.dev/wild-games/games/")
      .then((res) => res.data)
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <ApiContext.Provider value={{ data, setData }}>
      {children}
    </ApiContext.Provider>
  );
};
export default ApiContextPvd;

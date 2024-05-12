import { createContext, useState, useContext } from "react";
const itemContext = createContext();

function useValue() {
  const Value = useContext(itemContext);
  return Value;
}

function CustomItemContext({ children }) {
  const [userLogin, setUserLogin] = useState(false);
  
  return (
    <itemContext.Provider value={{userLogin} }>
      {children}
    </itemContext.Provider>
  );
}

export { itemContext, useValue };
export default CustomItemContext;

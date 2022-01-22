import React, { createContext, useEffect, useState } from "react";

interface HeaderTab {
  header: string,
  setText: (value: string) => void | null
}

const HeaderContext = createContext<HeaderTab | null>({
  header: "Delivery",
  setText: null
})

const HeaderProvider = ({ children }: any) => {
  const [state, setState] = useState(null)

    return (
      <HeaderContext.Provider value={state, setState}>
        {children}
      </HeaderContext.Provider>
    );
};

export { HeaderContext, HeaderProvider };
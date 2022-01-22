import React, { createContext, useEffect, useState } from "react";

interface HeaderTab {
  text: 'Delivery'
}

const toggleType = () => {
  
}

const HeaderContext = createContext<
[HeaderTab, React.Dispatch<React.SetStateAction<HeaderTab>>]
>([{ text: "Delivery" }, () => {}])

const HeaderProvider = ({ children }: any) => {
  const [state, setState] = useState<HeaderTab>({
    text: 'Delivery'
  });

    return (
      <HeaderContext.Provider value={[state, setState]}>
        {children}
      </HeaderContext.Provider>
    );
};

export { HeaderContext, HeaderProvider };
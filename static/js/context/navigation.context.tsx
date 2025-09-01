import React, { useState } from 'react';
type NavigationType = {
  inViewText: string;
  updateInview: (section: string) => void;
};
const NavigationContext = React.createContext<NavigationType>({
  inViewText: '',
  updateInview: (section: string) => {
    console.log(section);
  },
});

const NavigationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [inViewString, setInViewString] = useState<string>('home');
  return (
    <NavigationContext.Provider
      value={{
        inViewText: inViewString,
        updateInview: (section: string) => {
          setInViewString(section);
        },
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContext, NavigationProvider };

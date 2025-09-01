import React, { useState } from 'react';
import { TContactModal } from '../@types/modal';

const ContactFormModalContext = React.createContext<TContactModal>({
  isOpen: false,
  toggleModal: () => {
    console.log('hi');
  },
});

const ContactFormModalProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [modalOpen, setModalToggle] = useState<boolean>(false);
  return (
    <ContactFormModalContext.Provider
      value={{
        isOpen: modalOpen,
        toggleModal: () => {
          const _state = !modalOpen;
          setModalToggle(_state);
        },
      }}
    >
      {children}
    </ContactFormModalContext.Provider>
  );
};

export { ContactFormModalContext, ContactFormModalProvider };

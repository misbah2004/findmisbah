import React, { useEffect, useState } from 'react';
import { TModal, TModalData } from '../@types/modal';

const initialModalData: TModalData = {
  link: '',
  projectName: '',
  skills: [],
  Description: <></>,
  projectImage: '',
};
const ModalContext = React.createContext<TModal>({
  isOpen: false,
  closeModal: () => {
    console.log('close');
  },
  updateModalData: (modalData) => {
    console.log(modalData);
  },
  modalData: initialModalData,
});

const ModalContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<TModalData>(initialModalData);
  useEffect(() => {
    if (modalData !== initialModalData) {
      setModalOpen(true);
    }
  }, [modalData]);
  return (
    <ModalContext.Provider
      value={{
        isOpen: modalOpen,
        closeModal: () => {
          setModalOpen(false);
        },
        updateModalData: (modalData) => {
          setModalData(modalData);
        },
        modalData: modalData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };

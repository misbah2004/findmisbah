import React, { PropsWithChildren } from 'react';
import { NavigationProvider } from '../../context/navigation.context';
import style from './style.module.scss';
import { ModalContextProvider } from '../../context/modal.context';
import PopupModal from '../PopupModal';
import { ContactFormModalProvider } from '../../context/contactFormModal.context';
import ContactModal from '../ContactModal';

function Layout({ children }: PropsWithChildren) {
  return (
    <NavigationProvider>
      <ModalContextProvider>
        <ContactFormModalProvider>
          <div className={style.layout}>
            <div className={`lg:hidden ${style._mob_header}`}></div>
            <div className="container mx-auto p-4">{children}</div>
          </div>
          <PopupModal />
          <ContactModal />
        </ContactFormModalProvider>
      </ModalContextProvider>
    </NavigationProvider>
  );
}

export default Layout;

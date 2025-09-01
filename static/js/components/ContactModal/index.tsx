import React, { useContext } from 'react';
import { ContactFormModalContext } from '../../context/contactFormModal.context';
import { TContactModal } from '../../@types/modal';
import ContactForm from './ContactForm';

const ContactModal: React.FC = () => {
  const { isOpen, toggleModal } = useContext(
    ContactFormModalContext
  ) as TContactModal;
  if (!isOpen) {
    return <></>;
  }
  return <ContactForm toggleModal={toggleModal} />;
};

export default ContactModal;

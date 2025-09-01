import React, { useContext } from 'react';
import CartTitle from '../CardTitle';
import style from './style.module.scss';
import { ContactFormModalContext } from '../../context/contactFormModal.context';
import { TContactModal } from '../../@types/modal';

export type ServiceType = {
  title: string;
  description: string;
};

export type ServiceCardProp = {
  title: string;
  services: Array<ServiceType>;
};

const ServiceCard: React.FC<ServiceCardProp> = ({ title, services }) => {
  const { toggleModal } = useContext(ContactFormModalContext) as TContactModal;
  return (
    <div className="mb-10">
      <CartTitle title={title} />
      <div className="flex flex-wrap gap-4 mt-4">
        {services.map((service, index) => {
          return (
            <div
              key={`service_key-${index}`}
              className={`${style.service_card} p-4 flex-1 basis-[200px] xl:basis-[300px] flex flex-col`}
            >
              <h3 className="mb-4 font-bold">{service.title}</h3>
              <p className="text-sm mb-2 flex-1">{service.description}</p>
              <a
                className="text-secondary cursor-pointer"
                onClick={() => {
                  toggleModal();
                }}
              >
                ORDER NOW {'>'}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;

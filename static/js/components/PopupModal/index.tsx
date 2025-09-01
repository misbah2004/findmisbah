import React, { useContext, useEffect, useState } from 'react';
import Style from './style.module.scss';
import { ModalContext } from '../../context/modal.context';
import { TContactModal, TModal } from '../../@types/modal';
import { LinkArrow } from '../icons';
import KontraxImag from '../../assets/images/Projects/Kontrax.png';
import QaboolHai from '../../assets/images/Projects/QaboolHai.png';
import Icebox from '../../assets/images/Projects/icebox.png';
import IceboxMobile from '../../assets/images/Projects/iceboxmobile.png';
import UsedPanda from '../../assets/images/Projects/usedpanda.png';
import { createPortal } from 'react-dom';
import { ContactFormModalContext } from '../../context/contactFormModal.context';

const PopupModal: React.FC = () => {
  const { isOpen, closeModal, modalData } = useContext(ModalContext) as TModal;
  const { toggleModal } = useContext(ContactFormModalContext) as TContactModal;
  const [bgImageState, setBgImage] = useState<string>('');
  useEffect(() => {
    if (modalData.projectName !== '') {
      console.log('data updated', modalData);
      switch (modalData.projectImage) {
        case 'QaboolHai':
          setBgImage(
            `url(${QaboolHai}) no-repeat, linear-gradient(to bottom, rgba(25, 25, 35, 0.9), rgba(32, 32, 42, 0.9)), url(${Misbah}) no-repeat`
          );
          break;
        case 'icebox':
          setBgImage(
            `url(${Icebox}) no-repeat, linear-gradient(to bottom, rgba(25, 25, 35, 0.9), rgba(32, 32, 42, 0.9)), url(${Icebox}) no-repeat`
          );
          break;
        case 'iceboxmobile':
          setBgImage(
            `url(${IceboxMobile}) no-repeat, linear-gradient(to bottom, rgba(25, 25, 35, 0.9), rgba(32, 32, 42, 0.9)), url(${IceboxMobile}) no-repeat`
          );
          break;
        case 'usedpanda':
          setBgImage(
            `url(${UsedPanda}) no-repeat, linear-gradient(to bottom, rgba(25, 25, 35, 0.9), rgba(32, 32, 42, 0.9)), url(${UsedPanda}) no-repeat`
          );
          break;
        default:
          setBgImage(
            `url(${KontraxImag}) no-repeat, linear-gradient(to bottom, rgba(25, 25, 35, 0.9), rgba(32, 32, 42, 0.9)), url(${KontraxImag}) no-repeat`
          );
      }
    }
  }, [modalData]);
  if (!isOpen) {
    return <></>;
  }
  return (
    <>
      {createPortal(
        <div className={`${Style.modal} relative`}>
          <button
            className="text-base absolute right-6 top-6 md:right-4 md:top-4 w-8 h-8 bg-secondary text-lg leading-7 z-20"
            onClick={() => {
              closeModal();
            }}
          >
            x
          </button>
          <div className="md:w-10/12 h-[calc(100vh - 16px)] m-4 md:h-[80vh] bg-base absolute left-0 top-0 bottom-0 right-0 md:m-auto shadow-csShadow rounded-lg flex flex-col md:flex-row">
            <div
              className={`flex-1 md:flex-[2] ${Style.image} min-h-[40vh]`}
              style={{ background: bgImageState }}
            ></div>
            <div className="flex-[2] md:flex-1 p-4 text-white flex flex-col gap-4 overflow-hidden">
              <div className={`flex-1 pr-4 overflow-y-auto ${Style._scroll}`}>
                {/* project name */}
                <h1 className="font-bold text-lg mb-4">
                  {modalData.projectName}
                </h1>
                {/* description */}
                {modalData.Description}
                <div className="mt-4">
                  <h2 className="text-md font-bold mb-2">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {modalData.skills.map((skill, index) => (
                      <span
                        className="border border-secondary px-4 rounded-md"
                        key={`skill_set_${index}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                {/* action */}
                <button
                  className="bg-secondary text-base px-4 py-2"
                  onClick={() => {
                    // closeModal();
                    toggleModal();
                  }}
                >
                  Hire me!
                </button>
                <a
                  className="border border-secondary px-4 py-2 cursor-pointer"
                  target="_blank"
                  href={modalData.link}
                  rel="noreferrer"
                >
                  visit!{' '}
                  <LinkArrow className="text-white w-4 inline-block align-middle ml-2 mb-[2px]" />
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default PopupModal;

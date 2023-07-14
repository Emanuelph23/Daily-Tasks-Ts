import React from 'react'

//CSS
import styles from './Modal.module.css';
import { GrClose } from "react-icons/gr";

interface Props {
    children: React.ReactNode;
}

const Modal = ({children}: Props) => {

    const closeModal = (e: React.MouseEvent) : void => {

        e.preventDefault();
        const modal = document.getElementById('modal');
        modal!.classList.add("hide");

    }

  return (
    <div id='modal' >
        <div className={styles.fade} onClick={closeModal}></div>
        <div className={styles.modal}>
            <GrClose className={styles.closeModal} onClick={closeModal}/>
            <h2>
                Editar Tarefa
            </h2>
            {children}
        </div>
    </div>
  )
}

export default Modal
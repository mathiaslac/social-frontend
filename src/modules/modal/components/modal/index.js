import React, { useRef, useMemo } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import { useClickOutside } from "../../../../common";

import { useModal } from "../../hooks";
import styles from "./modal.module.css";

const Modal = () => {
  const ref = useRef(null);
  const { modal, closeModal } = useModal();
  useClickOutside(ref, closeModal);
  const element = useMemo(() => document.querySelector("#modal"), []);

  return createPortal(
    <AnimatePresence>
      {modal && (
        <div ref={ref} className={styles.modal__overlay}>
          <motion.div
            className={styles.modal}
            id={styles.serverInfoModal}
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
          >
            <button onClick={closeModal}>Close</button>
            <h1>{modal.mapImg}</h1>
            <p>{modal.serverIp}</p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    element
  );
};

export default Modal;

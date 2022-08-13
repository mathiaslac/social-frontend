import { useContext, useCallback } from "react";

import { ModalContext } from "../contexts";

const useModal = () => {
  const [modal, setModal] = useContext(ModalContext);

  const triggerModal = useCallback(
    ({ mapImg, ctPts, tPts, gameTimer, serverIp, serverLink }) => {
      setModal({ mapImg, ctPts, tPts, gameTimer, serverIp, serverLink });
    },
    []
  );

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  return { modal, triggerModal, closeModal };
};

export default useModal;

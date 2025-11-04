import { useState } from "react";

type UseMobileNavReturn = {
  isOpen: boolean;
  handleClose: () => void;
  handleToggle: () => void;
};

/**
 * モバイルナビゲーションメニューの状態管理フック
 * @returns {UseMobileNavReturn} モバイルナビゲーションメニューの状態と操作関数
 */
export const useMobileNav = (): UseMobileNavReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    handleClose,
    handleToggle,
  };
};

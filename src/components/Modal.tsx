// src/components/ui/Modal.tsx
import { Button } from "@/components/ui/button-custom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onConfirm: () => void;
  confirmText: string;
  cancelText: string;
};

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText,
  cancelText,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="mt-4">{children}</div>
        <div className="mt-4 flex justify-between">
          <Button aria-label={cancelText} variant="outline" onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            aria-label={confirmText}
            variant="destructive"
            className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import { Button } from './Button';
import { Modal } from './Modal';

type ConfirmProps = {
  confirm: () => void;
  cancel: () => void;
};

export const Confirm = ({ confirm, cancel }: ConfirmProps) => {
  return (
    <Modal className="h-fit w-96">
      <div className="flex flex-col gap-8 p-8 text-center">
        <div className="flex flex-col gap-4">
          <p className="text-pretty font-extrabold">
            Do you want to leave this page?
          </p>
          <p>Your changes will not be saved.</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={cancel} className="w-1/2">
            Cancel
          </Button>
          <Button onClick={confirm} className="w-1/2">
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal as ModalWrapper,
  ModalProps,
  ButtonProps,
} from '@nextui-org/react';
import { PropsWithChildren } from 'react';

type Props = Omit<ModalProps, 'children'> &
  PropsWithChildren<{
    title: string;
    action?: {
      submit?: ButtonProps & { label: string };
    };
  }>;

export const Modal: React.FC<Props> = (props) => {
  const { title, children, action, ...modalProps } = props;

  return (
    <ModalWrapper {...modalProps}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Đóng
              </Button>
              <Button color="primary" {...action?.submit}>
                {action?.submit?.label}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalWrapper>
  );
};

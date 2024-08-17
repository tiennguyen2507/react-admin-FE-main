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
      submit?: ButtonProps;
    };
  }>;

export const Modal: React.FC<Props> = (props) => {
  const { title, children, action } = props;
  console.log(action);

  return (
    <ModalWrapper {...props}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Close
              </Button>
              <Button color="primary" {...action?.submit}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalWrapper>
  );
};

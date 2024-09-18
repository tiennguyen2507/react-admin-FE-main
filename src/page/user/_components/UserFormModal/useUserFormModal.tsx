import { UserFormModal } from './UserFormModal';

export const useUserFormModal = () => {
  const [isUserFormModal, setIsUserFormModal] = useState(false);
  return {
    isUserFormModal,
    setIsUserFormModal,
    UserFormModal: () => (
      <UserFormModal isOpen={isUserFormModal} setIsUserFormModal={setIsUserFormModal} />
    ),
  };
};

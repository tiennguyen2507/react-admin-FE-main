import { useSearchParams } from 'react-router-dom';
import { UserFormModal } from './UserFormModal';
import { useQuery } from '@tanstack/react-query';
import httpRequestAuth from '@/config/httpRequest';

export const useUserFormModal = () => {
  const [isUserFormModal, setIsUserFormModal] = useState(false);
  const [param] = useSearchParams();

  const { data, refetch } = useQuery({
    queryKey: ['get-user-id', param.get('page') || '1'],
    queryFn: () => {
      if (param.get('edit')) {
        return httpRequestAuth.get(`/users/${param.get('edit')}`).then(({ data }) => data);
      }
      return undefined;
    },
    enabled: false,
  });

  const mount = async () => {
    if (param.get('edit')) {
      await refetch();
      setIsUserFormModal(true);
    }
  };

  useEffect(() => {
    mount();
  }, [param.get('edit')]);

  return {
    isUserFormModal,
    setIsUserFormModal,
    UserFormModal: () => (
      <UserFormModal
        isOpen={isUserFormModal}
        setIsUserFormModal={setIsUserFormModal}
        value={data}
      />
    ),
  };
};

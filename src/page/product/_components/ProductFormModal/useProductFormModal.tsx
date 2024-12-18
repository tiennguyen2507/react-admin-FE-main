import { useSearchParams } from 'react-router-dom';
import { ProductFormModal } from './ProductFormModal';
import { useQuery } from '@tanstack/react-query';
import httpRequestAuth from '@/config/httpRequest';

export const useProductFormModal = () => {
  const [isProductFormModal, setIsUserFormModal] = useState(false);
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
    isProductFormModal,
    setIsUserFormModal,
    ProductFormModal: () => (
      <ProductFormModal
        isOpen={isProductFormModal}
        setIsUserFormModal={setIsUserFormModal}
        value={data}
      />
    ),
  };
};

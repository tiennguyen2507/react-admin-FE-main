import { LoadingWrapper } from '@/components/ui/loading';
import { Table } from '@/components/ui/Table';
import DashBoardLayout from '@/layouts/DashBoardLayout';
import { Button, Avatar } from '@nextui-org/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useUserFormModal } from './_components/UserFormModal';
import { EditIcon, DeleteIcon, CheckIcon } from '@nextui-org/shared-icons';
import { Popover } from '@/components/ui/Popover';
import { PageConfig } from '@/config/pageConfig';
import httpRequestAuth from '@/config/httpRequest';
import { withLogin } from '@/middleware/withLogin';
import { useSearchParams } from 'react-router-dom';
import { columnsTable } from './constant';

const Users: React.FC = () => {
  const [param, setURLSearchParams] = useSearchParams();
  const { UserFormModal, setIsUserFormModal } = useUserFormModal();

  const { data: users, isLoading } = useQuery({
    queryKey: ['get-user', param.get('page')],
    queryFn: () => {
      return httpRequestAuth
        .get('/users', { params: { page: param.get('page') || 1, limit: 10 } })
        .then(({ data }) => data);
    },
  });

  return (
    <DashBoardLayout>
      <div className="py-2 mb-2 flex justify-between">
        <h2 className="text-2xl">Người dùng</h2>
        <Button size="sm" color="primary" onClick={() => setIsUserFormModal(true)}>
          Thêm người dùng
        </Button>
      </div>
      <LoadingWrapper isLoading={isLoading}>
        <div className="w-full">
          <Table
            columns={columnsTable}
            rows={users}
            renderRow={{
              address: ({ address }: any) => address || 'Chưa được cập nhật',
              action: ({ _id }: { _id: string }) => (
                <ActionTable
                  id={_id}
                  onEdit={() => setURLSearchParams({ page: param.get('page') || '1', edit: _id })}
                />
              ),
              avatar: ({ avatar }: { avatar: string }) => (
                <Avatar src={avatar} radius="full" size="sm" />
              ),
            }}
          />
          {/* <div className="flex items-center justify-between mt-3">
            <p>
              Tổng số người dùng:
              <span className="text-lg ml-2 px-2 rounded-lg border-1">{users?.total}</span>
            </p>
            <Pagination
              showControls
              total={users?.totalPages}
              initialPage={Number(param.get('page') || '1')}
              onChange={(page) => setURLSearchParams({ page: page.toString() })}
            />
          </div> */}
        </div>
        <UserFormModal />
      </LoadingWrapper>
    </DashBoardLayout>
  );
};

const ActionTable: React.FC<{ id: string; onEdit: () => void }> = ({ id, onEdit }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (id: string) => httpRequestAuth.delete(`/users/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-user'] });
    },
  });

  return (
    <span className="flex gap-4 cursor-pointer">
      <Button
        isIconOnly
        color="primary"
        aria-label="Like"
        size="sm"
        variant="ghost"
        onClick={onEdit}
      >
        <EditIcon />
      </Button>
      <Popover
        content={
          <span className="flex gap-1 items-center">
            Bạn có muốn xoá!
            <Button size="sm" isIconOnly variant="light" onClick={() => mutate(id)}>
              <CheckIcon />
            </Button>
          </span>
        }
      >
        <Button isIconOnly color="danger" aria-label="Like" size="sm" variant="ghost">
          <DeleteIcon />
        </Button>
      </Popover>
    </span>
  );
};

export default () =>
  PageConfig({
    Page: Users,
    title: 'User page',
    middleware: [withLogin],
  });

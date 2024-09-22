import { httpRequest } from '@/config/httpRequest';
import { ContextMiddleware, PageConfig } from '@/config/pageConfig';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email().min(1).email(),
  password: z.string().min(1),
});

type FieldValue = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValue>({ resolver: zodResolver(loginSchema) });

  const { mutate } = useMutation({
    mutationFn: (data: FieldValue) => httpRequest.post('/auth/login', data),
    onSuccess: async ({ data }) => {
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      navigate('/user');
    },
    onError: () => {
      setErrorMessage('Đăng nhập không thành công');
    },
  });

  const handleLogin = (data: FieldValue) => {
    setIsLoading(true);
    setErrorMessage(''); // Clear previous error message
    mutate(data, {
      onSettled: () => setIsLoading(false),
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <form
        className="flex flex-col gap-3 w-96 p-6 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <Input
          {...register('email')}
          type="email"
          label="Email"
          size="sm"
          isInvalid={!!errors.email}
          errorMessage={errors.email ? 'Please enter a valid email' : ''}
          className="p-2"
        />
        <Input
          {...register('password')}
          type="password"
          label="Password"
          size="sm"
          isInvalid={!!errors.password}
          errorMessage={errors.password ? 'Please enter a valid password' : ''}
          className="p-2"
        />
        {errorMessage && <div className="text-red-500 text-center mb-2">{errorMessage}</div>}
        <Button
          color="primary"
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          isLoading={isLoading}
        >
          Đăng Nhập
        </Button>
      </form>
    </div>
  );
};

export const loggedIn = async ({ navigate }: ContextMiddleware) => {
  const access_token = localStorage.getItem('access_token');
  if (access_token) {
    navigate('/user');
  }
  return true;
};

export default () =>
  PageConfig({
    Page: Login,
    title: 'Login page',
    middleware: [loggedIn],
  });

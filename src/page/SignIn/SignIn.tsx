import BaseButton from '@/components/base/BaseButton';
import BaseInput from '@/components/base/BaseInput';
import { useNavigate } from 'react-router';

const SignIn: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSignIn = (): void => {
    navigate('/');
  };
  return (
    <div className="sign-in">
      <div className="sign-in__form">
        <BaseInput label="usename" />
        <BaseInput label="password" type="password" />
        <BaseButton label="sign-in" onClick={onSignIn} />
      </div>
    </div>
  );
};

export default SignIn;

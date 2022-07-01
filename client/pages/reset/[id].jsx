import { useRouter } from 'next/dist/client/router';
import ChangePass from '../../src/components/Auth/ChangePass';

const ChangePassword = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <ChangePass userId={id}/>
  )
}

export default ChangePassword;
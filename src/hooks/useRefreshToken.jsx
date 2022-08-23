import api from '../components/axios'
import useAuth from './useAuth';

const useRefreshToken = () => {
  const {setAuth} = useAuth();
  const refresh = async () => {
    const res = await api.get('/refresh', {
      withCredentials: true
    });
    setAuth(prev => {
      console.log(JSON.stringify.apply(prev));
      console.log(res.data.token);
      return{...prev, token: res.data.token}

    });
    return res.data.token;

  }
  return refresh
}

export default useRefreshToken;
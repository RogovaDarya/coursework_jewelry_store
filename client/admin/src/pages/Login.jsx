import { useEffect, useState } from 'react';
import { handleLogin } from '../utils/utils';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('isLogin')) {
      navigate('/main');
    }
  }, [navigate]);

  const handleLoginBtnClick = () => {
    const admin = handleLogin(login, password);

    if (admin !== undefined) {
      localStorage.setItem('isLogin', true);
      navigate('/main');
    } else {
      setErrMsg(
        'Пользователь с указанными данными не существует. Обратитесь к администратору'
      );
    }
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center font-serif gap-2">
      <h1 className="text-2xl py-2 uppercase font-bold">
        Панель администратора
      </h1>
      <input
        type="text"
        placeholder="Login"
        onChange={(e) => setLogin(e.target.value)}
        className="border w-1/5 px-2 py-1 rounded-lg border-gray-700"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="border w-1/5 px-2 py-1 rounded-lg border-gray-700"
      />
      <button
        type="submit"
        onClick={handleLoginBtnClick}
        className="border px-4 py-1 rounded-lg border-gray-700"
      >
        Войти
      </button>
      <p>{errMsg}</p>
    </div>
  );
}

export default Login;

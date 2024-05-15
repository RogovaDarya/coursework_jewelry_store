import { ADMINS } from '../data/constants';

export const handleLogin = (login, password) => {
  const admin = ADMINS.filter(
    (admin) => admin.login === login && admin.password === password
  );

  if (admin.length !== 0) {
    return admin;
  }
};

export const showDate = (date) => {
  const d = new Date(date);

  return d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear();
};

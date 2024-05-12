import { Users } from '@/shared';

const CheckLocalStorage = () => {
  function getData(): Users[] | null {
    const usersData = localStorage.getItem('/users');
    if (usersData) {
      return JSON.parse(usersData);
    } else {
      console.log('No data in localStorage');
      return null;
    }
  }
  

function updData(updatedUser: Users): void {
  let usersData = getData();
  if (usersData) {
    usersData = usersData.map((user) => {
      if (user.id === updatedUser.id) {
        return updatedUser;
      } else {
        return user;
      }
    });
    localStorage.setItem('/users', JSON.stringify(usersData));
  } else {
    console.log('No data in localStorage');
  }
}

export default CheckLocalStorage
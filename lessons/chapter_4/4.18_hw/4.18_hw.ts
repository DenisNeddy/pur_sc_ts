import axios from 'axios';

const url = 'https://dummyjson.com/users';


async function getUser(url: string) {
    try {
      const response = await axios.get(url);
     const result = response.data.users;
     console.log(result)
    } catch (error) {
      console.error(error);
    }
  }

  getUser(url)
  console.log('cb')
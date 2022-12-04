/* eslint-disable prettier/prettier */
import {useQuery} from 'react-query';
import axios from '../axios';

const fetchMyPosts = async () => {
  const {data} = await axios.get('/posts/me');
  return data;
};

const useMyPosts = () => useQuery<any, Error>('posts', fetchMyPosts);
export default useMyPosts;

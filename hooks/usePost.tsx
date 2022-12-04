/* eslint-disable prettier/prettier */
import {useQuery} from 'react-query';
import axios from '../axios';

const fetchPost = async (postId: string) => {
  const {data} = await axios.get(`/posts/${postId}?populate=%2A`);
  return data.data;
};

const usePost = (postId: string) =>
  useQuery(['posts', postId], () => fetchPost(postId), {
    enabled: !!postId,
  });
export default usePost;

/* eslint-disable prettier/prettier */
import axios from '../axios';
import {useMutation, useQueryClient} from 'react-query';

const addPost = async postData => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const {data} = await axios.post('/posts', postData, config);
  return data;
};

const useAddPost = () => {
  const queryClient = useQueryClient();
  return useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
};
export default useAddPost;

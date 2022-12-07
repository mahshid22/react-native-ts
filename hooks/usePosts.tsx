/* eslint-disable prettier/prettier */
// import {useQuery} from 'react-query';
// import axios from '../axios';

// const fetchPosts = async () => {
//   const {data} = await axios.get('posts?populate[0]=images&populate[1]=user');
//   return data;
// };

// const usePosts = () => useQuery<any, Error>('posts', fetchPosts);
// export default usePosts;

import axios from '../axios';
import {useInfiniteQuery} from 'react-query';

export const flattenInfiniteQueryPages = data => {
  const allData = data.pages.reduce((all, d) => {
    const content = d.data;
    if (content) return [...all, ...content];
    return all;
  }, []);

  return allData;
};
const getPosts = async ({pageParam = 1}) => {
  console.log(
    axios.get(
      `posts?populate[0]=images&populate[1]=user&pagination[page]=${pageParam}&pagination[pageSize]=3&sort[0]=createdAt:desc`,
    ),
  );
  const res = await axios.get(
    `posts?populate[0]=images&populate[1]=user&pagination[page]=${pageParam}&pagination[pageSize]=3&sort[0]=createdAt:desc`,
  );
  console.log('posts', res);
  return res.data;
};

export default function usePostInfiniteQuery(enabled?: boolean) {
  const {data, ...rest} = useInfiniteQuery('posts', getPosts, {
    enabled,
    getNextPageParam: Page => {
      if (Page.meta.pagination.page < Page.meta.pagination.pageCount) {
        return Page.meta.pagination.page + 1;
      }
      return undefined;
    },
  });
  const posts = data ? flattenInfiniteQueryPages(data) : [];
  return [posts, rest] as const;
}

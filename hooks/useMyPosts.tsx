/* eslint-disable prettier/prettier */
// import {useQuery} from 'react-query';
// import axios from '../axios';

// const fetchMyPosts = async () => {
//   const {data} = await axios.get('/posts/me');
//   return data;
// };

// const useMyPosts = () => useQuery<any, Error>('posts', fetchMyPosts);
// export default useMyPosts;

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
const getMyPosts = async ({pageParam = 1}) => {
  const res = await axios.get(
    `posts?populate[0]=images&populate[1]=user&pagination[page]=${pageParam}&pagination[pageSize]=9&sort[0]=createdAt:desc`,
  );
  return res.data;
};

export default function useMyPostInfiniteQuery(enabled?: boolean) {
  const {data, ...rest} = useInfiniteQuery('Myposts', getMyPosts, {
    enabled,
    getNextPageParam: Page => {
      if (Page.meta.pagination.page < Page.meta.pagination.pageCount) {
        return Page.meta.pagination.page + 1;
      }
      return undefined;
    },
  });
  const myPosts = data ? flattenInfiniteQueryPages(data) : [];
  return [myPosts, rest] as const;
}

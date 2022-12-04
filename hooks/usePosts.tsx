/* eslint-disable prettier/prettier */
// import {useQuery} from 'react-query';
// import axios from '../axios';

// const fetchPosts = async () => {
//   const {data} = await axios.get('posts?populate[0]=images&populate[1]=user');
//   console.log(data);
//   return data;
// };

// const usePosts = () => useQuery<any, Error>('posts', fetchPosts);
// export default usePosts;

import axios from '../axios';
import {useInfiniteQuery} from 'react-query';
import {InfiniteData} from 'react-query';

export const flattenInfiniteQueryPages = data => {
  const allData = data.pages.reduce((all, d) => {
    const content = d.content;
    if (content) return [...all, ...content];
    return all;
  });

  return allData;
};
const getPosts = async ({pageParam = 1}) => {
  console.log(
    axios.get(
      `posts?populate[0]=images&populate[1]=user?pagination[page]=${pageParam}&pagination[pageSize]=3`,
    ),
  );
  const res = await axios.get(
    `posts?populate[0]=images&populate[1]=user?pagination[page]=${pageParam}&pagination[pageSize]=20`,
  );
  console.log(`res.data page ${pageParam}`, res.data.meta);
  return res.data;
};

export default function usePostInfiniteQuery(enabled?: boolean) {
  const {data, ...rest} = useInfiniteQuery('posts', getPosts, {
    enabled,
    getNextPageParam: Page => {
      console.log('last page', Page.meta.pagination);
      if (Page.meta.pagination.page < Page.meta.pagination.pageCount) {
        return Page.meta.pagination.page + 1;
      }
      return undefined;
    },
  });
  const posts = data ? flattenInfiniteQueryPages(data) : [];
  return [posts, rest] as const;
}

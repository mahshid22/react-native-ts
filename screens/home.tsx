/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {FlatList, Image, RefreshControl, Text, View} from 'react-native';

import PostCard from '../components/PostCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {windowHeight, windowWidth} from '../utils/dimention';
import usePosts from '../hooks/usePosts';
import usePostInfiniteQuery from '../hooks/usePosts';
const renderSpinner = () => {
  return <Text>loading</Text>;
};
const Skeleton = () => {
  return (
    <>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item
          flexDirection="row"
          alignItems="center"
          marginTop={10}>
          <SkeletonPlaceholder.Item
            width={60}
            height={60}
            borderRadius={50}
            margin={10}
          />
          <SkeletonPlaceholder.Item
            width={60}
            height={60}
            borderRadius={50}
            margin={10}
          />
          <SkeletonPlaceholder.Item
            width={60}
            height={60}
            borderRadius={50}
            margin={10}
          />
          <SkeletonPlaceholder.Item
            width={60}
            height={60}
            borderRadius={50}
            margin={10}
          />
          <SkeletonPlaceholder.Item
            width={60}
            height={60}
            borderRadius={50}
            margin={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item
          flexDirection="column"
          marginTop={30}
          alignItems="center">
          <SkeletonPlaceholder.Item
            width={windowWidth - 30}
            height={windowHeight - 250}
            borderRadius={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </>
  );
};
const Home = ({navigation}) => {
  // const [posts, setPosts] = useState();
  const [refreshing, setRefreshing] = React.useState(false);
  // const {data: posts, isLoading, isSuccess} = usePosts();
  const [posts, rest] = usePostInfiniteQuery();

  React.useEffect(() => {
    // if (refreshing) {
    //   axios
    //     .get('posts?populate[0]=images&populate[1]=user')
    //     .then(async function (response) {
    //       console.log(response, 'refreshing');
    //       setPosts(response.data);
    //       setRefreshing(false);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
  }, [refreshing]);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{marginRight: 10}}>
          <FontAwesome5.Button
            name="plus"
            size={22}
            backgroundColor="#fff"
            color="#bd4a88"
            onPress={() => navigation.navigate('New Post')}
          />
        </View>
      ),
    });
  }, [navigation]);
  const loadMore = () => {
    if (rest.hasNextPage) {
      rest.fetchNextPage();
    }
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
  }, []);

  if (rest.status !== 'success') {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <Skeleton />
      </SafeAreaView>
    );
  }

  if (rest.status === 'success') {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <FlatList
          data={posts.data}
          renderItem={({item}) => (
            <PostCard
              item={item}
              onPress={() => navigation.navigate('Post', {id: item.id})}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          ListFooterComponent={rest.isFetchingNextPage ? renderSpinner : null}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </SafeAreaView>
    );
  }

  {
    /* <FlatList
        data={posts}
        ListHeaderComponent={
          <View>
            <FlatList
              horizontal
              data={posts}
              renderItem={({item}) => <Story item={item} />}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        }
        renderItem={({item}) => (
          <PostCard item={item} onPress={() => navigation.navigate('Post')} />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      /> */
  }
  {
    /* </SafeAreaView> */
  }
  // );
};
export default Home;

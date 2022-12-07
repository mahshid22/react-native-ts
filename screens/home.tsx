/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  Text,
  View,
} from 'react-native';

import PostCard from '../components/PostCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {windowHeight, windowWidth} from '../utils/dimention';
import usePosts from '../hooks/usePosts';
import usePostInfiniteQuery from '../hooks/usePosts';
import {QueryClient} from 'react-query';
const renderSpinner = () => {
  return <ActivityIndicator size="large" color="#00ff00" />;
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
  const [refreshing, setRefreshing] = React.useState(false);
  const [posts, rest] = usePostInfiniteQuery();

  React.useEffect(() => {
    const queryClient = new QueryClient();
    if (rest.isFetching) {
      setRefreshing(false);
    }
    if (refreshing && rest.isSuccess) {
      rest.refetch({refetchPage: (page, index) => index === 0});
    }
  }, [refreshing, rest]);

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

  const renderItem = useCallback(
    ({item}) => (
      <PostCard
        item={item}
        onPress={() => navigation.navigate('Post', {id: item.id})}
      />
    ),
    [posts],
  );

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
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMore}
          onEndReachedThreshold={2}
          getItemLayout={(_, index) => ({
            length: 101,
            offset: 101 * index,
            index,
          })}
          ListFooterComponent={rest.isFetchingNextPage ? renderSpinner : null}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </SafeAreaView>
    );
  }
};
export default Home;

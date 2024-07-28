import { FlatList, View } from 'react-native';
import { Appbar, Avatar, Card, Divider } from 'react-native-paper';
import { TopTabs } from '../top-tabs';
import { useLoaderData } from '../api/loader';

export const FeedPage = () => {
  const { data } = useLoaderData()

  return (
    <View style={{ flex: 1 }}>

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<>
          <Appbar.Header mode="large">
            <Appbar.Content title="Home" />
            <Appbar.Action icon="login" />
          </Appbar.Header>
          <TopTabs />
        </>}
        renderItem={({ item }) => {
          console.log({ item })
          return <Card elevation={0}>

            <Card.Title
              right={() => <Avatar.Image source={{ uri: "https://picsum.photos/48" }} />}
              style={{ paddingVertical: 16 }}
              title={item.title}
              titleVariant='titleMedium'
              titleNumberOfLines={2}
              subtitle={item.body.replace(/\\n/g, '\n')}
              subtitleNumberOfLines={2}
            />


          </Card>
        }}
        data={data?.articles}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

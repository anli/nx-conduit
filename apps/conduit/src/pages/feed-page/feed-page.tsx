import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { TopTabs } from './top-tabs';

export const FeedPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header mode="large">
        <Appbar.Content title="Home" />
        <Appbar.Action icon="login" />
      </Appbar.Header>
      <TopTabs />
    </View>
  );
};

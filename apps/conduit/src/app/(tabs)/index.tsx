import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default () => {
  return (
    <View>
      <Appbar.Header mode="large">
        <Appbar.Content title="Home" />
        <Appbar.Action icon="bell-outline" />
      </Appbar.Header>
    </View>
  );
};

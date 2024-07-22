import { View } from 'react-native';
import { TabsProvider, Tabs, TabScreen } from 'react-native-paper-tabs';

export const TopTabs = () => {
  return (
    <TabsProvider defaultIndex={0}>
      <Tabs mode="scrollable" showLeadingSpace={true}>
        <TabScreen label="For you">
          <View />
        </TabScreen>
        <TabScreen label="Following">
          <View />
        </TabScreen>
        <TabScreen label="React">
          <View />
        </TabScreen>
        <TabScreen label="Javascript">
          <View />
        </TabScreen>
      </Tabs>
    </TabsProvider>
  );
};

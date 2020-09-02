import { createElement } from 'rax';
import View from 'rax-view';
import tabs from './config/tabs';

import './TabContainer.css';

const tabComponentCache = {};

export default function TabContainer(props) {
  const { selectedIndex = 0 } = props;
  const currentTab = tabs[selectedIndex];

  if (!tabComponentCache[currentTab.key]) {
    tabComponentCache[currentTab.key] = <currentTab.Component apiName={currentTab.apiName} apiVersion={currentTab.apiVersion} />;
  }

  return (
    <View className="tabContainer">
      <View
        className="tabContainerWrap"
        style={({
          width: `${750 * tabs.length}rpx`, transform: `translateX(-${selectedIndex * 750}rpx)`
        })}
      >
        {tabs.map((tabItem, index) => {
          return (
            <View key={index} className="tabContainerItem">
              {tabComponentCache[tabItem.key] || null}
            </View>
          );
        })}
      </View>
    </View>
  );
};

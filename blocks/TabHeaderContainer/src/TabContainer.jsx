import { createElement } from 'rax';
import View from 'rax-view';
import tabs from './config/tabs';

import './TabContainer.css';

const tabComponentCache = {};

export default function TabContainer(props) {
  const { selectedIndex = 0 } = props;
  const tab = tabs[selectedIndex];

  if (!tabComponentCache[tab.key]) {
    tabComponentCache[tab.key] = <tab.Component apiName={tab.apiName} apiVersion={tab.apiVersion} />;
  }

  return (
    <View className="tabContainer">
      <View
        className="tabContainerWrap"
        style={({
          width: `${750 * tabs.length}rpx`, transform: `translateX(-${selectedIndex * 750}rpx)`
        })}
      >
        {tabs.map((tab, index) => {
          return (
            <View key={index} className="tabContainerItem">
              {tabComponentCache[tab.key] || null}
            </View>
          );
        })}
      </View>
    </View>
  );
};

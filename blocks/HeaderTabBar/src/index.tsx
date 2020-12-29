import { createElement, useState } from 'rax';
import View from 'rax-view';
import Picture from 'rax-picture';
import Tab from './Tab';

import './index.css';

const tabs = ['关注', '推荐'];

const HeaderTabBar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onTabChange = (key) => {
    setActiveTab(key);
  };
  return (
    <View className="container">
      <Picture className="icon" source={{ uri: 'https://img.alicdn.com/imgextra/i4/O1CN01EYyUSR1aPWNXTZtOa_!!6000000003322-2-tps-32-32.png' }} />
      <Tab tabs={tabs} onChange={onTabChange} activeTab={activeTab} />
      <Picture className="icon" source={{ uri: 'https://img.alicdn.com/imgextra/i3/O1CN01MMFtK825MXtVDMTXT_!!6000000007512-2-tps-32-32.png' }} />
    </View>
  );
};

export default HeaderTabBar;

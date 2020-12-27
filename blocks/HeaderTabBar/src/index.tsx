import { createElement, useState } from 'rax';
import View from 'rax-view';
import Picture from 'rax-picture';
import { Tab } from '@alifd/meet';

import './index.css';

const HeaderTabBar = () => {
  const [curActiveKey, setActiveKey] = useState('1');

  return (
    <View className="container">
      <Picture className="searchIcon" source={{ uri: 'https://img.alicdn.com/imgextra/i4/O1CN01EYyUSR1aPWNXTZtOa_!!6000000003322-2-tps-32-32.png' }} />
      <Tab
        fullWidth={false}
        activeKey={curActiveKey}
        renderTool={() => {
          return null;
        }}
        dataSource={[
          { title: 'Tab 1', key: 1 },
          { title: 'Tab 2', key: 2 },
          { title: 'Tab 3', key: 3 },
        ]}
        onChange={(v: string) => {
          setActiveKey(v);
        }}
      />
      <Picture className="scanIcon" source={{ uri: 'https://img.alicdn.com/imgextra/i3/O1CN01YV4ZrS1yPZCE83i0l_!!6000000006571-2-tps-32-32.png' }} />
    </View>
  );
};

export default HeaderTabBar;

import { createElement, useState } from 'rax';
import View from 'rax-view';
import TabHeader from './TabHeader';
import TabContainer from './TabContainer';

import './index.css';

const TabHeaderContainer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View className="container">
      <TabHeader
        selectedIndex={selectedIndex}
        onChange={(index) => {
          setSelectedIndex(index);
        }}
      />
      <TabContainer selectedIndex={selectedIndex} />
    </View>
  );
};

export default TabHeaderContainer;

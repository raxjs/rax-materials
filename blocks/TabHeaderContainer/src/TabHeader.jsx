import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import tabs from './config/tabs';

import './TabHeader.css';

// 可根据视觉稿确定 tab item 的宽度（视觉稿宽度以750为准）
const itemWidth = 180;
const lineWidth = 120;

export default function TabHeader(props) {
  const { selectedIndex = 0, onChange } = props;

  return (
    <View className="tabHeader">
      <View className="tabHeaderWrap">
        {tabs.map((tab, index) => {
          return (
            <View
              key={tab.key}
              className="tabHeaderItem"
              style={{ width: `${itemWidth}rpx` }}
              onClick={() => {
                onChange(index);
              }}
            >
              <Text className={`tabHeaderText ${index === selectedIndex ? 'tabHeaderSelectedText' : ''}`}>{tab.name}</Text>
            </View>
          );
        })}
      </View>
      <View
        className="tabHeaderLineWrap"
        style={{ width: `${itemWidth * tabs.length}rpx` }}
      >
        <View className="tabHeaderLine" style={{
          width: `${lineWidth}rpx`,
          marginLeft: `${(itemWidth - lineWidth) / 2}rpx`,
          transform: `translateX(${itemWidth * selectedIndex}rpx)`
        }} />
      </View>
    </View>
  );
};

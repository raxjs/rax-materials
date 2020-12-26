import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';

import './index.css';

const dataList = [
  { name: '收录指南', iconUrl: 'https://img.alicdn.com/imgextra/i2/O1CN014vlGjU1LLenjKqFyj_!!6000000001283-2-tps-69-75.png' },
  { name: '官方活动', iconUrl: 'https://img.alicdn.com/imgextra/i4/O1CN01CPJu631iugFUVuIF5_!!6000000004473-2-tps-70-68.png' },
  { name: '涨粉秘诀', iconUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01d8Copo1Q9MEybPyYa_!!6000000001933-2-tps-69-75.png' },
  { name: '任务说明', iconUrl: 'https://img.alicdn.com/imgextra/i3/O1CN01JqWBpL1EbxaNlcLOy_!!6000000000371-2-tps-77-80.png' },
];

const DataCard = () => {
  const onDataItemClick = (item) => {
    console.log('onDataItemClick', item);
  };

  return (
    <View className="card">
      <View className="header">
        <Text className="title">创作中心</Text>
        <Picture className="arrow" source={{ uri: 'https://img.alicdn.com/imgextra/i2/O1CN01DuirLv1IdZRcoR71K_!!6000000000916-2-tps-12-20.png' }} />
      </View>
      <View className="data">
        {
            dataList.map((item) => {
              return (
                <View className="data-item" onClick={() => onDataItemClick(item)}>
                  <Picture className="data-item-icon" source={{ uri: item.iconUrl }} />
                  <Text className="data-item-title">{item.name}</Text>
                </View>
              );
            })
          }
      </View>
    </View>
  );
};

export default DataCard;

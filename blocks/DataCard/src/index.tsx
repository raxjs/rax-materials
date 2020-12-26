import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';

import './index.css';

const dataList = [
  { total: '2.3W', title: '7日阅读', desc: '周环比', change: '-2.6%' },
  { total: '2032', title: '7日获赞', desc: '周环比', change: '2.5%' },
  { total: '583', title: '7日评论', desc: '周环比', change: '2.5%' },
  { total: '386', title: '累计发布', desc: '日环比', change: '2.6%' },
  { total: '124', title: '累计精选', desc: '日环比', change: '2.5%' },
  { total: '2032', title: '累计粉丝', desc: '日环比', change: '0.5%' },
];

const DataCard = () => {
  return (
    <View className="card">
      <View className="header">
        <View className="title-wrap">
          <Text className="title">数据中心</Text>
          <Text className="date">2020.09.07更新</Text>
        </View>
        <Picture className="arrow" source={{ uri: 'https://img.alicdn.com/imgextra/i2/O1CN01DuirLv1IdZRcoR71K_!!6000000000916-2-tps-12-20.png' }} />
      </View>
      <View className="data">
        {
            dataList.map((item) => {
              const isRise = item.change.indexOf('-') === -1;
              return (
                <View className="data-item">
                  <Text className="data-item-total">{item.total}</Text>
                  <Text className="data-item-title">{item.title}</Text>
                  <View className="data-item-desc" style={{ color: isRise ? '#FB560A' : '#51CDA2' }}>
                    {item.desc}
                    <Picture
                      className="icon"
                      source={{ uri: isRise ?
                        'https://img.alicdn.com/imgextra/i3/O1CN01lblm9x1Wi3x0cRzUI_!!6000000002821-2-tps-11-22.png' :
                        'https://img.alicdn.com/imgextra/i4/O1CN01FK0i1A1jBAVZ9pGTR_!!6000000004509-2-tps-11-22.png' }}
                    />
                    {item.change}
                  </View>
                </View>
              );
            })
          }
      </View>
    </View>
  );
};

export default DataCard;

import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Picture from 'rax-picture';
import styles from './index.module.css';

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
    <View className={styles.card}>
      <View className={styles.header}>
        <View className={styles.titleWrap}>
          <Text className={styles.title}>数据中心</Text>
          <Text className={styles.date}>2020.09.07 更新</Text>
        </View>
        <Picture className={styles.arrow} source={{ uri: 'https://img.alicdn.com/imgextra/i2/O1CN01DuirLv1IdZRcoR71K_!!6000000000916-2-tps-12-20.png' }} />
      </View>
      <View className={styles.data}>
        {
          dataList.map((item) => {
            const isRise = item.change.indexOf('-') === -1;
            return (
              <View className={styles.dataItem} key={item.title}>
                <Text className={styles.dataItemTotal}>{item.total}</Text>
                <Text className={styles.dataItemTitle}>{item.title}</Text>
                <View className={styles.dataItemDesc} style={{ color: isRise ? '#FB560A' : '#51CDA2' }}>
                  {item.desc}
                  <Picture
                    className={styles.icon}
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

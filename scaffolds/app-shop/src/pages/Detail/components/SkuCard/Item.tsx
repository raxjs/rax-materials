import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './Item.module.css';

interface IProps {
  label: string;
  content: string[];
  extra?: string;
}

function Item(props: IProps) {
  const { label, content, extra } = props;


  return (
    <View className={styles.container}>
      <View className={styles.row}>
        <Text className={styles.label}>{label}</Text>
        {content.map((item, index) => {
          return (
            <View key={item} className={styles.row}>
              <Text x-if={index} className={styles.split}>|</Text>
              <Text className={styles.content} numberOfLines={1}>{item}</Text>
            </View>
          );
        })}
      </View>
      <View >
        <Text x-if={extra} className={styles.extra}>{extra}</Text>
        <Image x-else className={styles.icon} source={{ uri: 'https://img.alicdn.com/imgextra/i2/O1CN01pVMVOn22TvTd3CMcA_!!6000000007122-2-tps-64-64.png' }} />
      </View>
    </View>
  );
}

export default Item;

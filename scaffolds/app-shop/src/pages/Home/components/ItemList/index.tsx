import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Card from './Card';

import styles from './index.module.css';

function ItemList() {
  return (
    <View className={styles.container}>
      <Image className={styles.header} source={{ uri: 'https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png' }} />
      <View className={styles.list}>
        <Card />
        <Card />
        <Card />

      </View>
    </View>
  );
}

export default ItemList;

import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './News.module.css';

function News() {
  return (
    <View className={styles.container}>
      <Text className={styles.brand}>
        淘宝头条
      </Text>
      <Text className={styles.tag}>
        评测
      </Text>
      <Text className={styles.title} numberOfLines={1}>
        实测：五款最强防霾滤芯安利给你
      </Text>
    </View>
  );
}

export default News;

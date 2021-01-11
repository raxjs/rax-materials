import { createElement } from 'rax';
import View from 'rax-view';

import styles from './index.module.css';

export default function Card(props) {
  const { title, content } = props;
  return (
    <View className={styles.card}>
      <View className={styles.title}>{title}</View>
      <View className={styles.content}>{content}</View>
    </View>
  );
};

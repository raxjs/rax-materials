import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './Card.module.css';

interface IProps {
  title: string;
  icon: string;
  count: number;
}

function Card(props: IProps) {
  const { title, icon, count } = props;

  return (
    <View className={styles.container}>
      <View x-if={count} className={styles.count} >
        <Text className={styles.countNumber}>{count}</Text>
      </View>
      <Image className={styles.icon} source={{ uri: icon }} />
      <Text className={styles.title} >{title}</Text>
    </View>
  );
}

export default Card;

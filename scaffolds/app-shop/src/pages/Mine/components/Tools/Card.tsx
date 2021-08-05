import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './Card.module.css';

interface IProps {
  name: string;
  icon: string;
}

function Card(props: IProps) {
  const { name, icon } = props;

  return (
    <View className={styles.container}>
      <Image className={styles.icon} source={{ uri: icon }} />
      <Text className={styles.name} >{name}</Text>
    </View>
  );
}

export default Card;

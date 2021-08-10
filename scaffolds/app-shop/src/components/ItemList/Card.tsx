import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './Card.module.css';

interface IProps {
  image: string;
  name: string;
  price: string;
  extra: string;
}

function Card(props: IProps) {
  const { image, name, price, extra } = props;
  return (
    <View className={styles.container}>
      <Image className={styles.image} source={{ uri: image }} />
      <Text className={styles.name}>{name}</Text>
      <View className={styles.info}>
        <Text className={styles.price}>￥ {price}</Text>
        <Text className={styles.extra}>{extra}</Text>
      </View>
    </View>
  );
}

export default Card;
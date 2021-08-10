import { createElement } from 'rax';
import View from 'rax-view';
import Card from './Card';
import News from './News';

// mock data
import data from './data.json';

import styles from './index.module.css';

function ItemWrap() {
  return (
    <View className={styles.container}>
      <View className={styles.items}>
        {data.map((item, index) => {
          return <Card key={`card${index}`} titleImage={item.titleImage} items={item.items} index={index} />;
        })}
      </View>
      <News />
    </View>
  );
}

export default ItemWrap;
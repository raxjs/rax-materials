import { createElement } from 'rax';
import View from 'rax-view';
import Header from './Header';
import Card from './Card';

// mock data
import data from './data.json';

import styles from './index.module.css';

function Tools() {
  return (
    <View className={styles.container}>
      <Header />
      <View className={styles.body}>
        {data.map((item) => {
          return <Card key={item.name} name={item.name} icon={item.icon} />;
        })}
      </View>
    </View>
  );
}

export default Tools;

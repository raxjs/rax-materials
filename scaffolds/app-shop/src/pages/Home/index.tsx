import { createElement } from 'rax';
import View from 'rax-view';
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import ItemList from './components/ItemList';

import styles from './index.module.css';

export default function Home() {
  return (
    <View className={styles.container}>
      <Header />
      <Banner />
      <Nav />
      <ItemList />
    </View>
  );
}

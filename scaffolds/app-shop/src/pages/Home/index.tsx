import { createElement } from 'rax';
import View from 'rax-view';
import RecyclerView from 'rax-recyclerview';
import Header from './components/Header';
import Banner from './components/Banner';
import Nav from './components/Nav';
import ItemList from './components/ItemList';

import styles from './index.module.css';

export default function Home() {
  return (
    <View className={styles.container}>
      <Header />
      <RecyclerView >
        <Banner />
        <Nav />
        <ItemList />
      </RecyclerView>
    </View>
  );
}

import { createElement } from 'rax';
import View from 'rax-view';
import RecyclerView from 'rax-recyclerview';
import Header from './components/Header';
import Banner from './components/Banner';
import NavList from './components/NavList';
import ItemWrap from './components/ItemWrap';
import ItemList from './components/ItemList';

import styles from './index.module.css';

export default function Home() {
  return (
    <View className={styles.container}>
      <Header />
      <RecyclerView >
        <Banner />
        <NavList />
        <ItemWrap />
        <ItemList />
      </RecyclerView>
    </View>
  );
}

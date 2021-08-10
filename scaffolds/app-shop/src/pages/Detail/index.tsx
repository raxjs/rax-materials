import { createElement } from 'rax';
import View from 'rax-view';

import Header from './components/Header';
import Banner from './components/Banner';
import BaseCard from './components/BaseCard';
import SkuCard from './components/SkuCard';
import CommunityCard from './components/CommunityCard';
import StoreCard from './components/StoreCard';
import Description from './components/Description';

import styles from './index.module.css';

function Detail() {
  return (
    <View className={styles.container}>
      <Header />
      <Banner />
      <BaseCard />
      <SkuCard />
      <CommunityCard />
      <StoreCard />
      <Description />
    </View>
  );
}

export default Detail;

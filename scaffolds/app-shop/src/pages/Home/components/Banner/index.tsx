import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import Slider from 'rax-slider';

const list = [
  'https://gw.alicdn.com/imgextra/i4/O1CN01K5H7u71wbMCn9Mgjh_!!6000000006326-2-tps-1125-352.png',
  'https://gw.alicdn.com/imgextra/i4/O1CN01nqP1AP1OBWw0zQ2qn_!!6000000001667-2-tps-1125-352.png',
  'https://gw.alicdn.com/imgextra/i2/O1CN01HWcosl1tk6va5G8yJ_!!6000000005939-2-tps-1125-352.png',
];

function Banner() {
  return (
    <Slider
      className="slider"
      width={750}
      height={240}
      autoPlay
      loop
      showsPagination
      paginationStyle={{
        position: 'absolute',
        width: 750,
        height: 40,
        bottom: 20,
        left: 0,
        itemColor: 'rgba(255, 255, 255, 0.5)',
        itemSelectedColor: 'rgb(255, 80, 0)',
        itemSize: 16,
      }}
    >
      {list.map((item) => (
        <View key={item} className="itemWrap">
          <Image className="image" source={{ uri: item }} />
        </View>))}
    </Slider>
  );
}

export default Banner;

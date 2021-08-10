import { createElement } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import Title from './Title';

function Description() {
  return (
    <View>
      <Title />
      <Image style={{ width: '750rpx', height: '750rpx' }} source={{ uri: 'https://gw.alicdn.com/imgextra/i4/O1CN011APjrP1bPLtgGLU6n_!!6000000003457-2-tps-1152-1152.png' }} />
      <Image style={{ width: '750rpx', height: '640rpx' }} source={{ uri: 'https://gw.alicdn.com/tfs/TB1d0h2qVYqK1RjSZLeXXbXppXa-1125-960.png?getAvatar=avatar_640x0q80_.webp' }} />
    </View>
  );
}

export default Description;

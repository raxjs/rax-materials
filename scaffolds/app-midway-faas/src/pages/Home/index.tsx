import { createElement, useState, useEffect } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import request from 'universal-request';
import Logo from '../../components/Logo';
import './index.css';

// Replace your domain after publish api
const domain = process.env.NODE_ENV === 'development' ? '//localhost:3333' : '/';

export default function Home() {
  const [stars, setStars] = useState('');

  useEffect(() => {
    request({
      url: `${domain}/api/index`,
      method: 'GET',
      data: {
        from: 'Rax',
      },
    })
      .then((response) => {
        setStars(response.data.stars);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View className="rax-demo-home">
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className="rax-demo-title">Welcome to Your Rax App</Text>
      <Text className="rax-demo-info">Stars: {stars}</Text>
      <Text className="rax-demo-info">More information about Rax hello</Text>
      <Text className="rax-demo-info">Visit https://rax.js.org</Text>
    </View>
  );
}

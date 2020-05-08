import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import HeaderImage from '../../assets/background.jpg'

import {
  MainContainer,
  HeaderContainer,
  ImageContent,
  ScrollViewContainer,
  FlatListContent,
  Item,
  TextContent,
  TextHeader
} from './styles';

const Dashboard = () => {
  const [items, setItems] = useState([]);

  const posicaoScroll = new Animated.Value(0);


  useEffect(() => {
    let myItens = [];
    let i = 1;
    for (i; i <= 20; i++) {
      myItens.push({ name: 'Item', value: i })
    }
    setItems(myItens);

  }, []);

  return (
    <MainContainer>

      <HeaderContainer
        style={{
          height: posicaoScroll.interpolate({
            inputRange: [50, 320], // Quando começa, Quando termina
            outputRange: [190, 100],
            extrapolate: 'clamp'
          })
        }}>
        <ImageContent
          source={HeaderImage}
          style={{
            height: posicaoScroll.interpolate({
              inputRange: [50, 320],
              outputRange: [190, 100],
              extrapolate: 'clamp'
            })
          }}
        />
        <TextHeader
          style={{
            fontSize: posicaoScroll.interpolate({
              inputRange: [50, 320],
              outputRange: [21, 16],
              extrapolate: 'clamp'
            }),
            top: posicaoScroll.interpolate({
              inputRange: [50, 320],
              outputRange: [92, 52],
              extrapolate: 'clamp'
            })
          }}
        >Animação no Header</TextHeader>
      </HeaderContainer>

      <ScrollViewContainer>
        <FlatListContent
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: posicaoScroll },
                }
              }
            ],
            {
              useNativeDriver: false
            }
          )}
          data={items}
          keyExtractor={items => String(items.value)}
          renderItem={({ item }) => (
            <Item key={item.value}>
              <TextContent>
                {item.name} - {item.value}
              </TextContent>
            </Item>
          )}
        />
      </ScrollViewContainer>

    </MainContainer >
  )
}

export default Dashboard;
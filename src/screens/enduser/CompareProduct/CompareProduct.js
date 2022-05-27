import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const CompareProducts = () => {
  return (
    <View style={styles.second}>
      <View style={styles.imgContainer}>
      <Image
        source={require('../../../assets/Images/fotune.jpg')}
        style={{
          height: 189,
          width: 166,
          resizeMode: 'contain',
        }}
      />
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.fortune}>Fortune Oil</Text>
        <Text style={styles.qty}>10</Text>
        <Text style={styles.price}>999/-</Text>
      </View>
    </View>
  );
};


const CompareProduct = ({setCord}) => {
  return (
    <View
      onLayout={(event)=>{const layout = event.nativeEvent.layout
      setCord(layout.y)
      }}
      style={styles.compareContainer}
      >
      <Text
        style={styles.similarText}>
        Similar products to compare
      </Text>
      <View style={{flexDirection:'row'}}>
        <View style={styles.first}>
           <View style={styles.compareParameter}>
              <Text style={styles.productNameText}>Product name</Text>
              <Text style={styles.productQtyText}>Qty</Text>
              <Text style={styles.productPriceText}>Price</Text>
            </View>
        </View>
        <CompareProducts/>
        <CompareProducts/>
      </View>
    </View>
  )
}

export default CompareProduct;
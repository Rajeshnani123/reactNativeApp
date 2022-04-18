const styles = StyleSheet.create({
    root: {
      backgroundColor: '#FFF7EA',
    },
    head: {
      height: normalize(50),
      backgroundColor: '#FFB43A',
      flexDirection: 'row',
    },
    img: {
      height: normalize(160),
      width: normalize(160),
      borderRadius: 160 / 2,
      marginHorizontal: normalize(95),
      marginVertical: normalize(25),
    },
    leftDescription: {
      marginVertical: normalize(10),
      marginLeft: normalize(70),
    },
    rightDescription: {
      marginLeft: normalize(30),
      marginVertical: normalize(10),
    },
    button: {
      height: normalize(45),
      backgroundColor: '#FFB43A',
      width: 220,
      marginHorizontal: normalize(60),
      alignItems: 'center',
      marginVertical: normalize(30),
      borderRadius: 5,
    },
    buttonText: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#000',
      marginVertical: normalize(10),
    },
  });
  
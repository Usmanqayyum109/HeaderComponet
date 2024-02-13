import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {hp, wp} from '../Constants/Responsive';

import {Colors} from '../Constants/Colors';

import {Fonts, FontsSize} from '../Constants/Fonts';

import {useNavigation} from '@react-navigation/native';

export default function Header({rightIcon, leftIconImg, headerTitle}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Render back button if rightIcon is true */}

      {rightIcon ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../Assets/Icons/back-arrow.png')}
            style={styles.img}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ) : (
        // Placeholder view if rightIcon is false

        <View style={{width: wp(7)}}></View>
      )}

      {/* Render header title if headerTitle is provided */}

      {headerTitle && <Text style={styles.headerTitle}>{headerTitle}</Text>}

      {/* Render custom left icon image if provided */}

      {leftIconImg ? (
        <TouchableOpacity onPress={() => leftIconImgOnPress()}>
          <Image source={leftIconImg} style={styles.img} resizeMode="contain" />
        </TouchableOpacity>
      ) : (
        // Placeholder view if leftIconImg is not provided

        <View style={{width: wp(7)}}></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(3),
    width: wp(90),
    height: wp(8),
  },
  img: {
    width: wp(7),
    height: wp(7),
  },
  headerTitle: {
    color: Colors.black,
    fontFamily: Fonts.medium,
    fontSize: FontsSize.L,
  },
});

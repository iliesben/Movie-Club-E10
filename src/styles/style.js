import { Dimensions } from 'react-native';

const COLORS = {

  primary: '#B00020',
  secondary: '#B5A90F',
  backgroundColor: '#F4F4F4',

  white: '#fff',
  black: '#000'

};

const LOGO = {
  width: 200,
  height: 200,
  resizeMode: 'cover'
}
const SADIMAGE = {
  width: 150,
  height: 150,
  marginBottom: 40
}

const SHADOW = {
  shadowColor: COLORS.primary,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.7,

  shadowRadius: 2.5,
  elevation: 5,
}

const BUTTON = {
  width: Dimensions.get('window').width * .4,
  height: 70,
}

const BUTTONSEARCH = {
  width: 150,
  height: 50,
}

const BUTTONTRAILER = {
  width: '100%',
  height: 80,
  position: 'absolute',
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30,
  backgroundColor: COLORS.primary
}

const POSTER = {
  width: Dimensions.get('window').width * .255,
  height: 150,
  margin: 5,
}

const ITEMCONTAINER = {
  width: Dimensions.get('window').width * .6,
  flexDirection: 'row',
}

const SIZES = {

  font: 14,
  height: 50,

  radius: 20,
  borderRadius: 5,
  borderRadiusContainer: 12,
  borderWidth: 6,

  padding: 10,
  paddingVertical: 20,
  paddingHorizontal: 30,
  paddingLeft: 15,

  margin: 10,
  marginHorizontal: 20,
  marginVertical: 5,
  marginRight: 20,
  marginLeft: 5,
  marginTop: 20,
  marginBottom: 25,


  h1: 22,
  h2: 20,
  h3: 19,
  h4: 16,

  meduimText: 20,
  smallText: 18,

};

const FONTS = {
  h1: {
    fontSize: SIZES.h1,
    fontWeight: '800'
  },
  h2: {
    fontSize: SIZES.h2,
    fontWeight: '700'
  },
  h3: {
    fontSize: SIZES.h3,
    fontWeight: '600'
  },
  h4: {
    fontSize: SIZES.h4,
    fontWeight: '500'
  },
  buttonText: {
    fontSize: SIZES.smallText,
    fontWeight: '700'
  },
  textInput: {
    fontSize: SIZES.smallText,
    fontWeight: '500'
  },
  SynopsisText: {
    fontSize: SIZES.meduimText,
    fontWeight: '500',
  }
};

export { COLORS, SIZES, FONTS, POSTER, ITEMCONTAINER, BUTTON, SHADOW, BUTTONSEARCH, BUTTONTRAILER, SADIMAGE, LOGO };


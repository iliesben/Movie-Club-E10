const COLORS = {

  primary: '#B00020',
  secondary: '#B5A90F',
  backgroundColor: '#f4f4f4',

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
  shadowColor: '#B00020',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.7,

  shadowRadius: 2.5,
  elevation: 5,
}

const BUTTON = {
  width: 170,
  height: 70,
}

const BUTTONSEARCH = {
  width: 150,
  height: 50,
}

const POSTER = {
  resizeMode: 'contain',
  width: 100,
  height: 150,
  margin: 5,
}

const ITEMCONTAINER = {
  width: 200,
  justifyContent: 'space-around',
  flexDirection: 'column'
}

const SIZES = {

  font: 14,
  height: 50,

  radius: 20,
  borderRadius: 5,
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

  bigText: 30,
  meduimText: 18,
  smallText: 16,

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
  buttonText: {
    fontSize: SIZES.meduimText,
    fontWeight: '700'
  },
  textInput: {
    fontSize: SIZES.meduimText,
    fontWeight: '500'
  },
  sText: {
    fontSize: SIZES.smallText,
    fontWeight: '300',
  }
};

export { COLORS, SIZES, FONTS, POSTER, ITEMCONTAINER, BUTTON, SHADOW, BUTTONSEARCH, SADIMAGE, LOGO };


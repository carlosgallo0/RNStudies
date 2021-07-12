import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
    marginTop: 20,
    alignSelf: 'flex-start'
  },
  input: {
    marginTop: 10,
    color: 'white',
  },
  button: {
    color: 'white',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#A370F7',
    width: 300,
    borderRadius: 10
  },
  buttonText: {color: 'white'},
  buttonSkill: {
    backgroundColor: 'dimgray',
    width: 300,
    marginTop: 4,
    borderRadius: 50,
    opacity: 0.5
  },
  greetings: {
    color: 'white',
    alignSelf: 'flex-start',
  },

  skills: {
    color: 'white',
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})

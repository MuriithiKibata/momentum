import { StyleSheet } from 'react-native';
import { colors } from '../colors';
export const globalStyles = StyleSheet.create({
  flexContainer : {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  flexRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  flexColumnContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    padding: 10,
    borderRadius: 8,
    borderLeftColor: colors.primary,
    borderColor: colors.slate,
    borderWidth: 2,

  },
  text: {
    marginBlock: 10,
  }


});
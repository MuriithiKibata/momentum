import { StyleSheet } from 'react-native';
import { colors } from '../colors';
export const globalStyles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  flexRowContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    gap: 10,
    alignItems: "center",
  },
  flexColumnContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },

  font: {
    fontFamily: "Manrope",
  },

  textStrikethrough: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },

  title: {
    fontFamily: "Manrope",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  paragraph: {
    fontFamily: "Manrope",
    fontSize: 16,
    lineHeight: 24,
  },

  textSmall: {
    fontSize: 10,
    fontWeight: "500",
    color: "#6B7280",
  },

  fontWeightBold: {
    fontWeight: 900,
  },
  fontWeightMedium: {
    fontWeight: 600,
  },
  fontWeightlight: {
    fontWeight: 400,
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
  },

  shadow: {
    backgroundColor: "#ffffff",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 10,
  },
  shadow_small: {
    backgroundColor: "#ffffff",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,

    elevation: 10,
  },
});
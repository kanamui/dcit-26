import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  containerCenter: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerCenterTop: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  movieBtn: {
    borderWidth: 1,
    borderColor: "#333",
    padding: 10,
    marginBottom: 10,
  },
  movieText: {
    fontSize: 16,
  },
  avatar: {
    width: 200,
    height: 200,
  },
  avatarMedium: {
    width: 150,
    height: 150,
    marginTop: 30
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  profileText: {
    fontSize: 16,
  },
  profileSection: {
    fontSize: 20,
    color: '#777'
  }
});

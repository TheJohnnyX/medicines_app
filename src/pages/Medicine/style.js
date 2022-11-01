import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },
  Medicines: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5
  },
  deleteMedicine: {
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  rowMedicine: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5cf",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
  },
  button: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#F92e6a",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default styles
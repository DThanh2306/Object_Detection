import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1, // Đảm bảo hình nền chiếm toàn bộ màn hình
  },
  container: {
    flex: 1,
    justifyContent: "space-between", // Dàn đều không gian giữa các phần tử
    alignItems: "center", // Căn giữa theo chiều ngang
    backgroundColor: "transparent", // Màu nền
    paddingVertical: 130, // Khoảng cách trên dưới cho container
  },
  text: {
    fontSize: 36, // Kích thước chữ
    fontWeight: 400, // Độ đậm chữ
    color: "#FF4081", // Màu chữ
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: "#fff", // Màu nền của nút
    height: 400, // Chiều cao nút
    width: 400, // Chiều rộng nút
    borderRadius: 200, // Bo tròn (1/2 chiều cao hoặc chiều rộng)
    borderColor: "#FF4081", // Đổi màu viền cho hiện đại hơn
    borderWidth: 5, // Độ dày của viền
    justifyContent: "center", // Căn giữa nội dung theo chiều dọc
    alignItems: "center", // Căn giữa nội dung theo chiều ngang
    shadowColor: "#000", // Màu bóng
    shadowOffset: { width: 0, height: 10 }, // Độ dịch chuyển bóng
    shadowOpacity: 0.3, // Độ mờ của bóng
    shadowRadius: 10, // Bán kính mờ của bóng
    elevation: 8, // Hiệu ứng nổi trên Android
  },
  buttonText: {
    fontSize: 38, // Kích thước chữ lớn hơn
    fontWeight: "bold", // In đậm
    color: "#FF4081", // Màu chữ đồng bộ với màu viền
    textShadowColor: "#aaa", // Tạo bóng mờ cho chữ
    textShadowOffset: { width: 1, height: 1 }, // Độ dịch chuyển bóng chữ
    textShadowRadius: 2, // Bán kính mờ bóng chữ
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
  },
});

export default styles;

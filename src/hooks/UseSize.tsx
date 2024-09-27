import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("pc");

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setDeviceType("mobile");
      } else if (width >= 768 && width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("pc");
      }
    };

    // Gọi hàm ngay lập tức để set giá trị ban đầu
    updateDeviceType();

    // Lắng nghe sự thay đổi của kích thước cửa sổ
    window.addEventListener("resize", updateDeviceType);

    // Cleanup event listener khi component bị unmount
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return deviceType;
};

export default useDeviceType;
// api.ts
export const fakeApiCall = (data: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Giả sử API luôn trả về thành công với dữ liệu được gửi đi
        resolve(data);
      }, 1000); // Giả lập thời gian trễ như là gọi API thực tế
    });
  };
  
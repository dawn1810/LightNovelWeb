const axios = require('axios');

async function sendStories() {
  // Mẫu payload
  const storyPayload = {
    name: 'áasa',
    author: 'hu',
    name_chaps: ['Chương 1: sda '],
    chap_ids: ['1uxTsnez6tUZ3kh4T6gNL3a-AiJYrvqNP'],
    genres: ['Horror'],
    status: 'Đang ra',
    summary: 'sdsad',
    image: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/hinh-nen-cute-co-chu-47.jpg',
  };

  // Gửi liên tục 50 truyện
  for (let i = 0; i < 50; i++) {
    storyPayload.name = `Story ${i + 1}`; // Thay đổi tên truyện

    try {
      // Gửi yêu cầu POST đến endpoint của bạn
      const response = await axios.post('YOUR_API_ENDPOINT', storyPayload);

      // In thông báo nếu yêu cầu thành công
      console.log(`Story ${i + 1} sent successfully. Response:`, response.data);
    } catch (error) {
      // Xử lý lỗi nếu có
      console.error(`Error sending Story ${i + 1}:`, error.message);
    }
  }
}

// Gọi hàm để bắt đầu gửi truyện
sendStories();

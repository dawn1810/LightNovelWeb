const { response } = require('express');
const server = require('./vip_pro_lib');

// server.uploadFileToDrive('Backend/demo.js')
server.find_all_Data({table: 'truyen', projection: {_id: 0, name:1, name_chaps:1, chap_ids:1}}).then(response => {
    console.log(response);
});

// {
//     name: '5 anh em siêu nhân trên một chiếc Rocket',
//     name_chaps: [
//       'Chương 1: Đăng xuất  ',
//       'Chương 1: Minh đẹp trai nhất thế giới ',
//       'Chương 1: Minh đẹp trai nhất thế giới ',
//       'Chương 1: Minh đẹp trai nhất thế giới ',
//       'Chương 3: Nguyễn Bình Minh ',
//       'Chương 2: Nguyễn Bình Minh đẹp trai '
//     ],
//     chap_ids: [
//       '1o47OXcclTN4YJBFhEIFIOGTaxJIAsqSo',
//       '1SBEJKnEDCIyIda8xPjqq5R893ZdC6lTf',
//       '1SBEJKnEDCIyIda8xPjqq5R893ZdC6lTf',
//       '1UMNsBJvkKHkZm_l-JGSsTU3VAwtR-WfC',
//       '1sC3FjWBZTlVA6UtpqyoVWmQEfChIJ9IF',
//       '1dT_BVa5jRM5FXQLNgo693pS3Qv4CXn9y'
//     ]
//   },
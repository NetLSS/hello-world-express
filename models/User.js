// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// User 모델 정의
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

// 샘플 데이터 삽입
// (async () => {
//     try {
//       // 테이블 생성 (존재하지 않으면)
//       await sequelize.sync({ force: true });
  
//       // 단일 샘플 데이터 삽입
//       await User.create({
//         name: 'John Doe',
//         email: 'john.doe@example.com'
//       });
  
//       // 여러 샘플 데이터 삽입
//       await User.bulkCreate([
//         {
//           name: 'Jane Doe',
//           email: 'jane.doe@example.com'
//         },
//         {
//           name: 'Alice',
//           email: 'alice@example.com'
//         },
//         {
//           name: 'Bob',
//           email: 'bob@example.com'
//         }
//       ]);
  
//       console.log('샘플 데이터가 성공적으로 삽입되었습니다.');
//     } catch (error) {
//       console.error('샘플 데이터 삽입 중 오류 발생:', error);
//     }
//   })();


module.exports = User;

const mongoose = require('mongoose');

// Định nghĩa schema cho collection users
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Trường bắt buộc
    trim: true // Loại bỏ khoảng trắng ở đầu và cuối
  },
  email: {
    type: String,
    required: true, // Trường bắt buộc
    unique: true, // Đảm bảo email là duy nhất
    trim: true,
    lowercase: true // Chuyển email thành chữ thường
  },
  age: {
    type: Number,
    required: true, // Trường bắt buộc
    min: 0 // Đặt giá trị tối thiểu là 0
  }
}, {
  timestamps: true // Tự động thêm các trường createdAt và updatedAt
});

// Tạo model từ schema
const User = mongoose.model('User', userSchema);

module.exports = User;
const User = require('../model/userModel');

// Controller để thêm người dùng mới
const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!name || !email || age === undefined) {
      return res.status(400).json({ error: 'Name, email, and age are required' });
    }

    // Tạo đối tượng User mới
    const user = new User({ name, email, age });

    // Lưu đối tượng User vào cơ sở dữ liệu
    await user.save();

    // Phản hồi thành công
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    // Xử lý lỗi
    res.status(500).json({ error: error.message });
  }
};


// Phương thức để lấy tất cả users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // Tìm tất cả user trong collection
    res.status(200).json(users); // Trả về danh sách user dưới dạng JSON
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách người dùng', error });
  }
};

module.exports = {
  createUser,
  getAllUsers
};
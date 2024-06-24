const db = require ('../config/db');
const path = require("path");

exports.getUserById = async (req, res) => {
  try {
    const id = req.user.userId;

    if (!id) {
      return res
        .status(404)
        .json({ success: false, message: `user tidak ditemukan` });
    }

    res.status(200).json({ 
            success: true, 
            data: user 
        }
    );
  } 
    
    catch (error) {
    res
      .status(500)
      .json({ 
        success: false, 
        message: "Maaf, Ada kesalahan"
    });
  }
};
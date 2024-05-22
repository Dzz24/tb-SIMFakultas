exports.ubahPassword = async (req, res) => {
    const { email, oldPassword, newPassword, confirmNewPassword } = req.body;
  
    if (!email || !oldPassword || !newPassword || !confirmNewPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Isi Semua Inputanya" });
    }
  
    try {
      const admin = await prisma.admin.findUnique({ where: { email } });
      const dosen = await prisma.dosen.findUnique({ where: { email } });
      const mahasiswa = await prisma.mahasiswa.findUnique({ where: { email } });
  
      let user;
      let userType;
      if (admin) {
        user = admin;
        userType = "admin";
      } else if (dosen) {
        user = dosen;
        userType = "dosen";
      } else if (mahasiswa) {
        user = mahasiswa;
        userType = "mahasiswa";
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Akun tidak ditemukan" });
      }
  
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        ``;
        return res
          .status(401)
          .json({ success: false, message: "Password Lama Salah" });
      }
      if (newPassword !== confirmNewPassword) {
        return res.status(400).json({
          success: false,
          message: "Password baru dan konfirmasi password baru tidak cocok",
        });
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      if (userType === "admin") {
        await prisma.admin.update({
          where: { email },
          data: { password: hashedPassword },
        });
      } else if (userType === "dosen") {
        await prisma.dosen.update({
          where: { email },
          data: { password: hashedPassword },
        });
      } else if (userType === "mahasiswa") {
        await prisma.mahasiswa.update({
          where: { email },
          data: { password: hashedPassword },
        });
      }
  
      return res
        .status(200)
        .json({ success: true, message: "Password berhasil di Ubah" });
    } catch (error) {
      console.error("Ubah password error:", error);
      return res
        .status(500)
        .json({ success: false, message: "Server error: " + error.message });
    }
  };
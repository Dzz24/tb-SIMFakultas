// auth.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { getToken } = require('../utils/utils');
const prisma = new PrismaClient();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(`Received login request for email: ${email}`);

  try {
    // Cari pengguna berdasarkan email
    const user = await prisma.user.findUnique({
      where: { email: email }
    });
    console.log(`User found: ${user}`);

    // Jika pengguna tidak ditemukan, kembalikan respon error
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ error: 'Pengguna tidak ditemukan' });
    }

    // Verifikasi kata sandi
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(`Password match: ${passwordMatch}`);

    // Jika kata sandi tidak cocok, kembalikan respon error
    if (!passwordMatch) {
      console.log('Incorrect password');
      return res.status(401).json({ error: 'Kata sandi salah' });
    }

    // Jika verifikasi berhasil, buat token otentikasi
    const token = getToken(user)
    console.log('Token generated', token);

    // Kembalikan respon berhasil bersama dengan token
    res.status(200).json({ 
      message: 'Login berhasil', 
      data : {
        email: user.email,
        nama: user.nama,
        alamat: user.alamat,
        noHp: user.noHp,
        role: user.role
      },
      token: token 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

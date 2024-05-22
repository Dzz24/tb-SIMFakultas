const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.changePass = async (req, res) => {
    try {
        const {currentPassword, newPassword} = req.body;
        const userId = req.userrss.id

        if (!currentPassword || !newPassword) {
            return res.status(400).json({
                message: 'isi semua kolom'
            })
        }
        
        const user = await prisma.userrss.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return res.status(400).json({
                message: 'Username dan password salah'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Username dan password salah'
            });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);

        await prisma.user.update({
            where: { id: userId },
            data: {
                password:  hashedNewPassword,
            },
        });

        res.status(200).json({ message: 'Password berhasil diubah' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan saat mengubah password' });
    }
}
const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        const {username, email, password, role} = req.body;

        if (username === null || email === null || password === null || role === null) {
            return res.status(400).json({
                message: 'Data tidak boleh kosong'
            })
        }
        const encrypted = await bcrypt.hash(password, 10)
        const newUser = await prisma.userrss.create({
            data : {
                username: username,
                email: email,
                password: encrypted,
                role: role
            }
    })
        const { password: _, ...userData } = newUser;
        res.status(201).json({
        message: 'Akun berhasil ditambahkan',
        data: userData
    });

    } catch (error) {
        res.status(500).json({
            message : 'Ada error'
        })
    }
}
exports.login = async (req, res) => {
    try {
        const {username, password} = req.body;
        
        if (!username || !password) {
            return res.status(400).json({
                message: 'Username dan password harus diisi'
            })
        }
        
        const isMatch = await bcrypt.compare(password, encrypted);
            if (!isMatch) {
                return res.status(400).json({
                    message: 'Username dan password salah'
                })
            }

        const token = jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        },
        SECRET_KEY,
        {expiresIn: '1h'});

        res.status(200).json({
            message: 'Login berhasil',
            token: token
        });

    } catch (error) {
    return res.status(500).json({
        message : 'Ada apa'
})
}
}
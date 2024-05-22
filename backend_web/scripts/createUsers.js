const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function createUser() {
  const email = 'frizqyadela@gmail.com';
  const password = '123456789';
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.User.create({
      data: {
        nama: 'Frizqya Dela Pratiwi',
        email: email,
        password: hashedPassword,
        alamat: 'Komplek Pemda',
        noHp: '082387032882',
        role: 'akuntan', 
      },
    });
    console.log('User created:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();

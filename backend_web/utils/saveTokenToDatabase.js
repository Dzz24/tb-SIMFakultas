const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const saveTokenToDatabase = async (userId, token) => {
  try {
    await prisma.token.create({
      data: {
        userId: userId,
        token: token,
        expiresAt: new Date(Date.now() + 3600000) // Contoh: token berlaku selama 1 jam
      }
    });
  } catch (error) {
    throw error;
  }
};

module.exports = saveTokenToDatabase;

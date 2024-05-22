-- CreateTable
CREATE TABLE "mahasiswa" (
    "nama" VARCHAR(100) NOT NULL,
    "nim" VARCHAR(100),

    CONSTRAINT "mahasiswa_pkey" PRIMARY KEY ("nama")
);

-- CreateTable
CREATE TABLE "tabel_user" (
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100),

    CONSTRAINT "tabel_user_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "userrss" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "role" VARCHAR(100) NOT NULL,

    CONSTRAINT "userrss_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userrss_email_key" ON "userrss"("email");

-- CreateIndex
CREATE UNIQUE INDEX "userrss_username_key" ON "userrss"("username");

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'PRIVILEGE');

-- CreateTable
CREATE TABLE "User" (
    "login" TEXT NOT NULL,
    "username" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "notice" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "scoreMoney" INTEGER NOT NULL DEFAULT 1000,
    "scoreSpinning" INTEGER NOT NULL DEFAULT 5,

    CONSTRAINT "User_pkey" PRIMARY KEY ("login")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

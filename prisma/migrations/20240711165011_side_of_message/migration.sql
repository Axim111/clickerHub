/*
  Warnings:

  - Added the required column `side` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Side" AS ENUM ('OPPOSITE', 'ME');

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "side" "Side" NOT NULL;

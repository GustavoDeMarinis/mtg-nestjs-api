/*
  Warnings:

  - You are about to drop the column `color` on the `Card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "color",
ADD COLUMN     "colorIdentity" "Color"[];

-- CreateTable
CREATE TABLE "ManaCost" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "label" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,

    CONSTRAINT "ManaCost_pkey" PRIMARY KEY ("id")
);

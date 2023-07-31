/*
  Warnings:

  - You are about to drop the column `cardSubTypeId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `cardSuperTypeId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `cardTypeId` on the `Card` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_cardSubTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_cardSuperTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_cardTypeId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "cardSubTypeId",
DROP COLUMN "cardSuperTypeId",
DROP COLUMN "cardTypeId";

-- CreateTable
CREATE TABLE "_CardToCardType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CardToCardSuperType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CardToCardSubType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CardToCardType_AB_unique" ON "_CardToCardType"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToCardType_B_index" ON "_CardToCardType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CardToCardSuperType_AB_unique" ON "_CardToCardSuperType"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToCardSuperType_B_index" ON "_CardToCardSuperType"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CardToCardSubType_AB_unique" ON "_CardToCardSubType"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToCardSubType_B_index" ON "_CardToCardSubType"("B");

-- AddForeignKey
ALTER TABLE "_CardToCardType" ADD CONSTRAINT "_CardToCardType_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToCardType" ADD CONSTRAINT "_CardToCardType_B_fkey" FOREIGN KEY ("B") REFERENCES "CardType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToCardSuperType" ADD CONSTRAINT "_CardToCardSuperType_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToCardSuperType" ADD CONSTRAINT "_CardToCardSuperType_B_fkey" FOREIGN KEY ("B") REFERENCES "CardSuperType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToCardSubType" ADD CONSTRAINT "_CardToCardSubType_A_fkey" FOREIGN KEY ("A") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardToCardSubType" ADD CONSTRAINT "_CardToCardSubType_B_fkey" FOREIGN KEY ("B") REFERENCES "CardSubType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

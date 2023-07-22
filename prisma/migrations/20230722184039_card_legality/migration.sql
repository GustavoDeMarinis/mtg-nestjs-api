-- CreateEnum
CREATE TYPE "Legalities" AS ENUM ('Banned', 'Restricted', 'Legal', 'NotLegal');

-- CreateTable
CREATE TABLE "CardLegality" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cardId" TEXT NOT NULL,
    "standard" "Legalities" NOT NULL,
    "future" "Legalities" NOT NULL,
    "historic" "Legalities" NOT NULL,
    "gladiator" "Legalities" NOT NULL,
    "pioneer" "Legalities" NOT NULL,
    "explorer" "Legalities" NOT NULL,
    "modern" "Legalities" NOT NULL,
    "legacy" "Legalities" NOT NULL,
    "pauper" "Legalities" NOT NULL,
    "vintage" "Legalities" NOT NULL,
    "penny" "Legalities" NOT NULL,
    "commander" "Legalities" NOT NULL,
    "oathbreaker" "Legalities" NOT NULL,
    "brawl" "Legalities" NOT NULL,
    "historicBrawl" "Legalities" NOT NULL,
    "alchemy" "Legalities" NOT NULL,
    "pauperCommander" "Legalities" NOT NULL,
    "duel" "Legalities" NOT NULL,
    "oldschool" "Legalities" NOT NULL,
    "premodern" "Legalities" NOT NULL,
    "preedh" "Legalities" NOT NULL,

    CONSTRAINT "CardLegality_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CardLegality_cardId_key" ON "CardLegality"("cardId");

-- AddForeignKey
ALTER TABLE "CardLegality" ADD CONSTRAINT "CardLegality_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

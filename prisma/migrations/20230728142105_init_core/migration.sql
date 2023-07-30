-- CreateEnum
CREATE TYPE "Color" AS ENUM ('White', 'Blue', 'Black', 'Red', 'Green');

-- CreateEnum
CREATE TYPE "Legalities" AS ENUM ('Banned', 'Restricted', 'NotLegal', 'Legal');

-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('Basic', 'Common', 'Uncommon', 'Rare', 'Mythic');

-- CreateTable
CREATE TABLE "SetType" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "SetType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManaCost" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "label" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,

    CONSTRAINT "ManaCost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "isFoil" BOOLEAN NOT NULL,
    "manaCost" TEXT[],
    "cardImageUrl" TEXT NOT NULL,
    "colorIdentity" "Color"[],
    "flavorText" TEXT,
    "power" TEXT,
    "toughness" TEXT,
    "rarity" "Rarity" NOT NULL,
    "setId" TEXT NOT NULL,
    "standardLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "futureLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "historicLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "gladiatorLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "pioneerLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "explorerLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "modernLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "legacyLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "pauperLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "vintageLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "pennyLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "commanderLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "oathbreakerLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "brawlLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "historicBrawlLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "alchemyLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "pauperCommanderLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "duelLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "oldschoolLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "premodernLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "preedhLegality" "Legalities" NOT NULL DEFAULT 'NotLegal',
    "cardTypeId" TEXT,
    "cardSuperTypeId" TEXT,
    "cardSubTypeId" TEXT,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Set" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "iconUrl" TEXT,
    "name" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "setTypeId" TEXT NOT NULL,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardType" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CardType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardSuperType" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CardSuperType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardSubType" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "cardTypeId" TEXT NOT NULL,

    CONSTRAINT "CardSubType_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_name_key" ON "Card"("name");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_cardTypeId_fkey" FOREIGN KEY ("cardTypeId") REFERENCES "CardType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_cardSuperTypeId_fkey" FOREIGN KEY ("cardSuperTypeId") REFERENCES "CardSuperType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_cardSubTypeId_fkey" FOREIGN KEY ("cardSubTypeId") REFERENCES "CardSubType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_setTypeId_fkey" FOREIGN KEY ("setTypeId") REFERENCES "SetType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardSubType" ADD CONSTRAINT "CardSubType_cardTypeId_fkey" FOREIGN KEY ("cardTypeId") REFERENCES "CardType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

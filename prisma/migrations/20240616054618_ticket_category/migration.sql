/*
  Warnings:

  - The primary key for the `admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `hash` on the `admin` table. All the data in the column will be lost.
  - Added the required column `uuid` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryName` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admin` DROP PRIMARY KEY,
    DROP COLUMN `hash`,
    ADD COLUMN `uuid` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`uuid`);

-- AlterTable
ALTER TABLE `ticket` ADD COLUMN `categoryName` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `TicketCategory` (
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_categoryName_fkey` FOREIGN KEY (`categoryName`) REFERENCES `TicketCategory`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

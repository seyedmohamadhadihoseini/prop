/*
  Warnings:

  - You are about to alter the column `isVerified` on the `customer` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `customer` MODIFY `isVerified` ENUM('No', 'Pending', 'Yes') NOT NULL DEFAULT 'No';

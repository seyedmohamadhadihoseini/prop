/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `customer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `Admin_userId_fkey`;

-- DropForeignKey
ALTER TABLE `customer` DROP FOREIGN KEY `Customer_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `isVerified` ENUM('No', 'Pending', 'Yes') NULL DEFAULT 'No';

-- DropTable
DROP TABLE `admin`;

-- DropTable
DROP TABLE `customer`;

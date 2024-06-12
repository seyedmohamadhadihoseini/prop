-- AlterTable
ALTER TABLE `ticket` ADD COLUMN `level` ENUM('Pending', 'Answered', 'Closed') NOT NULL DEFAULT 'Pending';

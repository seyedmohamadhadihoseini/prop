-- DropForeignKey
ALTER TABLE `ticket` DROP FOREIGN KEY `Ticket_categoryName_fkey`;

-- AddForeignKey
ALTER TABLE `Ticket` ADD CONSTRAINT `Ticket_categoryName_fkey` FOREIGN KEY (`categoryName`) REFERENCES `TicketCategory`(`name`) ON DELETE CASCADE ON UPDATE CASCADE;

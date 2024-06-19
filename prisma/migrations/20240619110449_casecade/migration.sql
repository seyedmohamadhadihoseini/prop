-- DropForeignKey
ALTER TABLE `ticketmessage` DROP FOREIGN KEY `TicketMessage_userId_fkey`;

-- AddForeignKey
ALTER TABLE `TicketMessage` ADD CONSTRAINT `TicketMessage_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

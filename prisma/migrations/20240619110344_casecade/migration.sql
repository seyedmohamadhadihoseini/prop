-- DropForeignKey
ALTER TABLE `ticketmessage` DROP FOREIGN KEY `TicketMessage_ticketId_fkey`;

-- AddForeignKey
ALTER TABLE `TicketMessage` ADD CONSTRAINT `TicketMessage_ticketId_fkey` FOREIGN KEY (`ticketId`) REFERENCES `Ticket`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

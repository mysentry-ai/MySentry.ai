-- Run only in the owner-approved db.dentasmart.ai/manus-mysentry database.
-- Standalone creation script: no legacy migrations, table changes, or data writes.
CREATE TABLE `download_activity_events` (
  `visitId` varchar(36) NOT NULL,
  `eventType` enum('visit','auto_redirect','store_click') NOT NULL,
  `platform` enum('ios','android','other') NOT NULL,
  `store` enum('none','ios','android','ring') NOT NULL,
  `receivedAt` bigint unsigned NOT NULL,
  CONSTRAINT `download_activity_events_visitId_eventType_store_pk`
    PRIMARY KEY (`visitId`, `eventType`, `store`),
  INDEX `download_activity_received_at_idx` (`receivedAt`)
);

<?php
namespace TYPO3\FLOW3\Persistence\Doctrine\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration,
	Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your need!
 */
class Version20120730011115 extends AbstractMigration {

	/**
	 * @param Schema $schema
	 * @return void
	 */
	public function up(Schema $schema) {
			// this up() migration is autogenerated, please modify it to your needs
		$this->abortIf($this->connection->getDatabasePlatform()->getName() != "mysql");
		
		$this->addSql("CREATE TABLE brain_domain_model_timespan (flow3_persistence_identifier VARCHAR(40) NOT NULL, action VARCHAR(40) DEFAULT NULL, billed TINYINT(1) NOT NULL, end DATETIME NOT NULL, start DATETIME NOT NULL, INDEX IDX_AC46F03B47CC8C92 (action), PRIMARY KEY(flow3_persistence_identifier)) ENGINE = InnoDB");
		$this->addSql("ALTER TABLE brain_domain_model_timespan ADD CONSTRAINT FK_AC46F03B47CC8C92 FOREIGN KEY (action) REFERENCES brain_domain_model_action (flow3_persistence_identifier)");
		$this->addSql("ALTER TABLE brain_domain_model_action ADD burning TINYINT(1) NOT NULL, ADD completed TINYINT(1) NOT NULL");
	}

	/**
	 * @param Schema $schema
	 * @return void
	 */
	public function down(Schema $schema) {
			// this down() migration is autogenerated, please modify it to your needs
		$this->abortIf($this->connection->getDatabasePlatform()->getName() != "mysql");
		
		$this->addSql("DROP TABLE brain_domain_model_timespan");
		$this->addSql("ALTER TABLE brain_domain_model_action DROP burning, DROP completed");
	}
}

?>
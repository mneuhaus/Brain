<?php
namespace TYPO3\FLOW3\Persistence\Doctrine\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration,
	Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your need!
 */
class Version20120717151659 extends AbstractMigration {

	/**
	 * @param Schema $schema
	 * @return void
	 */
	public function up(Schema $schema) {
			// this up() migration is autogenerated, please modify it to your needs
		$this->abortIf($this->connection->getDatabasePlatform()->getName() != "mysql");
		
		$this->addSql("CREATE TABLE brain_domain_model_information_contexts_join (brain_information VARCHAR(40) NOT NULL, brain_context VARCHAR(40) NOT NULL, INDEX IDX_659A9EFA17BAF490 (brain_information), INDEX IDX_659A9EFA7294B1E2 (brain_context), PRIMARY KEY(brain_information, brain_context)) ENGINE = InnoDB");
		$this->addSql("ALTER TABLE brain_domain_model_information_contexts_join ADD CONSTRAINT FK_659A9EFA17BAF490 FOREIGN KEY (brain_information) REFERENCES brain_domain_model_information (flow3_persistence_identifier)");
		$this->addSql("ALTER TABLE brain_domain_model_information_contexts_join ADD CONSTRAINT FK_659A9EFA7294B1E2 FOREIGN KEY (brain_context) REFERENCES brain_domain_model_context (flow3_persistence_identifier)");
		$this->addSql("ALTER TABLE brain_domain_model_information ADD name VARCHAR(255) NOT NULL, ADD variant VARCHAR(255) NOT NULL, ADD content LONGTEXT NOT NULL, ADD username VARCHAR(255) NOT NULL, ADD password VARCHAR(255) NOT NULL, ADD host VARCHAR(255) NOT NULL, ADD url VARCHAR(255) NOT NULL, ADD yaml LONGTEXT NOT NULL, ADD tabular LONGTEXT NOT NULL, DROP title, DROP type, DROP body");
	}

	/**
	 * @param Schema $schema
	 * @return void
	 */
	public function down(Schema $schema) {
			// this down() migration is autogenerated, please modify it to your needs
		$this->abortIf($this->connection->getDatabasePlatform()->getName() != "mysql");
		
		$this->addSql("DROP TABLE brain_domain_model_information_contexts_join");
		$this->addSql("ALTER TABLE brain_domain_model_information ADD title VARCHAR(255) NOT NULL, ADD type VARCHAR(255) NOT NULL, ADD body VARCHAR(255) NOT NULL, DROP name, DROP variant, DROP content, DROP username, DROP password, DROP host, DROP url, DROP yaml, DROP tabular");
	}
}

?>
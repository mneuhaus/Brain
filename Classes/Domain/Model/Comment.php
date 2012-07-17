<?php
namespace Brain\Domain\Model;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;
use Doctrine\ORM\Mapping as ORM;

/**
 * A Comment
 *
 * @FLOW3\Entity
 */
class Comment {

	/**
	 * The body
	 * @var string
	 */
	protected $body;

	/**
	 * The owner
	 * @var \Brain\Domain\Model\User
	 * @ORM\ManyToOne()
	 */
	protected $owner;


	/**
	 * Get the Comment's body
	 *
	 * @return string The Comment's body
	 */
	public function getBody() {
		return $this->body;
	}

	/**
	 * Sets this Comment's body
	 *
	 * @param string $body The Comment's body
	 * @return void
	 */
	public function setBody($body) {
		$this->body = $body;
	}

	/**
	 * Get the Comment's owner
	 *
	 * @return \Brain\Domain\Model\User The Comment's owner
	 */
	public function getOwner() {
		return $this->owner;
	}

	/**
	 * Sets this Comment's owner
	 *
	 * @param \Brain\Domain\Model\User $owner The Comment's owner
	 * @return void
	 */
	public function setOwner($owner) {
		$this->owner = $owner;
	}

}
?>
<?php
namespace Brain\Domain\Model;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;
use Doctrine\ORM\Mapping as ORM;

/**
 * A Information
 *
 * @FLOW3\Entity
 */
class Information {

	/**
	 * The title
	 * @var string
	 */
	protected $title;

	/**
	 * The type
	 * @var string
	 */
	protected $type;

	/**
	 * The body
	 * @var string
	 */
	protected $body;


	/**
	 * Get the Information's title
	 *
	 * @return string The Information's title
	 */
	public function getTitle() {
		return $this->title;
	}

	/**
	 * Sets this Information's title
	 *
	 * @param string $title The Information's title
	 * @return void
	 */
	public function setTitle($title) {
		$this->title = $title;
	}

	/**
	 * Get the Information's type
	 *
	 * @return string The Information's type
	 */
	public function getType() {
		return $this->type;
	}

	/**
	 * Sets this Information's type
	 *
	 * @param string $type The Information's type
	 * @return void
	 */
	public function setType($type) {
		$this->type = $type;
	}

	/**
	 * Get the Information's body
	 *
	 * @return string The Information's body
	 */
	public function getBody() {
		return $this->body;
	}

	/**
	 * Sets this Information's body
	 *
	 * @param string $body The Information's body
	 * @return void
	 */
	public function setBody($body) {
		$this->body = $body;
	}

}
?>
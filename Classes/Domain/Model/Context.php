<?php
namespace Brain\Domain\Model;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;
use Doctrine\ORM\Mapping as ORM;

/**
 * A Context
 *
 * @FLOW3\Entity
 */
class Context {

	/**
	 * The tag
	 * @var string
	 */
	protected $tag;

	/**
	 * The title
	 * @var string
	 */
	protected $title = "";

	public function __toString() {
		return $this->getTag();
	}

	/**
	 * Get the Context's tag
	 *
	 * @return string The Context's tag
	 */
	public function getTag() {
		return $this->tag;
	}

	/**
	 * Sets this Context's tag
	 *
	 * @param string $tag The Context's tag
	 * @return void
	 */
	public function setTag($tag) {
		$this->tag = $tag;
	}

	/**
	 * Get the Context's title
	 *
	 * @return string The Context's title
	 */
	public function getTitle() {
		return $this->title;
	}

	/**
	 * Sets this Context's title
	 *
	 * @param string $title The Context's title
	 * @return void
	 */
	public function setTitle($title) {
		$this->title = $title;
	}

}
?>
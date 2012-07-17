<?php
namespace Brain\Domain\Model;

/*                                                                        *
 * This script belongs to the FLOW3 package "Party".                      *
 *                                                                        *
 * It is free software; you can redistribute it and/or modify it under    *
 * the terms of the GNU Lesser General Public License, either version 3   *
 *  of the License, or (at your option) any later version.                *
 *                                                                        *
 * The TYPO3 project - inspiring people to share!                         *
 *                                                                        */

use Doctrine\ORM\Mapping as ORM;
use TYPO3\FLOW3\Annotations as FLOW3;

/**
 * A person
 *
 * @FLOW3\Entity
 */
class User extends \TYPO3\Party\Domain\Model\Person {
	/**
	 * @var \Doctrine\Common\Collections\Collection<\Brain\Domain\Model\Action>
	 * @ORM\OneToMany(mappedBy="owner")
	 */
	protected $actions;

	/**
	 * @var \Doctrine\Common\Collections\Collection<\TYPO3\FLOW3\Security\Account>
	 * @ORM\OneToMany(mappedBy="party", cascade={"persist"})
	 */
	protected $accounts;

	/**
	 * Constructor
	 *
	 * @return void
	 */
	public function __construct() {
		parent::__construct();
		$this->actions = new \Doctrine\Common\Collections\ArrayCollection();
	}

	public function getUsername() {
		return $this->getAccounts()->first()->getAccountIdentifier();
	}

	/**
	 * Assigns the given action to this party. Note: The internal reference of the action is
	 * set to this party.
	 *
	 * @param \Brain\Domain\Model\Action $action The action
	 * @return void
	 */
	public function addAction(\Brain\Domain\Model\Action $action) {
		$this->actions->add($action);
		$action->setParty($this);
	}

	/**
	 * Remove an action from this party
	 *
	 * @param \Brain\Domain\Model\Action $action The action to remove
	 * @return void
	 */
	public function removeAction(\Brain\Domain\Model\Action $action) {
		$this->actions->removeElement($action);
	}

	/**
	 * Returns the actions of this party
	 *
	 * @return \Doctrine\Common\Collections\Collection All assigned Brain\Domain\Model\Action objects
	 */
	public function getActions() {
		return $this->actions;
	}

	/**
	 * Returns the accounts of this party
	 *
	 * @param \Doctrine\Common\Collections\Collection $accounts
	 */
	public function setAccounts($accounts) {
		$this->accounts = $accounts;
	}

	public function getEmail() {
		return $this->getPrimaryElectronicAddress()->getIdentifier();
	}

	public function getAvatar() {
		return 'http://www.gravatar.com/avatar/' . md5($this->getEmail());
	}
}

?>
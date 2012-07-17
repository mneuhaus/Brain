<?php
namespace Brain\Domain\Model;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;
use Doctrine\ORM\Mapping as ORM;

/**
 * A Action
 *
 * @FLOW3\Entity
 */
class Action {
	/**
	 * @FLOW3\Inject
	 * @var \Brain\Domain\Repository\ContextRepository
	 */
	protected $contextRepository;

	/**
	 * @FLOW3\Inject
	 * @var \Brain\Domain\Repository\UserRepository
	 */
	protected $userRepository;

	/**
	 * The title
	 * @var string
	 */
	protected $title;

	/**
	 * The description
	 * @var string
	 */
	protected $description = "";

	/**
	 * @var \Doctrine\Common\Collections\Collection<\Brain\Domain\Model\Context>
	 * @ORM\ManyToMany()
	 */
	protected $contexts;

	/**
	 * The creation date
	 * @var \DateTime
	 */
	protected $creationDate;

	/**
	 * The owner
	 * @var \Brain\Domain\Model\User
	 * @ORM\ManyToOne(inversedBy="actions")
	 */
	protected $owner;

	/**
	 * The assignee
	 * @var \Brain\Domain\Model\User
	 * @ORM\ManyToOne()
	 */
	protected $assignee;

	public function __construct() {
		$this->contexts = new \Doctrine\Common\Collections\ArrayCollection();
		$this->creationDate = new \DateTime();
	}

	/**
	 * Get the Action's title
	 *
	 * @return string The Action's title
	 */
	public function getTitle() {
		return $this->title;
	}

	/**
	 * Sets this Action's title
	 *
	 * @param string $title The Action's title
	 * @return void
	 */
	public function setTitle($title) {
		$this->title = $title;
	}

	/**
	 * Get the Action's description
	 *
	 * @return string The Action's description
	 */
	public function getDescription() {
		return $this->description;
	}

	/**
	 * Sets this Action's description
	 *
	 * @param string $description The Action's description
	 * @return void
	 */
	public function setDescription($description) {
		$this->description = $description;
	}

	/**
	 * Get the Action's contexts
	 *
	 * @return array The Action's contexts
	 */
	public function getContexts() {
		return $this->contexts;
	}

	/**
	 * Sets this Action's contexts
	 *
	 * @param array $contexts The Action's contexts
	 * @return void
	 */
	public function setContexts(array $contexts) {
		$this->contexts = $contexts;
	}

	/**
	 * Sets this Action's contexts
	 *
	 * @param mixed $contexts The Action's contexts
	 * @return void
	 */
	public function addContext($context) {
		if(is_string($context))
			$context = $this->contextRepository->get($context);
		$this->contexts->add($context);
	}

	/**
	 * Get the Action's creation date
	 *
	 * @return \DateTime The Action's creation date
	 */
	public function getCreationDate() {
		return $this->creationDate;
	}

	/**
	 * Sets this Action's creation date
	 *
	 * @param \DateTime $creationDate The Action's creation date
	 * @return void
	 */
	public function setCreationDate($creationDate) {
		$this->creationDate = $creationDate;
	}

	/**
	 * Get the Action's owner
	 *
	 * @return \Brain\Domain\Model\User The Action's owner
	 */
	public function getOwner() {
		return $this->owner;
	}

	/**
	 * Sets this Action's owner
	 *
	 * @param \Brain\Domain\Model\User $owner The Action's owner
	 * @return void
	 */
	public function setOwner($owner) {
		$this->owner = $owner;
	}

	/**
	 * Get the Action's assignee
	 *
	 * @return \Brain\Domain\Model\User The Action's assignee
	 */
	public function getAssignee() {
		return $this->assignee;
	}

	/**
	 * Sets this Action's assignee
	 *
	 * @param \Brain\Domain\Model\User|string $assignee The Action's assignee
	 * @return void
	 */
	public function setAssignee($assignee) {
		if($assignee instanceof $assignee){
			$this->assignee = $assignee;
		} else {
			$this->assignee = $this->userRepository->findOneByUsername($assignee);
		}
	}

}
?>
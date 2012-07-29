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
     * @var \Doctrine\Common\Collections\Collection<\Brain\Domain\Model\Timespan>
     * @ORM\OneToMany(mappedBy="action", cascade={"persist"})
     */
    protected $timespans;
    
    /**
     * 
     * @var boolean
     */
    protected $completed = false;

    /**
     * @param  $completed
     */
    public function setCompleted($completed) {
        $this->completed = $completed;
    }
    
    /**
     * @return 
     */
    public function getCompleted() {
        return $this->completed;
    }



    /**
     * The assignee
     * @var \Brain\Domain\Model\User
     * @ORM\ManyToOne()
     */
    protected $assignee;

    /**
     * @FLOW3\Inject
     * @var \Brain\Domain\Repository\ContextRepository
     */
    protected $contextRepository;

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
     * The description
     * @var string
     */
    protected $description = '';

    /**
     * The owner
     * @var \Brain\Domain\Model\User
     * @ORM\ManyToOne(inversedBy="actions")
     */
    protected $owner;

    /**
     * @var \DateTime
     */
    protected $skippedTill;

    /**
     * The title
     * @var string
     */
    protected $title;

    /**
     * @FLOW3\Inject
     * @var \Brain\Domain\Repository\UserRepository
     */
    protected $userRepository;

    /**
     * TODO: Document this Method! ( __construct )
     */
    public function __construct() {
        $this->contexts = new \Doctrine\Common\Collections\ArrayCollection();
        $this->creationDate = new \DateTime();
    }

    /**
     * Sets this Action's contexts
     *
     * @param mixed $contexts The Action's contexts
     * @return void
     */
    public function addContext($context) {
        if (is_string($context)) {
            $context = $this->contextRepository->get($context);
        }
        $this->contexts->add($context);
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
     * Get the Action's contexts
     *
     * @return array The Action's contexts
     */
    public function getContexts() {
        return $this->contexts;
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
     * Get the Action's description
     *
     * @return string The Action's description
     */
    public function getDescription() {
        return $this->description;
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
     * Get the Action's creation date
     *
     * @return \DateTime The Action's creation date
     */
    public function getSkippedTill() {
        return $this->skippedTill;
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
     * Sets this Action's assignee
     *
     * @param \Brain\Domain\Model\User|string $assignee The Action's assignee
     * @return void
     */
    public function setAssignee($assignee) {
        if ($assignee instanceof $assignee) {
            $this->assignee = $assignee;
        } else {
            $this->assignee = $this->userRepository->findOneByUsername($assignee);
        }
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
     * Sets this Action's creation date
     *
     * @param \DateTime $creationDate The Action's creation date
     * @return void
     */
    public function setCreationDate($creationDate) {
        $this->creationDate = $creationDate;
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
     * Sets this Action's owner
     *
     * @param \Brain\Domain\Model\User $owner The Action's owner
     * @return void
     */
    public function setOwner($owner) {
        $this->owner = $owner;
    }

    /**
     * Sets this Action's creation date
     *
     * @param \DateTime $skippedTill The Action's creation date
     * @return void
     */
    public function setSkippedTill($skippedTill) {
        $this->skippedTill = $skippedTill;
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

}

?>
<?php
namespace Brain\Domain\Model;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;
use Doctrine\ORM\Mapping as ORM;

/**
 * A Timespan
 *
 * @FLOW3\Entity
 */
class Timespan {

    /**
     * @var \Brain\Domain\Model\Action
     * @ORM\ManyToOne()
     */
    protected $action;

    /**
     * @var boolean
     */
    protected $billed = false;

    /**
     * @var \DateTime
     */
    protected $end;

    /**
     * @var \DateTime
     */
    protected $start;

    /**
     * @return \Brain\Domain\Model\Action
     */
    public function getAction() {
        return $this->action;
    }

    /**
     * @param \Brain\Domain\Model\Action $action
     */
    public function setAction($action) {
        $this->action = $action;
    }

    /**
     * @return boolean
     */
    public function getBilled() {
        return $this->billed;
    }

    /**
     * @param boolean $billed
     */
    public function setBilled($billed) {
        $this->billed = $billed;
    }

    /**
     * @return \DateTime
     */
    public function getEnd() {
        return $this->end;
    }

    /**
     * @param \DateTime $end
     */
    public function setEnd($end) {
        $this->end = $end;
    }

    /**
     * @return \DateTime
     */
    public function getStart() {
        return $this->start;
    }

    /**
     * @param \DateTime $start
     */
    public function setStart($start) {
        $this->start = $start;
    }

}

?>
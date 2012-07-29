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

}

?>
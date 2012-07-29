<?php
namespace Brain\Domain\Repository;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;

/**
 * A repository for Actions
 *
 * @FLOW3\Scope("singleton")
 */
class ActionRepository extends \TYPO3\FLOW3\Persistence\Repository {
	/**
	 * @var array
	 */
	protected $defaultOrderings = array('skippedTill' => "ASC");
}
?>
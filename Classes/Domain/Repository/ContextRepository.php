<?php
namespace Brain\Domain\Repository;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;

/**
 * A repository for Contexts
 *
 * @FLOW3\Scope("singleton")
 */
class ContextRepository extends \TYPO3\FLOW3\Persistence\Repository {
	public function get($tag) {
		$context = $this->findOneByTag($tag);
		if(is_null($context)){
			$context = new \Brain\Domain\Model\Context();
			$context->setTag($tag);
			$this->add($context);
		}
		return $context;
	}
}
?>
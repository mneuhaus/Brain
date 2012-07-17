<?php
namespace Brain\Domain\Repository;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;

/**
 * A repository for Users
 *
 * @FLOW3\Scope("singleton")
 */
class UserRepository extends \TYPO3\FLOW3\Persistence\Repository {
	/**
	 * @FLOW3\Inject
	 * @var \TYPO3\FLOW3\Security\AccountRepository
	 */
	protected $accountRepository;

	public function findOneByName($name) {
		$user = $this->findOneByName($name);
		if(is_null($user)){
			$user = new \Brain\Domain\Model\User();
			$user->setName($name);
			$this->add($user);
		}
		return $user;
	}

	public function findOneByUsername($username) {
		$account = $this->accountRepository->findByAccountIdentifierAndAuthenticationProviderName($username, "BrainProvider");
		return $account->getParty();
	}
}
?>
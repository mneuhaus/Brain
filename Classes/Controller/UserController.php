<?php
namespace Brain\Controller;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;

/**
 * User controller for the Brain package 
 *
 * @FLOW3\Scope("singleton")
 */
class UserController extends \TYPO3\FLOW3\Mvc\Controller\ActionController {
	/**
	 * @FLOW3\Inject
	 * @var \Brain\Domain\Repository\UserRepository
	 */
	protected $userRepository;
	
	/**
	 * @var \TYPO3\FLOW3\Security\Cryptography\HashService
	 * @FLOW3\Inject
	 */
	protected $hashService;

	/**
	 * Index action
	 *
	 * @return void
	 */
	public function indexAction() {
		$this->view->assign('users', $this->userRepository->findAll());
	}

	/**
	 * Index action
	 *
	 * @param \Brain\Domain\Model\User $user
	 * @FLOW3\IgnoreValidation("$user")
	 * @return void
	 */
	public function editAction(\Brain\Domain\Model\User $user = null) {
		$this->view->assign("user", $user);
	}

	public function save($formRuntime) {
		$formValues = $formRuntime->getFormState()->getFormValues();
		$object = $formValues["item"];
		$class = get_class($object);
		
		$account = $object->getAccounts()->first();
		$account->setAuthenticationProviderName("BrainProvider");
		#$password = $this->hashService->hashPassword($account->getCredentialsSource(), "default");
		#$account->setCredentialsSource($password);
		$account->addRole(new \TYPO3\FLOW3\Security\Policy\Role("Administrator"));
		$account->setParty($object);

		$object->addAccount($account);
		$this->userRepository->update($object);

		$this->redirect("index");
	}

	/**
	 * Index action
	 *
	 * @param \TYPO3\FLOW3\Security\Account $account
	 * @FLOW3\IgnoreValidation("$account")
	 * @return void
	 */
	public function newAction(\TYPO3\FLOW3\Security\Account $account = null) {
	}

	public function create($formRuntime) {
		$formValues = $formRuntime->getFormState()->getFormValues();
		$object = $formValues["item"];
		$class = get_class($object);
		
		$account = $object->getAccounts()->first();
		$account->setAuthenticationProviderName("BrainProvider");
		$password = $this->hashService->hashPassword($account->getCredentialsSource(), "default");
		$account->setCredentialsSource($password);
		$account->addRole(new \TYPO3\FLOW3\Security\Policy\Role("Administrator"));
		$account->setParty($object);

		$object->addAccount($account);
		$this->userRepository->add($object);

		$this->redirect("index");
	}

	/**
	 * Initializes the controller
	 *
	 * This method should be called by the concrete processRequest() method.
	 * 
	 * ( I need this function to be public to call it from the ControllerCallbackFinisher )
	 *
	 * @param \TYPO3\FLOW3\Mvc\RequestInterface $request
	 * @param \TYPO3\FLOW3\Mvc\ResponseInterface $response
	 * @throws \TYPO3\FLOW3\Mvc\Exception\UnsupportedRequestTypeException
	 */
	public function initializeController(\TYPO3\FLOW3\Mvc\RequestInterface $request, \TYPO3\FLOW3\Mvc\ResponseInterface $response) {
		parent::initializeController($request, $response);
	}
}

?>
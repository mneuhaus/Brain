<?php
namespace Brain\Controller;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;

/**
 * Task controller for the Brain package
 *
 * @FLOW3\Scope("singleton")
 */
class ActionController extends \TYPO3\FLOW3\Mvc\Controller\ActionController {

    /**
     * @FLOW3\Inject
     * @var \TYPO3\FLOW3\Security\AccountRepository
     */
    protected $accountRepository;

    /**
     * @FLOW3\Inject
     * @var \Brain\Domain\Repository\ActionRepository
     */
    protected $actionRepository;

    /**
     * @FLOW3\Inject
     * @var \Brain\Domain\Repository\ContextRepository
     */
    protected $contextRepository;

    /**
     * @FLOW3\Inject
     * @var \TYPO3\FLOW3\Security\Context
     */
    protected $securityContext;

    /**
     * @FLOW3\Inject
     * @var \Brain\Domain\Repository\UserRepository
     */
    protected $userRepository;

    /**
     * Index action
     *
     * @param string $action
     * @return void
     */
    public function createAction($action) {
        $actionObject = new \Brain\Domain\Model\Action();
        preg_match('/@(.+?)[: ]/', $action, $match);
        if (count($match) > 0) {
            $assignee = $match[1];
            $action = str_replace($match[0], '', $action);
            $actionObject->setAssignee($assignee);
        } else {
            $actionObject->setAssignee($this->securityContext->getParty());
        }
        preg_match_all('/#([a-zA-Z\\-_]+)/', $action, $matches);
        foreach ($matches[0] as $key => $string) {
            $action = str_replace($string, '', $action);
            $actionObject->addContext($matches[1][$key]);
        }
        // preg_match("/^([@])\[(.+?)\]\((.+?):(.+?)\)[: ]*/", $action, $match);
        // if(count($match) > 0){
        // 	$assignee = $match[2];
        // 	$action = str_replace($match[0], "", $action);
        // }
        // preg_match_all("/([@#])\[(.+?)\]\((.+?):(.+?)\)/", $action, $matches);
        // $actionObject = new \Brain\Domain\Model\Action();
        // foreach ($matches[0] as $key => $string) {
        // 	$mention = array(
        // 		"id" => $matches[3][$key],
        // 		"name" => $matches[2][$key],
        // 		"type" => $matches[4][$key]
        // 	);
        // 	$action = str_replace($string, $mention["name"], $action);
        // 	$context = $this->contextRepository->get($matches[2][$key]);
        // 	$actionObject->addContext($context);
        // }
        $actionObject->setTitle($action);
        $actionObject->setOwner($this->securityContext->getParty());
        $this->actionRepository->add($actionObject);
        $this->redirect('index');
    }

    /**
     * Index action
     *
     * @param \Brain\Domain\Model\Action $action
     * @FLOW3\IgnoreValidation("$action")
     * @return void
     */
    public function focusAction($action = null) {
    	$actions = $this->actionRepository->findByAssignee($this->securityContext->getParty());
        $this->view->assign('actions', $actions);
        if(is_null($action))
        	$action = $actions->getFirst();
        $this->view->assign('currentAction', $action);

        $users = array(

        );
        foreach ($this->userRepository->findAll() as $key => $user) {
            $users[] = array(
            	'id' => $key,
            	'name' => $user->getUsername(),
            	'avater' => $user->getAvatar()
            );
        }
        $this->view->assign('userOptions', str_replace('\\/', '/', json_encode($users)));
    }

    /**
     * Index action
     *
     * @param \Brain\Domain\Model\Action $action
     * @param integer $for
     * @return void
     */
    public function skipAction($action, $for) {
    	$time = time() + $for;
    	$dateTime = new \DateTime("@" . $time);
        $action->setSkippedTill($dateTime);
        $this->actionRepository->update($action);
        $this->redirect("focus");
    }

    /**
     * Index action
     *
     * @param \Brain\Domain\Model\Action $action
     * @FLOW3\IgnoreValidation("$action")
     * @return void
     */
    public function indexAction($action = null) {
        $this->view->assign('currentAction', $action);
        $this->view->assign('actions', $this->actionRepository->findAll());
        $users = array(

        );
        foreach ($this->userRepository->findAll() as $key => $user) {
            $users[] = array(
            	'id' => $key,
            	'name' => $user->getUsername(),
            	'avater' => $user->getAvatar()
            );
        }
        $this->view->assign('userOptions', str_replace('\\/', '/', json_encode($users)));
    }

    /**
     * Index action
     *
     * @param string $action
     * @return void
     */
    public function newAction($action) {

    }

}

?>
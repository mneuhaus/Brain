<?php
namespace Brain\Controller;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;

/**
 * Standard controller for the Brain package 
 *
 * @FLOW3\Scope("singleton")
 */
class StandardController extends \TYPO3\FLOW3\Mvc\Controller\ActionController {
	/**
	 * @FLOW3\Inject
	 * @var \TYPO3\FLOW3\Session\PhpSession
	 */
	protected $session;

	/**
	 * Index action
	 *
	 * @return void
	 */
	public function indexAction() {
		#$github = new \Github\Client();
		#$this->view->assign('issues', $github->getIssueApi()->getList('twitter', 'bootstrap', 'open'));
	}

	/**
	 * Index action
	 *
	 * @return void
	 */
	public function tokenAction() {
		// $return_uri = $this->request->getHttpRequest()->getUri();
		
		// if(isset($_REQUEST["code"])){
			
		// 	$query = http_build_query(array(
	 //            'client_id' => '3465d66b09ce12978530',
	 //            'client_secret' => '42fe87a3698a5c6cbd5b36d3cbc4dd51a1b6f838',
	 //            'code' => $_REQUEST["code"],
	 //            'state' => $_REQUEST["state"]
	 //        ));
		// 	$httpClient = new \Github\HttpClient\HttpClient();
		// 	$result = $httpClient->get('login/oauth/access_token?' . $query, array(), array( 'url' => 'https://github.com/:path' ));
		// 	$this->session->start();
		// 	$this->session->putData("github-token", parse_url($result));
		// } else {

		// 	$this->redirectToUri('https://github.com/login/oauth/authorize?client_id=3465d66b09ce12978530&scope=repo&redirect_uri=' . $return_uri);
		// }
	}

	/**
	 * Index action
	 * @param integer $number
	 * @param string $repository
	 * @return void
	 */
	public function tasksAction($number = null, $repository = null) {
		// $github = new \Github\Client();
		// $github->setToken('f09d0aa6a4bf26c56119185d9b890e7231dbd8a4', 'bearer');
		// $github->setHeaders(array(
		// 	"Accept" => "application/vnd.github.full+json"
		// ));
		// $issues = $github->getIssueApi()->getMyIssues('assigned');

		// if(!is_null($repository)){
		// 	$parts = explode("/", $repository);
		// 	$user = $parts[0];
		// 	$repository = $parts[1];
		// }

		// if($number > 0){
		// 	$issue = $github->getIssueApi()->show($user, $repository, $number);
		// 	$issue["comments"] = $github->getIssueApi()->getComments($user, $repository, $issue["number"]);
		// 	$this->view->assign('currentIssue', $issue);
		// }
		// $this->view->assign('issues', $issues);
	}

}

?>
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
		$return_uri = $this->request->getHttpRequest()->getUri();
		
		if(isset($_REQUEST["code"])){
			
			$query = http_build_query(array(
	            'client_id' => '3465d66b09ce12978530',
	            'client_secret' => '42fe87a3698a5c6cbd5b36d3cbc4dd51a1b6f838',
	            'code' => $_REQUEST["code"],
	            'state' => $_REQUEST["state"]
	        ));
			$httpClient = new \Github\HttpClient\HttpClient();
			$result = $httpClient->get('login/oauth/access_token?' . $query, array(), array( 'url' => 'https://github.com/:path' ));
			$this->session->start();
			$this->session->putData("github-token", parse_url($result));
		} else {

			$this->redirectToUri('https://github.com/login/oauth/authorize?client_id=3465d66b09ce12978530&scope=repo&redirect_uri=' . $return_uri);
		}
	}

	/**
	 * Index action
	 * @param integer $number
	 * @param string $repository
	 * @return void
	 */
	public function tasksAction($number = null, $repository = null) {
		$github = new \Github\Client();
		$github->setToken('f09d0aa6a4bf26c56119185d9b890e7231dbd8a4', 'bearer');
		$github->setHeaders(array(
			"Accept" => "application/vnd.github.full+json"
		));
		$issues = $github->getIssueApi()->getMyIssues('assigned');
		#var_dump($issues);

		if(!is_null($repository)){
			$parts = explode("/", $repository);
			$user = $parts[0];
			$repository = $parts[1];
		}

		if($number > 0){
			$issue = $github->getIssueApi()->show($user, $repository, $number);
			$issue["comments"] = $github->getIssueApi()->getComments($user, $repository, $issue["number"]);
			$this->view->assign('currentIssue', $issue);
		}
		$this->view->assign('issues', $issues);
	}

	/**
	 * Index action
	 *
	 * @param integer $login
	 * @return void
	 */
	public function loginsAction($login = null) {
		$logins = array(
			array(
				"title" => "BVA",
				"items" => array(
					array(
						"title" => "SSH für SWW",
						"fields" => array(
							"Host" => "bva-media.de",
							"Username" => "sonnewindwaerme.de",
							"Password" => "IeL2uwee"
						)
					),
					array(
						"title" => "SSH für SWE",
						"fields" => array(
							"Host" => "bva-media.de",
							"Username" => "sunwindenergy.com",
							"Password" => "pe8ob9Ah"
						)
					),
					array(
						"title" => "SSH für BDR",
						"fields" => array(
							"Host" => "217.14.173.104",
							"Username" => "gundl001",
							"Password" => "sbr35SEYs"
						)
					),
					array(
						'title' => "Citrix",
						'fields' => array(
							'Username' => 'klusekemper',
							'Password' => 'H43nsch3nkl31n!'
						)
					),
					array(
						'title' => "Drupal Backen",
						'fields' => array(
							'Username' => 'bva-admin',
							'Password' => 'asr238'
						)
					),
					array(
						'title' => "SSH bva-media.de",
						'fields' => array(
							'Host' => 'bva-media',
							'Username' => 'bva-media',
							'Password' => 'zaePei1G'
						)
					),
					array(
						'title' => 'BVA Datenbanken',
						'fields' => array(
							'Host' => 'http://webspace5.bva-media.de/m-adm/phpmyadmin/',
							'Benutzer' => 'dbadm',
							'Passwort' => 'eePhao0y',
							'Htaccess-User' => 'bva-media.de',
							'Htaccess-Pass' => 'zaePei1G',
						)
					),
					array(
						'title' => "SSH Gummibereifung",
						'fields' => array(
							'Host' => 'j24618.servers.jiffybox.net',
							'Username' => 'root',
							'Password' => 'GCnRPpS#HfDuRH3P'
						)
					),
					array(
						'title' => 'MySQL Gummibereifung',
						'fields' => array(
							'User' => 'root',
							'Password' => '4Aecv#qMfN_P',
							'DB' => "gummibereifung",
							'User' => 'gummibereifung',
							'Password' => 'zfbc#e4vzes4zb'
						)
					)
				)
			),
			array(
				'title' => "PLD-A",
				'items' => array(
					array(
						'title' => 'E-Mails',
						'table' => array(
							array(
								"E-Mail" => "president@pld-a.org", 
								"Password" => "opgalsta27", 
							),
							array(
								"E-Mail" => "sadams@pld-a.org", 
								"Password" => "iogintor47", 
							),
							array(
								"E-Mail" => "esmyrek@pld-a.org", 
								"Password" => "ionvit71", 
							),
							array(
								"E-Mail" => "celebration-of-light@pld-a.org", 
								"Password" => "segint39", 
							),
							array(
								"E-Mail" => "tbraedikow@pld-a.org", 
								"Password" => "uslysi62", 
							),
							array(
								"E-Mail" => "pld.archive@googlemail.com", 
								"Password" => "frailit28"
							),
						)
					),
					array(
						'title' => 'DomainFactory',
						'fields' => array(
							'Login' => 'pld-a.org',
							'Passwort' => 'eftions50',
							'Telefon-Passwort' => 'brise43'
						)
					),
					array(
						'title' => 'Server',
						'fields' => array(
							'Benutzer' => 'admin',
							'Passwort' => 'Forsin2#'
						)
					)
				)
			)
		);

		$this->view->assign('projects', $logins);

		if(!is_null($login))
			$this->view->assign('context', $logins[$login]);
	}

}

?>
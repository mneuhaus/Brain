<?php
namespace Brain\Domain\Model;

/*                                                                        *
 * This script belongs to the FLOW3 package "Brain".                      *
 *                                                                        *
 *                                                                        */

use TYPO3\FLOW3\Annotations as FLOW3;
use Doctrine\ORM\Mapping as ORM;
use Foo\ContentManagement\Annotations as CM;

/**
 * A Information
 *
 * @FLOW3\Entity
 * @CM\Set(title="", properties="name,contexts,variant,content,tabular,url,yaml,host,username,password")
 */
class Information {

    /**
     * @var \TYPO3\FLOW3\Configuration\ConfigurationManager
     * @FLOW3\Inject
     */
    protected $configurationManager;

    /**
     * The data
     * @var string
     * CM\Editor("Markdown")
     * @ORM\Column(type="text")
     */
    protected $content;

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
     * The host
     *
     * @var string
     */
    protected $host;

    /**
     * The name
     * @var string
     */
    protected $name;

    /**
     * The password
     *
     * @var string
     */
    protected $password;

    /**
     * The tabular
     *
     * @var string
     * @CM\Element("TYPO3.Form:MultiLineText")
     * @ORM\Column(type="text")
     */
    protected $tabular;

    /**
     * The url
     *
     * @var string
     */
    protected $url;

    /**
     * The username
     *
     * @var string
     */
    protected $username;

    /**
     * @var string
     * @CM\OptionsProvider(name="Array")
     * @CM\Element("Brain:VariantSelector")
     */
    protected $variant = 'name,content';

    /**
     * The yaml
     *
     * @var string
     * CM\Widget("Textarea")
     * @ORM\Column(type="text")
     */
    protected $yaml;

    /**
     * TODO: Document this Method! ( __construct )
     */
    public function __construct() {
        $this->items = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * TODO: Document this Method! ( __toString )
     */
    public function __toString() {
        return $this->name;
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
     * Get the Access's content
     *
     * @return string The Access's content
     */
    public function getContent() {
        return $this->content;
    }

    /**
     * Get the Action's contexts
     *
     * @return \Doctrine\Common\Collections\Collection The Action's contexts
     */
    public function getContexts() {
        return $this->contexts;
    }

    /**
     * TODO: Document this Method! ( getFields )
     */
    public function getFields() {
        $fields = array_flip(explode(',', $this->getVariant()));
        foreach ($fields as $field => $value) {
            if ($field == 'contexts' || $field == 'name') {
                unset($fields[$field]);
                continue;
            }
            $fields[$field] = \TYPO3\FLOW3\Reflection\ObjectAccess::getProperty($this, $field);
        }
        return $fields;
    }

    /**
     * @return string
     */
    public function getHost() {
        return $this->host;
    }

    /**
     * Get the Access's name
     *
     * @return string The Access's name
     */
    public function getName() {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getPassword() {
        return $this->password;
    }

    /**
     * @return string
     */
    public function getTabular() {
        return $this->tabular;
    }

    /**
     * @return string
     */
    public function getTabularParsed() {
        $lines = explode(PHP_EOL, $this->tabular);
        foreach ($lines as $key => $line) {
            $lines[$key] = str_getcsv($line, ";");
        }
        return $lines;
    }

    /**
     * @return string
     */
    public function getUrl() {
        return $this->url;
    }

    /**
     * @return string
     */
    public function getUsername() {
        return $this->username;
    }

    /**
     * Get the Access's variant
     *
     * @return string The Access's variant
     */
    public function getVariant() {
        return $this->variant;
    }

    /**
     * TODO: Document this Method! ( getVariantType )
     */
    public function getVariantType() {
        $variants = $this->configurationManager->getConfiguration(\TYPO3\FLOW3\Configuration\ConfigurationManager::CONFIGURATION_TYPE_SETTINGS, 'Foo.ContentManagement.Annotations.Brain\\Domain\\Model\\Information.Properties.variant.OptionsProvider.options');
        return $variants[$this->getVariant()];
    }

    /**
     * @return string
     */
    public function getYaml() {
        return $this->yaml;
    }

    /**
     * Sets this Access's content
     *
     * @param string $content The Access's content
     * @return void
     */
    public function setContent($content) {
        $this->content = $content;
    }

    /**
     * Sets this Action's contexts
     *
     * @param \Doctrine\Common\Collections\Collection $contexts The Action's contexts
     * @return void
     */
    public function setContexts(\Doctrine\Common\Collections\Collection $contexts) {
        $this->contexts = $contexts;
    }

    /**
     * @param string $host
     */
    public function setHost($host) {
        $this->host = $host;
    }

    /**
     * Sets this Access's name
     *
     * @param string $name The Access's name
     * @return void
     */
    public function setName($name) {
        $this->name = $name;
    }

    /**
     * @param string $password
     */
    public function setPassword($password) {
        $this->password = $password;
    }

    /**
     * @param string $tabular
     */
    public function setTabular($tabular) {
        $this->tabular = $tabular;
    }

    /**
     * @param string $url
     */
    public function setUrl($url) {
        $this->url = $url;
    }

    /**
     * @param string $username
     */
    public function setUsername($username) {
        $this->username = $username;
    }

    /**
     * Sets this Access's variant
     *
     * @param array $variant
     * @return void
     */
    public function setVariant($variant) {
        $this->variant = $variant;
    }

    /**
     * @param string $yaml
     */
    public function setYaml($yaml) {
        $this->yaml = $yaml;
    }

}

?>
<?php
namespace Brain\ViewHelpers;

/*                                                                        *
 * This script belongs to the FLOW3 package "Fluid".                      *
 *                                                                        *
 * It is free software; you can redistribute it and/or modify it under    *
 * the terms of the GNU Lesser General Public License, either version 3   *
 *  of the License, or (at your option) any later version.                *
 *                                                                        *
 * The TYPO3 project - inspiring people to share!                         *
 *                                                                        */


/**
 * @api
 */
class PropertiesViewHelper extends \TYPO3\Fluid\Core\ViewHelper\AbstractViewHelper{

	/**
	 *
	 * @param object $item
	 * @param string $as
	 * @return string Rendered string
	 * @api
	 */
	public function render($item, $as = "fields") {
		$fields = explode(",", $item->getVariant());
		
		$data = array();
		foreach ($fields as $field) {
			if($field == "name") continue;
			$data[ucfirst($field)] = \TYPO3\FLOW3\Reflection\ObjectAccess::getProperty($item, $field);
		}

		$this->templateVariableContainer->add($as, $data);
		$output = $this->renderChildren();
		$this->templateVariableContainer->remove($as);

		return $output;
	}
}

?>

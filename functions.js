function generatedCodePostProcessing(code) {
	if (code.indexOf('robot.') !== -1)
		code = 'local robot = require("robot")\n' + code;
	if (code.indexOf("computer.") !== -1)
		code = 'local computer = require("computer")\n' + code;
	if (code.indexOf("crafting.") !== -1) {
		code = generatedCodePrependRequireComponent(code);
		code = 'local crafting = component.crafting\n';
	}
	if (code.indexOf("inventory_controller") !== -1) {
		code = generatedCodePrependRequireComponent(code);
		code = 'local inventory_controller = component.inventory_controller\n';
	}
	code = code.replaceAll('local _ = ', '');
	code = code.replaceAll(/( *){(.*)}/g, '$1$2');
	return code;
}

function generatedCodePrependRequireComponent(code) {
	if (code.indexOf("require(\"component\")") === -1)
		code = 'local component = require("component")\n' + code;
	return code;
}
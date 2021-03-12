function generatedCodePostProcessing(code) {
	if (code.indexOf('robot.') !== -1)
		code = 'local robot = require("robot")\n' + code;
	if (code.indexOf("computer.") !== -1)
		code = 'local computer = require("computer")\n' + code;
	if (code.indexOf("crafting.") !== -1) {
		code = 'local crafting = component.crafting\n';
		code = generatedCodePrependRequireComponent(code);
	}
	if (code.indexOf("inventory_controller.") !== -1) {
		code = 'local inventory_controller = component.inventory_controller\n' + code;
		code = generatedCodePrependRequireComponent(code);
	}
	if (code.indexOf("redstone.") !== -1) {
		code = 'local redstone = component.redstone\n' + code;
		code = generatedCodePrependRequireComponent(code);
	}
	if (code.indexOf("sign.") !== -1) {
		code = 'local sign = component.sign\n' + code;
		code = generatedCodePrependRequireComponent(code);
	}
	if (code.indexOf("generator.") !== -1) {
		code = 'local generator = component.generator\n' + code;
		code = generatedCodePrependRequireComponent(code);
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

function updateToolbox(new_toolbox) {
	if (typeof new_toolbox == "string")
		new_toolbox = document.getElementById(new_toolbox);
	workspace.updateToolbox(new_toolbox);
}
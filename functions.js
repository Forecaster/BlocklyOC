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

function valueFilter(input_value) {
	input_value = input_value.replaceAll(/^\(/g, "").replaceAll(/\)$/g, "")
	return input_value;
}

function updateToolbox(new_toolbox) {
	if (typeof new_toolbox == "string")
		new_toolbox = document.getElementById(new_toolbox);
	workspace.updateToolbox(new_toolbox);
}

function file_error(msg) {
	let file_error = document.getElementById("file_error");
	file_error.innerText = msg;
	file_error.style.display = "block";
}

function hide_error() {
	document.getElementById("file_error").style.display = "none";
}

function save_code() {
	let code = generated_code_output.value;
	let fn = null;
	if (filename_output.value != "")
		fn = filename_output.value;

	jQuery.post("save_script.php", { script: code, filename: fn })
		.done(function(payload) {
			console.debug(payload);
			payload = payload.split(';');
			if (payload[0] === "no_content")
				file_error("No content received.");
			else if (payload[0] === "timeout")
				file_error("Was unable to find available filename within 10 attempts.");
			else if (payload[0] === "unable_to_write")
				file_error("Unable to write file to disk.");
			else {
				filename_output.value = payload[0];
				file_save_url.href = "https://towerofawesome.org/blocklyoc/saved_scripts/" + payload[0];
				file_save_display.style.display = "block";
				btn_save.innerText = "Update link";
			}
		})
}
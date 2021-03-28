<?php
ini_set('display_errors', 1);
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Blockly OC</title>

		<script src="blockly/blockly_compressed.js"></script>
		<script src="blockly/blocks_compressed.js"></script>
		<script src="blockly/msg/js/en.js"></script>
		<script src="blockly/lua_compressed.js"></script>
		<script src="functions.js"></script>
		<script src="jquery.js"></script>

		<script src="custom_blocks_utility.js"></script>
		<script src="custom_code_utility.js"></script>
		<script src="custom_blocks_robot_api.js"></script>
		<script src="custom_code_robot_api.js"></script>
		<script src="custom_blocks_computer_api.js"></script>
		<script src="custom_code_computer_api.js"></script>
		<script src="custom_blocks_crafting_upgrade.js"></script>
		<script src="custom_code_crafting_upgrade.js"></script>
		<script src="custom_blocks_inventory_controller.js"></script>
		<script src="custom_code_inventory_controller.js"></script>

		<script src="custom_blocks_beginner_mode.js"></script>
		<script src="custom_code_beginner_mode.js"></script>

		<style>
			html, body {
				height           : 100%;
				margin           : 0;
				background-color : #1f1f1f;
				color            : white;
				font-family      : sans-serif;
			}

			a {
				color : lightblue;
			}

			a:visited {
				color : #4f7c8c;
			}

			textarea {
				background-color : transparent;
				color            : white;
			}

			table {
				height : 100%;
				width  : 100%;
			}

			#blocklyArea {
				height     : 99%;
				text-align : center;
			}

			.button_container {
				position   : absolute;
				top        : 6px;
				right      : 50%;
				text-align : center;
			}

			.btn {
				margin           : 4px;
				padding          : 4px;
				background-color : white;
				color            : black;
				border-radius    : 5px;
				cursor           : pointer;
				font-weight      : bold;
			}

			.btn-down {
				border-top-left-radius     : 5px;
				border-top-right-radius    : 5px;
				border-bottom-left-radius  : 0;
				border-bottom-right-radius : 0;
			}

			.btn-up {
				border-top-left-radius     : 0;
				border-top-right-radius    : 0;
				border-bottom-left-radius  : 5px;
				border-bottom-right-radius : 5px;
			}

			#btn_generate {
				background-color : forestgreen;
				color            : white;
			}

			#btn_save {
				background-color : red;
				color            : white;
			}

			#btn_mode {
				background-color : forestgreen;
				color            : white;
			}

			.modal {
				display          : none;
				position         : fixed;
				width            : 780px;
				margin-left      : -400px;
				left             : 50%;
				top              : 20px;
				background-color : #1f1f1f;
				color            : white;
				border-radius    : 5px;
				border           : 1px solid white;
				z-index          : 100000;
				padding          : 10px;
			}

			.modal > .btn_close {
				position         : absolute;
				top              : -1px;
				right            : -1px;
				width            : 50px;
				height           : 20px;
				background-color : red;
				color            : white;
				text-align       : center;
				border           : 1px solid white;
				cursor           : pointer;
			}

			.modal > .btn_close:hover {
				background-color : white;
				color            : red;
			}

			.error, .warning {
				margin-top       : 10px;
				margin-bottom    : 4px;
				background-color : black;
				padding          : 4px;
			}

			.error {
				border : 1px solid red;
				color  : red;
			}

			.warning {
				border : 1px solid darkorange;
				color  : darkorange;
			}

			.blocklySvg {
				background-color : transparent;
			}

			.blocklyToolboxDiv {
				background-color : #505050;
			}

			.blocklyCommentTextarea {
				color: black;
			}

			.btn-double-top, .btn-double-bottom {
				padding      : 8px;
				border-style : solid;
				border-color : white;
				cursor       : pointer;
				text-shadow  : black 2px 2px;
			}

			.btn-double-top {
				margin-top              : 10px;
				border-top-left-radius  : 15px;
				border-top-right-radius : 15px;
				border-width            : 1px 1px 0 1px;
				text-transform          : uppercase;
				font-weight             : bold;
			}

			.btn-double-bottom {
				border-bottom-left-radius  : 15px;
				border-bottom-right-radius : 15px;
				border-width               : 0 1px 1px 1px;
				border-top                 : 1px solid gray;
			}

			#mode_switch_beginner_top, #mode_switch_beginner_bottom {
				background-color : forestgreen;
				color            : white;
			}

			#mode_switch_intermediate_top, #mode_switch_intermediate_bottom {
				background-color : darkorange;
				color            : white;
			}

			#mode_switch_advanced_top, #mode_switch_advanced_bottom {
				background-color : orangered;
				color            : white;
			}
		</style>
	</head>
	<body>
		<div id="modal_generated_code" class="modal">
			<div class="btn_close">X</div>
			<h2>Generated code</h2>
			<div>Pressing the generate button again will update the code without needing to close this window.</div>
			<div id="line_warning" class="warning" style="display: none;">
				This code is more than 256 lines long! You wont be able to copy-paste it into minecraft in one go!<br/>
				Consider using the save feature below and wget the file instead.
			</div>
			<textarea id="generated_code_output" readonly="readonly" title=""
								style="width: 99%; height: 600px; resize: none;"></textarea>
			<span id="btn_save" class="btn btn-up" onclick="save_code();">Generate link</span>
			<div id="file_save_display" style="display: none; margin-top: 16px;">
				<input type="text" readonly="readonly" id="filename_output" style="display: none;"/> <a href=""
																																																id="file_save_url">Download
					url</a>
			</div>
			<div id="file_error" style="display: none;" class="error"></div>
		</div>
		<div id="modal_change_mode" class="modal">
			<div class="btn_close">X</div>
			<h2>Change mode</h2>
			<div id="btn_mode_switch_beginner">
				<div id="mode_switch_beginner_top" class="btn-double-top">
					Beginner Mode
				</div>
				<div id="mode_switch_beginner_bottom" class="btn-double-bottom">
					Beginner mode provides limited functionality and a simplified set of instructions.
				</div>
			</div>
			<div id="btn_mode_switch_intermediate">
				<div id="mode_switch_intermediate_top" class="btn-double-top">
					Intermediate Mode
				</div>
				<div id="mode_switch_intermediate_bottom" class="btn-double-bottom">
					Intermediate mode provides the same functionality as beginner mode, with the addition of functions.
				</div>
			</div>
			<div id="btn_mode_switch_advanced">
				<div id="mode_switch_advanced_top" class="btn-double-top">
					Advanced Mode
				</div>
				<div id="mode_switch_advanced_bottom" class="btn-double-bottom">
					Advanced mode provides a full suite of blocks equivalent to the functions available in OC, as well as the full
					suite of Blockly instructions.
				</div>
			</div>
		</div>
		<table>
			<tr>
				<td>
					<div id="button_container" class="button_container">
					</div>
					<h2>BlocklyOC</h2>
					<p>Made by <a href="https://towerofawesome.org/">Forecaster</a> mostly for fun.</p>
					<p>The code generated by this application assumes that it is run from within <b>OpenOS</b>. Mainly made for
						robot programming.</p>
					<p>For assistance join <code>#oc</code> on <a href="https://webchat.esper.net">irc.esper.net</a> or join the
						<a
							href="https://discord.gg/bYqKv7h">OC discord</a>. Report issues on <a
							href="https://github.com/Forecaster/BlocklyOC/issues/new">GitHub</a></p>
					<p>Here is a <a href="https://youtu.be/v0nlwJuyqKg">tutorial video</a> for BlocklyOC!</p>
				</td>
			</tr>
			<tr>
				<td>
					<span id="btn_generate" class="btn btn-down" data-btn-modal-open="generated_code">Generate Lua</span>
					<span id="btn_mode" class="btn btn-down" data-btn-modal-open="change_mode">Change Mode</span>
				</td>
			</tr>
			<tr>
				<td id="blocklyArea"></td>
			</tr>
		</table>
		<div id="blocklyDiv" style="position: absolute;"></div>
		<?php require_once "toolbox_beginner_mode.xml" ?>
		<?php require_once "toolbox_intermediate_mode.xml" ?>
		<?php require_once "toolbox_advanced_mode.xml" ?>
	</body>
	<script>
		//Add OC reserved words
		Blockly.Lua.addReservedWords("robot,computer,crafting,inventory_controller,redstone,sign,generator,component");

		const toolbox_beginner_mode = document.getElementById('toolbox_beginner_mode');
		const toolbox_intermediate_mode = document.getElementById('toolbox_intermediate_mode');
		const toolbox_advanced_mode = document.getElementById('toolbox_advanced_mode');

		const blocklyArea = document.getElementById('blocklyArea');
		const blocklyDiv = document.getElementById('blocklyDiv');
		const workspace = Blockly.inject(blocklyDiv, {
			toolbox: toolbox_beginner_mode,
			grid: {
				spacing: 20,
				length: 3,
				colour: '#7c7c7c',
				snap: true
			},
			trashcan: true
		});
		const onresize = function (e) {
			// Compute the absolute coordinates and dimensions of blocklyArea.
			let element = blocklyArea;
			let x = 0;
			let y = 0;
			do {
				x += element.offsetLeft;
				y += element.offsetTop;
				element = element.offsetParent;
			} while (element);
			// Position blocklyDiv over blocklyArea.
			blocklyDiv.style.left = x + 'px';
			blocklyDiv.style.top = y + 'px';
			blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
			blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
			Blockly.svgResize(workspace);
		};
		window.addEventListener('resize', onresize, false);
		onresize();
		Blockly.svgResize(workspace);

		function close_modal(id) {
			const modal = document.getElementById("modal_" + id);
			modal.style.display = null;
		}

		const modal_closes = document.getElementsByClassName("btn_close");
		for (let btn in modal_closes) {
			modal_closes[btn].onclick = function (event) {
				event.target.parentElement.style.display = null;
			}
		}

		const modal_opens = document.querySelectorAll("[data-btn-modal-open]");
		for (let btn in modal_opens) {
			modal_opens[btn].onclick = function (event) {
				let modal = document.getElementById("modal_" + modal_opens[btn].getAttribute("data-btn-modal-open"))
				if (typeof modal !== "undefined")
					modal.style.display = "block";
			}
		}

		const modal_generated_code = document.getElementById("modal_generated_code");
		const generated_code_output = document.getElementById("generated_code_output");
		const btn_generate = document.getElementById("btn_generate");
		btn_generate.onclick = function () {
			let code = generatedCodePostProcessing(Blockly.Lua.workspaceToCode(workspace));
			generated_code_output.value = code;
			modal_generated_code.style.display = "block";
			if (code.split('\n').length > 256)
				line_warning.style.display = "block";
		}
		const filename_output = document.getElementById("filename_output");
		const file_save_display = document.getElementById("file_save_display");
		const file_save_url = document.getElementById("file_save_url");
		const line_warning = document.getElementById("line_warning");
		const btn_save = document.getElementById("btn_save");
		const btn_mode = document.getElementById("btn_mode");

		const btn_mode_switch_beginner = document.getElementById("btn_mode_switch_beginner");
		btn_mode_switch_beginner.onclick = function (event) {
			workspace.updateToolbox(toolbox_beginner_mode);
			close_modal("change_mode");
			btn_mode.style.backgroundColor = "forestgreen";
		};
		const btn_mode_switch_intermediate = document.getElementById("btn_mode_switch_intermediate");
		btn_mode_switch_intermediate.onclick = function (event) {
			workspace.updateToolbox(toolbox_intermediate_mode);
			close_modal("change_mode");
			btn_mode.style.backgroundColor = "darkorange";
		};
		const btn_mode_switch_advanced = document.getElementById("btn_mode_switch_advanced");
		btn_mode_switch_advanced.onclick = function (event) {
			workspace.updateToolbox(toolbox_advanced_mode);
			close_modal("change_mode");
			btn_mode.style.backgroundColor = "orangered";
		};
	</script>
</html>
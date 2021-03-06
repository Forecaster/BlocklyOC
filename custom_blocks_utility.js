Blockly.Blocks['flow'] = {
	init: function() {
		this.appendValueInput("var")
			.setCheck(null);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("Allow attaching left-connecting piece to flow");
		this.setHelpUrl("");
	}
};

Blockly.Blocks['sleep'] = {
	init: function() {
		this.appendDummyInput()
			.appendField("Sleep");
		this.appendValueInput("seconds")
			.setCheck("Number")
			.appendField("Seconds");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(230);
		this.setTooltip("Used to wait, as well as in loops to avoid the 'Too long without yielding' error.");
		this.setHelpUrl("");
	}
};
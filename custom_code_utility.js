Blockly.Lua['flow'] = function(block) {
	var value_var = Blockly.Lua.valueToCode(block, 'var', Blockly.Lua.ORDER_ATOMIC);
	var code = valueFilter(value_var) + '\n';
	return code;
};

Blockly.Lua['sleep'] = function(block) {
	var value_seconds = Blockly.Lua.valueToCode(block, 'seconds', Blockly.Lua.ORDER_ATOMIC);
	var code = 'os.sleep(' + valueFilter(value_seconds) + ')\n';
	return code;
};
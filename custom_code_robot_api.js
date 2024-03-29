Blockly.Lua['name'] = function(block) {
	var code = 'robot.name()';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['detect'] = function(block) {
	var code = '{robot.detect()}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['detectup'] = function(block) {
	var code = '{robot.detectUp()}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['detectdown'] = function(block) {
	var code = '{robot.detectDown()}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['select'] = function(block) {
	var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.select(' + valueFilter(value_slot) + ')\n';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['inventorysize'] = function(block) {
	var code = 'robot.inventorySize()';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['count'] = function(block) {
	var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.count(' + valueFilter(value_slot) + ')';
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['space'] = function(block) {
	var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.space(' + valueFilter(value_slot) + ')';
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['transferto'] = function(block) {
	var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	if (value_slot == "")
		value_slot = 'nil';
	if (value_count == "")
		value_count = 'nil';
	var code = 'robot.transferTo(' + valueFilter(value_slot) + ', ' + valueFilter(value_count) + ')\n';
	return code;
};

Blockly.Lua['compareto'] = function(block) {
	var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.compareTo(' + valueFilter(value_slot) + ')';
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['compare'] = function(block) {
	var code = 'robot.compare()';
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['compareup'] = function(block) {
	var code = 'robot.compareUp()';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['comparedown'] = function(block) {
	var code = 'robot.compareDown()';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['drop'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.drop(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['dropup'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.dropUp(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['dropdown'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.dropDown(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['suck'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.suck(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['suckup'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.suckUp(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['suckdown'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.suckDown(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['place'] = function(block) {
	var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
	var value_sneaky = Blockly.Lua.valueToCode(block, 'sneaky', Blockly.Lua.ORDER_ATOMIC);
	if (value_side == "")
		value_side = 'nil';
	if (value_sneaky == "")
		value_sneaky = 'nil';
	var code = '{robot.place(' + valueFilter(value_side) + ', ' + valueFilter(value_sneaky) + ')}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['placeup'] = function(block) {
	var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
	var value_sneaky = Blockly.Lua.valueToCode(block, 'sneaky', Blockly.Lua.ORDER_ATOMIC);
	if (value_side == "")
		value_side = 'nil';
	if (value_sneaky == "")
		value_sneaky = 'nil';
	var code = '{robot.placeUp(' + valueFilter(value_side) + ', ' + valueFilter(value_sneaky) + ')}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['placedown'] = function(block) {
	var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
	var value_sneaky = Blockly.Lua.valueToCode(block, 'sneaky', Blockly.Lua.ORDER_ATOMIC);
	if (value_side == "")
		value_side = 'nil';
	if (value_sneaky == "")
		value_sneaky = 'nil';
	var code = '{robot.placeDown(' + valueFilter(value_side) + ', ' + valueFilter(value_sneaky) + ')}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['durability'] = function(block) {
	var code = '{robot.durability()}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['swing'] = function(block) {
	var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
	var value_sneaky = Blockly.Lua.valueToCode(block, 'sneaky', Blockly.Lua.ORDER_ATOMIC);
	if (value_side == "")
		value_side = 'nil';
	if (value_sneaky == "")
		value_sneaky = 'nil';
	var code = '{robot.swing(' + valueFilter(value_side) + ', ' + valueFilter(value_sneaky) + ')}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['swingup'] = function(block) {
	var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
	var value_sneaky = Blockly.Lua.valueToCode(block, 'sneaky', Blockly.Lua.ORDER_ATOMIC);
	if (value_side == "")
		value_side = 'nil';
	if (value_sneaky == "")
		value_sneaky = 'nil';
	var code = '{robot.swingUp(' + valueFilter(value_side) + ', ' + valueFilter(value_sneaky) + ')}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['swingdown'] = function(block) {
	var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
	var value_sneaky = Blockly.Lua.valueToCode(block, 'sneaky', Blockly.Lua.ORDER_ATOMIC);
	if (value_side == "")
		value_side = 'nil';
	if (value_sneaky == "")
		value_sneaky = 'nil';
	var code = '{robot.swingDown(' + valueFilter(value_side) + ', ' + valueFilter(value_sneaky) + ')}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['use'] = function(block) {
	var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
	var value_sneaky = Blockly.Lua.valueToCode(block, 'sneaky', Blockly.Lua.ORDER_ATOMIC);
	var value_duration = Blockly.Lua.valueToCode(block, 'duration', Blockly.Lua.ORDER_ATOMIC);
	if (value_side == "")
		value_side = 'nil';
	if (value_sneaky == "")
		value_sneaky = 'nil';
	if (value_duration == "")
		value_duration = 'nil';
	var code = '{robot.use(' + valueFilter(value_side) + ', ' + valueFilter(value_sneaky) + ', ' + valueFilter(value_duration) + ')}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['useup'] = function(block) {
	var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
	var value_sneaky = Blockly.Lua.valueToCode(block, 'sneaky', Blockly.Lua.ORDER_ATOMIC);
	var value_duration = Blockly.Lua.valueToCode(block, 'duration', Blockly.Lua.ORDER_ATOMIC);
	if (value_side == "")
		value_side = 'nil';
	if (value_sneaky == "")
		value_sneaky = 'nil';
	if (value_duration == "")
		value_duration = 'nil';
	var code = '{robot.useUp(' + valueFilter(value_side) + ', ' + valueFilter(value_sneaky) + ', ' + valueFilter(value_duration) + ')}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['usedown'] = function(block) {
	var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
	var value_sneaky = Blockly.Lua.valueToCode(block, 'sneaky', Blockly.Lua.ORDER_ATOMIC);
	var value_duration = Blockly.Lua.valueToCode(block, 'duration', Blockly.Lua.ORDER_ATOMIC);
	if (value_side == "")
		value_side = 'nil';
	if (value_sneaky == "")
		value_sneaky = 'nil';
	if (value_duration == "")
		value_duration = 'nil';
	var code = '{robot.useDown(' + valueFilter(value_side) + ', ' + valueFilter(value_sneaky) + ', ' + valueFilter(value_duration) + ')}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['forward'] = function(block) {
	var code = '{robot.forward()}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['back'] = function(block) {
	var code = '{robot.back()}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['up'] = function(block) {
	var code = '{robot.up()}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['down'] = function(block) {
	var code = '{robot.down()}';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['turnleft'] = function(block) {
	var code = 'robot.turnLeft()\n';
	return code;
};

Blockly.Lua['turnright'] = function(block) {
	var code = 'robot.turnRight()\n';
	return code;
};

Blockly.Lua['turnaround'] = function(block) {
	var code = 'robot.turnAround()\n';
	return code;
};

Blockly.Lua['tankcount'] = function(block) {
	var code = 'robot.tankCount()';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['selecttank'] = function(block) {
	var value_tank = Blockly.Lua.valueToCode(block, 'tank', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.selectTank(' + valueFilter(value_tank) + ')\n';
	return code;
};

Blockly.Lua['tanklevel'] = function(block) {
	var value_tank = Blockly.Lua.valueToCode(block, 'tank', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.tankLevel(' + value_tank + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['tankspace'] = function(block) {
	var value_tank = Blockly.Lua.valueToCode(block, 'tank', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.tankSpace(' + value_tank + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['comparefluidto'] = function(block) {
	var value_tank = Blockly.Lua.valueToCode(block, 'tank', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.compareFluidTo(' + value_tank + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['transferfluidto'] = function(block) {
	var value_tank = Blockly.Lua.valueToCode(block, 'tank', Blockly.Lua.ORDER_ATOMIC);
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	if (value_tank == "")
		value_tank = 'nil';
	if (value_count == "")
		value_count = 'nil';
	var code = 'robot.transferFluidTo(' + valueFilter(value_tank) + ', ' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['comparefluid'] = function(block) {
	var code = 'robot.compareFluid()';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['comparefluidup'] = function(block) {
	var code = 'robot.compareFluidUp()';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['comparefluiddown'] = function(block) {
	var code = 'robot.compareFluidDown()';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['drain'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.drain(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['drainup'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.drainUp(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['draindown'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.drainDown(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['fill'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.fill(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['fillup'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.fillUp(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['filldown'] = function(block) {
	var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
	var code = 'robot.fillDown(' + valueFilter(value_count) + ')';
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.Lua.ORDER_NONE];
};
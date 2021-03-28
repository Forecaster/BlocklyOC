Blockly.Lua['robot_move'] = function(block) {
  const dropdown_move_direction = block.getFieldValue('move_direction');
  return 'robot.' + dropdown_move_direction + '()\n';
};

Blockly.Lua['robot_turn'] = function(block) {
  const dropdown_direction = block.getFieldValue('direction');
  return 'robot.turn' + dropdown_direction + '()\n';
};

Blockly.Lua['robot_suck'] = function(block) {
  const dropdown_direction = block.getFieldValue('direction');
  let number_count = block.getFieldValue('count');
  const value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
  if (number_count == '-1')
    number_count = '';
  return 'robot.suck' + dropdown_direction + '(' + (valueFilter(value_count) || number_count) + ')\n';
};

Blockly.Lua['robot_drop'] = function(block) {
  const dropdown_direction = block.getFieldValue('direction');
  let number_count = block.getFieldValue('count');
  const value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
  if (number_count == '-1')
    number_count = '';
  return 'robot.drop' + dropdown_direction + '(' + (valueFilter(value_count) || number_count) + ')\n';
};

Blockly.Lua['robot_place'] = function(block) {
  const dropdown_direction = block.getFieldValue('direction');
  const checkbox_sneaky = block.getFieldValue('sneaky') == 'TRUE';
  return 'robot.place' + dropdown_direction + '(' + (checkbox_sneaky ? 'true' : '') + ')\n';
};

Blockly.Lua['robot_swing'] = function(block) {
  const dropdown_direction = block.getFieldValue('direction');
  const checkbox_sneaky = block.getFieldValue('sneaky') == 'TRUE';
  return 'robot.swing' + dropdown_direction + '(' + (checkbox_sneaky ? 'true' : '') + ')\n';
};

Blockly.Lua['robot_use'] = function(block) {
  const dropdown_direction = block.getFieldValue('direction');
  let dropdown_side = block.getFieldValue('side');
  const checkbox_sneaky = block.getFieldValue('sneaky') == 'TRUE';
  let number_duration = block.getFieldValue('duration');
  if (dropdown_side == 'all')
    dropdown_side = 'nil';
  if (number_duration == '-1')
    number_duration = 'nil';
  return 'robot.use' + dropdown_direction + '(' + dropdown_side + ', ' + checkbox_sneaky + ', ' + number_duration + ')\n';
};

Blockly.Lua['wait'] = function(block) {
  const number_seconds = block.getFieldValue('seconds');
  return 'os.sleep(' + number_seconds + ')\n';
};

Blockly.Lua['computer_energy'] = function(block) {
  return ['computer.energy()', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['computer_max_energy'] = function(block) {
  return ['computer.maxEnergy()', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['computer_shutdown'] = function(block) {
  const checkbox_restart = block.getFieldValue('restart') == 'TRUE';
  return 'computer.shutdown(' + (checkbox_restart ? 'true' : '') + ')\n';
};

Blockly.Lua['computer_beep'] = function(block) {
  const text_frequency = block.getFieldValue('frequency');
  const value_frequency = Blockly.Lua.valueToCode(block, 'frequency', Blockly.Lua.ORDER_ATOMIC);
  return 'computer.beep(' + (valueFilter(value_frequency) || text_frequency) + ')\n';
};

Blockly.Lua['robot_craft'] = function(block) {
  const number_count = block.getFieldValue('count');
  const value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
  return 'crafting.craft(' + (valueFilter(value_count) || number_count) + ')\n';
};

Blockly.Lua['robot_select'] = function(block) {
  const number_slot = block.getFieldValue('slot');
  const value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  return 'robot.select(' + (valueFilter(value_slot) || number_slot) + ')\n';
};

Blockly.Lua['robot_count'] = function(block) {
  const dropdown_count = block.getFieldValue('count');
  const number_slot = block.getFieldValue('slot');
  const value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  return ['robot.' + dropdown_count + '(' + (valueFilter(value_slot) || number_slot) + ')', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['robot_transfer'] = function(block) {
  const number_slot = block.getFieldValue('slot');
  const value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  let number_count = block.getFieldValue('count');
  const value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
  if (number_count == '-1')
    number_count = 'nil';
  return 'robot.transferTo(' + (valueFilter(value_slot) || number_slot) + ', ' + (valueFilter(value_count) || number_count) + ')\n';
};

Blockly.Lua['robot_compare'] = function(block) {
  const dropdown_direction = block.getFieldValue('direction');
  return ['robot.compare' + dropdown_direction + '()', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['robot_detect'] = function(block) {
  const dropdown_direction = block.getFieldValue('direction');
  return ['robot.detect' + dropdown_direction + '()', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['robot_inventory_size'] = function(block) {
  return ['robot.inventorySize()', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['inventory_get_inventory_size'] = function(block) {
  const dropdown_side = block.getFieldValue('side');
  return ['inventory_controller.getInventorySize(' + dropdown_side + ')', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['inventory_get_stack_in_slot'] = function(block) {
  const dropdown_side = block.getFieldValue('side');
  const number_slot = block.getFieldValue('slot');
  const value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  return ['inventory_controller.getStackInSlot(' + dropdown_side + ', ' + (valueFilter(value_slot) || number_slot) + ')', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['inventory_get_stack_in_internal_slot'] = function(block) {
  const number_slot = block.getFieldValue('slot');
  const value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  return ['inventory_controller.getStackInInternalSlot(' + (valueFilter(value_slot) || number_slot) + ')', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['inventory_drop_into_slot'] = function(block) {
  const dropdown_side = block.getFieldValue('side');
  const number_slot = block.getFieldValue('slot');
  const value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  let number_count = block.getFieldValue('count');
  const value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
  if (number_count == '-1')
    number_count = 'nil';
  return 'inventory_controller.dropIntoSlot(' + dropdown_side + ', ' + (valueFilter(value_slot) || number_slot) + ', ' + (valueFilter(value_count) || number_count) + ')\n';
};

Blockly.Lua['inventory_suck_from_slot'] = function(block) {
  const dropdown_side = block.getFieldValue('side');
  const number_slot = block.getFieldValue('slot');
  const value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  let number_count = block.getFieldValue('count');
  const value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
  if (number_count == '-1')
    number_count = 'nil';
  return 'inventory_controller.suckFromSlot(' + dropdown_side + ', ' + (valueFilter(value_slot) || number_slot) + ', ' + (valueFilter(value_count) || number_count) + ')\n';
};

Blockly.Lua['inventory_equip'] = function(block) {
  return 'inventory_controller.equip()\n';
};

Blockly.Lua['redstone_get_input'] = function(block) {
  const dropdown_side = block.getFieldValue('side');
  return ['redstone.getInput(' + dropdown_side + ')', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['redstone_get_output'] = function(block) {
  const dropdown_side = block.getFieldValue('side');
  return ['redstone.getOutput(' + dropdown_side + ')', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['redstone_set_output'] = function(block) {
  const dropdown_side = block.getFieldValue('side');
  const number_value = block.getFieldValue('value');
  const value_value = Blockly.Lua.valueToCode(block, 'value', Blockly.Lua.ORDER_ATOMIC);
  return 'redstone.setOutput(' + dropdown_side + ', ' + (valueFilter(value_value) || number_value) + ')\n';
};

Blockly.Lua['sign_get_value'] = function(block) {
  return ['sign.getValue()', Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['sign_set_value'] = function(block) {
  const text_value = block.getFieldValue('value');
  const value_value = Blockly.Lua.valueToCode(block, 'value', Blockly.Lua.ORDER_ATOMIC);
  return 'sign.setValue(' + (valueFilter(value_value) || text_value) + ')\n';
};

Blockly.Lua['generator_insert'] = function(block) {
  let number_count = block.getFieldValue('count');
  const value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
  if (number_count == '-1')
    number_count = 'nil';
  return 'generator.insert(' + (valueFilter(value_count) || number_count) + ')\n';
};

Blockly.Lua['generator_remove'] = function(block) {
  let number_count = block.getFieldValue('count');
  const value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
  if (number_count == '-1')
    number_count = 'nil';
  return 'generator.remove(' + (valueFilter(value_count) || number_count) + ')\n';
};

Blockly.Lua['generator_count'] = function(block) {
  return ['generator.count()', Blockly.Lua.ORDER_NONE];
};
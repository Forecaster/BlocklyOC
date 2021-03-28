Blockly.Lua['address'] = function(block) {
  var code = 'computer.address()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['tmpaddress'] = function(block) {
  var code = 'computer.tmpAddress()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['freememory'] = function(block) {
  var code = 'computer.freeMemory()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['totalmemory'] = function(block) {
  var code = 'computer.totalMemory()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['energy'] = function(block) {
  var code = 'computer.energy()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['maxenergy'] = function(block) {
  var code = 'computer.maxEnergy()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['uptime'] = function(block) {
  var code = 'computer.uptime()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['shutdown'] = function(block) {
  var value_reboot = Blockly.Lua.valueToCode(block, 'reboot', Blockly.Lua.ORDER_ATOMIC);
  var code = 'computer.shutdown(' + valueFilter(value_reboot) + ')\n';
  return code;
};

Blockly.Lua['getbootaddress'] = function(block) {
  var code = 'computer.getBootAddress()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['setbootaddress'] = function(block) {
  var value_address = Blockly.Lua.valueToCode(block, 'address', Blockly.Lua.ORDER_ATOMIC);
  var code = 'computer.setBootAddress(' + valueFilter(value_address) + ')\n';
  return code;
};

Blockly.Lua['runlevel'] = function(block) {
  var code = 'computer.runlevel()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['users'] = function(block) {
  var code = 'computer.users()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['adduser'] = function(block) {
  var value_name = Blockly.Lua.valueToCode(block, 'name', Blockly.Lua.ORDER_ATOMIC);
  var code = 'computer.addUser(' + value_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['removeuser'] = function(block) {
  var value_name = Blockly.Lua.valueToCode(block, 'name', Blockly.Lua.ORDER_ATOMIC);
  var code = 'computer.removeUser(' + value_name + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['pushsignal'] = function(block) {
  var text_name = block.getFieldValue('name');
  var value_fields = Blockly.Lua.valueToCode(block, 'fields', Blockly.Lua.ORDER_ATOMIC);
  var code = 'computer.pushSignal(' + text_name + ', table.unpack(' + valueFilter(value_fields) + ')\n';
  return code;
};

Blockly.Lua['pullsignal'] = function(block) {
  var value_timeout = Blockly.Lua.valueToCode(block, 'timeout', Blockly.Lua.ORDER_ATOMIC);
  var code = 'computer.pullSignal(' + valueFilter(value_timeout) + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['beep'] = function(block) {
  var value_frequency = Blockly.Lua.valueToCode(block, 'frequency', Blockly.Lua.ORDER_ATOMIC);
  var value_duration = Blockly.Lua.valueToCode(block, 'duration', Blockly.Lua.ORDER_ATOMIC);
  if (value_frequency == "")
    value_frequency = 'nil';
  if (value_duration == "")
    value_frequency = 'nil';
  var code = 'computer.beep(' + valueFilter(value_frequency) + ', ' + valueFilter(value_duration) + ')\n';
  return code;
};

Blockly.Lua['getdeviceinfo'] = function(block) {
  var code = 'computer.getDeviceInfo()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};
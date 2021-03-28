Blockly.Lua['getinventorysize'] = function(block) {
  var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
  var code = 'inventory_controller.getInventorySize(' + value_side + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['getstackinslot'] = function(block) {
  var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  var code = 'inventory_controller.getStackInSlot(' + value_side + ', ' + value_slot + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['getstackininternalslot'] = function(block) {
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  var code = 'inventory_controller.getStackInInternalSlot(' + value_slot + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['suckfromslot'] = function(block) {
  var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
  if (value_count == "")
    value_count = 'nil';
  var code = 'inventory_controller.suckFromSlot(' + value_side + ', ' + value_slot + ', ' + value_count + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['equip'] = function(block) {
  var code = 'inventory_controller.equip()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['store'] = function(block) {
  var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  var value_dbaddress = Blockly.Lua.valueToCode(block, 'dbAddress', Blockly.Lua.ORDER_ATOMIC);
  var value_dbslot = Blockly.Lua.valueToCode(block, 'dbSlot', Blockly.Lua.ORDER_ATOMIC);
  var code = 'inventory_controller.store(' + value_side + ', ' + value_slot + ', ' + value_dbaddress + ', ' + value_dbslot + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['storeinternal'] = function(block) {
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  var value_dbaddress = Blockly.Lua.valueToCode(block, 'dbAddress', Blockly.Lua.ORDER_ATOMIC);
  var value_dbslot = Blockly.Lua.valueToCode(block, 'dbSlot', Blockly.Lua.ORDER_ATOMIC);
  var code = 'inventory_controller.storeInternal(' + value_slot + ', ' + value_dbaddress + ', ' + value_dbslot + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['comparetodatabase'] = function(block) {
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  var value_dbaddress = Blockly.Lua.valueToCode(block, 'dbAddress', Blockly.Lua.ORDER_ATOMIC);
  var value_dbslot = Blockly.Lua.valueToCode(block, 'dbSlot', Blockly.Lua.ORDER_ATOMIC);
  var code = 'inventory_controller.compareToDatabase(' + valueFilter(value_slot) + ', ' + valueFilter(value_dbaddress) + ', ' + valueFilter(value_dbslot) + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['comparestacks'] = function(block) {
  var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
  var value_slota = Blockly.Lua.valueToCode(block, 'slotA', Blockly.Lua.ORDER_ATOMIC);
  var value_slotb = Blockly.Lua.valueToCode(block, 'slotB', Blockly.Lua.ORDER_ATOMIC);
  var code = 'inventory_controller.compareStacks(' + valueFilter(value_side) + ', ' + valueFilter(value_slota) + ', ' + valueFilter(value_slotb) + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['getslotmaxstacksize'] = function(block) {
  var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  var code = 'inventory_controller.getSlotMaxStackSize(' + valueFilter(value_side) + ', ' + valueFilter(value_slot) + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['getslotstacksize'] = function(block) {
  var value_side = Blockly.Lua.valueToCode(block, 'side', Blockly.Lua.ORDER_ATOMIC);
  var value_slot = Blockly.Lua.valueToCode(block, 'slot', Blockly.Lua.ORDER_ATOMIC);
  var code = 'inventory_controller.getSlotStackSize(' + valueFilter(value_side) + ', ' + valueFilter(value_slot) + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};
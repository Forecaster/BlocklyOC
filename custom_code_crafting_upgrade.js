Blockly.Lua['craft'] = function(block) {
  var value_count = Blockly.Lua.valueToCode(block, 'count', Blockly.Lua.ORDER_ATOMIC);
  var code = 'crafting.craft(' + valueFilter(value_count) + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};
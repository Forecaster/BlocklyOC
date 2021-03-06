Blockly.Blocks['getinventorysize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GetInventorySize");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side");
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("Returns the size of the inventory at the specified side.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['getstackinslot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GetStackInSlot");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot");
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("Returns a table describing the item in the specified slot or nil.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['getstackininternalslot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GetStackInInternalSlot");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot");
    this.setOutput(true, "Array");
    this.setColour(230);
 this.setTooltip("Gets Itemstack description of item in specified or selected slot (if no input provided) of robot inventory.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['suckfromslot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SuckFromSlot");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Takes up to count items from the specified slot of the inventory at the specified side and puts them into the currently selected slot.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['equip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Equip");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Swaps the content of the robot's tool slot with the content of the currently selected inventory slot.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['store'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Store");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot");
    this.appendValueInput("dbAddress")
        .setCheck("String")
        .appendField("DatabaseAddress");
    this.appendValueInput("dbSlot")
        .setCheck("Number")
        .appendField("DatabaseSlot");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Stores the Itemstack description of the item from the specified slot in an inventory on the specified side, into a specified database slot with the specified address.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['storeinternal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("StoreInternal");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot");
    this.appendValueInput("dbAddress")
        .setCheck("String")
        .appendField("DatabaseAddress");
    this.appendValueInput("dbSlot")
        .setCheck("Number")
        .appendField("DatabaseSlot");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Stores Itemstack description of item in specified robot inventory slot into specified database slot with the specified database address.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['comparetodatabase'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CompareToDatabase");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot");
    this.appendValueInput("dbAddress")
        .setCheck("String")
        .appendField("DatabaseAddress");
    this.appendValueInput("dbSlot")
        .setCheck("Number")
        .appendField("DatabaseSlot");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Compare Itemstack description in specified slot with one in specified slot of a database with specified address. Returns true if items match.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['comparestacks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CompareStacks");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side");
    this.appendValueInput("slotA")
        .setCheck("Number")
        .appendField("Slot A");
    this.appendValueInput("slotB")
        .setCheck("Number")
        .appendField("Slot B");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Checks to see if Itemstack descriptions in specified slotA and slotB of inventory on specified side match. Returns true if identical.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['getslotmaxstacksize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GetSlotMaxStackSize");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("Gets maximum number of items in specified slot in inventory on the specified side.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['getslotstacksize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GetSlotStackSize");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("Gets number of items in specified slot in inventory on the specified side.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};
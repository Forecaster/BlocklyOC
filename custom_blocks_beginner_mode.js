Blockly.Blocks['robot_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move")
        .appendField(new Blockly.FieldDropdown([["Forward","forward"], ["Back","back"], ["Up","up"], ["Down","down"]]), "move_direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Make the robot attempt to move in the specified direction.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['robot_turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["Left","Left"], ["Right","Right"], ["Around","Around"]]), "direction");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Makes the robot turn 90° in the specified direction. \"Around\"  makes the robot  turn 180° to the left.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['robot_suck'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Suck")
        .appendField(new Blockly.FieldDropdown([["Forward",""], ["Up","Up"], ["Down","Down"]]), "direction");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField(new Blockly.FieldNumber(-1, -1), "count");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Tries to pick up items and put them into the selected slot or (if occupied) first possible slot. Can pick up items from the world, or an inventory.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['robot_drop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Drop")
        .appendField(new Blockly.FieldDropdown([["Forward",""], ["Up","Up"], ["Down","Down"]]), "direction");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField(new Blockly.FieldNumber(-1, -1), "count");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Tries to drop items from the currently selected inventory slot in the chosen direction.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['robot_place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Place")
        .appendField(new Blockly.FieldDropdown([["Forward",""], ["Up","Up"], ["Down","Down"]]), "direction");
    this.appendDummyInput()
        .appendField("Sneaky")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "sneaky");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Tries to place the block in the currently selected inventory slot in the chosen direction.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['robot_swing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Swing")
        .appendField(new Blockly.FieldDropdown([["Forward",""], ["Up","Up"], ["Down","Down"]]), "direction");
    this.appendDummyInput()
        .appendField("Sneaky")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "sneaky");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Makes the robot use the item currently in the tool slot against the block or space in the specified direction in the same way as if a player would make a left-click.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['robot_use'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Use")
        .appendField(new Blockly.FieldDropdown([["Forward",""], ["Up","Up"], ["Down","Down"]]), "direction");
    this.appendDummyInput()
        .appendField("Side")
        .appendField(new Blockly.FieldDropdown([["All","all"], ["Bottom","0"], ["Top","1"], ["Back","2"], ["Front","3"], ["Right","4"], ["Left","5"]]), "side");
    this.appendDummyInput()
        .appendField("Sneaky")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "sneaky");
    this.appendDummyInput()
        .appendField("Duration")
        .appendField(new Blockly.FieldNumber(-1, -1), "duration");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Attempts to use the item currently equipped in the tool slot in the same way as if the player would make a right-click.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wait");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0), "seconds")
        .appendField("Seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Causes the computer to sleep for the specified number of seconds.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['computer_energy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Energy");
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("Returns the current energy level of the computer.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['computer_max_energy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MaxEnergy");
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("Returns the maximum energy level of the computer.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['computer_shutdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Shutdown");
    this.appendDummyInput()
        .appendField("Restart")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "restart");
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("Shuts down or reboots the computer.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['computer_beep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Beep");
    this.appendValueInput("frequency")
        .setCheck("String")
        .appendField("Frequency")
        .appendField(new Blockly.FieldTextInput("."), "frequency");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Makes the computer beep. You can use the frequency field to specify a pattern of dots . and dashes - to define a pattern.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['robot_craft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Craft");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField(new Blockly.FieldNumber(0, 0), "count");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Crafts up to count numbers or a full stack. If count is 0 will try to craft as many items as possible. Requires a crafting upgrade.");
 this.setHelpUrl("https://ocdoc.cil.li/component:crafting");
  }
};

Blockly.Blocks['robot_select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Select");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot")
        .appendField(new Blockly.FieldNumber(1, 1), "slot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Selects the specified slot in the robot's inventory.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['robot_count'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Count")
        .appendField(new Blockly.FieldDropdown([["Items","count"], ["Space","space"]]), "count");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot")
        .appendField(new Blockly.FieldNumber(1, 1), "slot");
    this.setOutput(true, null);
    this.setColour(20);
 this.setTooltip("Counts either the items or free space in the specified slot");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['robot_transfer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Transfer to");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot")
        .appendField(new Blockly.FieldNumber(1, 1), "slot");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField(new Blockly.FieldNumber(-1, -1), "count");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Tries to transfer all or up to count items from the selected slot to the specified slot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['robot_compare'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Compare")
        .appendField(new Blockly.FieldDropdown([["Forward",""], ["Up","Up"], ["Down","Down"]]), "direction");
    this.setOutput(true, "Boolean");
    this.setColour(20);
 this.setTooltip("Compares the block in the chosen direction with the currently selected slot. Returns true if they are the same, or false if not.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['robot_detect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Detect")
        .appendField(new Blockly.FieldDropdown([["Forward",""], ["Up","Up"], ["Down","Down"]]), "direction");
    this.setOutput(true, "Boolean");
    this.setColour(20);
 this.setTooltip("Detects what is directly in front of the robot and returns true if the robot could move through it.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['crafting_craft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Craft");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField(new Blockly.FieldNumber(0, 0), "count");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Crafts up to count numbers or a full stack. If count is 0 will try to craft as many items as possible. Requires a crafting upgrade.");
 this.setHelpUrl("https://ocdoc.cil.li/component:crafting");
  }
};

Blockly.Blocks['inventory_get_inventory_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Inventory Size");
    this.appendDummyInput()
        .appendField("Side")
        .appendField(new Blockly.FieldDropdown([["Bottom","0"], ["Top","1"], ["Back","2"], ["Front","3"], ["Right","4"], ["Left","5"]]), "side");
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("Returns: the size of the inventory, or nil.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['robot_inventory_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Inventory Size");
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("Returns the amount of select-able internal robot inventory slots.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['inventory_get_stack_in_slot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Stack In Slot");
    this.appendDummyInput()
        .appendField("Side")
        .appendField(new Blockly.FieldDropdown([["Bottom","0"], ["Top","1"], ["Back","2"], ["Front","3"], ["Right","4"], ["Left","5"]]), "side");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot")
        .appendField(new Blockly.FieldNumber(1, 1), "slot");
    this.setOutput(true, "Array");
    this.setColour(20);
 this.setTooltip("Returns a table describing the item in the specified slot or nil.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['inventory_get_stack_in_internal_slot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Stack In Internal Slot");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot")
        .appendField(new Blockly.FieldNumber(1, 1), "slot");
    this.setOutput(true, "Array");
    this.setColour(20);
 this.setTooltip("Gets Itemstack description of item in specified or selected slot (if no input provided) of robot inventory.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['inventory_drop_into_slot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Drop Into Slot")
        .appendField(new Blockly.FieldDropdown([["Bottom","0"], ["Top","1"], ["Back","2"], ["Front","3"], ["Right","4"], ["Left","5"]]), "side");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot")
        .appendField(new Blockly.FieldNumber(1, 1), "slot");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField(new Blockly.FieldNumber(-1, -1), "count");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Puts up to count items from the currently selected slot into the specified slot of the inventory at the specified side. Returns true if at least one item was moved.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['inventory_suck_from_slot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Suck From Slot")
        .appendField(new Blockly.FieldDropdown([["Bottom","0"], ["Top","1"], ["Back","2"], ["Front","3"], ["Right","4"], ["Left","5"]]), "side");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot")
        .appendField(new Blockly.FieldNumber(1, 1), "slot");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField(new Blockly.FieldNumber(-1, -1), "count");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Takes up to count items from the specified slot of the inventory at the specified side and puts them into the currently selected slot.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['inventory_equip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Equip");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Swaps the content of the robot's tool slot with the content of the currently selected inventory slot.");
 this.setHelpUrl("https://ocdoc.cil.li/component:inventory_controller");
  }
};

Blockly.Blocks['redstone_get_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Input")
        .appendField(new Blockly.FieldDropdown([["Bottom","0"], ["Top","1"], ["Back","2"], ["Front","3"], ["Right","4"], ["Left","5"]]), "side");
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("Returns the redstone level from the specified side.");
 this.setHelpUrl("https://ocdoc.cil.li/component:redstone");
  }
};

Blockly.Blocks['redstone_get_output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Output")
        .appendField(new Blockly.FieldDropdown([["Bottom","0"], ["Top","1"], ["Back","2"], ["Front","3"], ["Right","4"], ["Left","5"]]), "side");
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("Gets the currently set output on the specified side.");
 this.setHelpUrl("https://ocdoc.cil.li/component:redstone");
  }
};

Blockly.Blocks['redstone_set_output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Output")
        .appendField(new Blockly.FieldDropdown([["Bottom","0"], ["Top","1"], ["Back","2"], ["Front","3"], ["Right","4"], ["Left","5"]]), "side");
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("Value")
        .appendField(new Blockly.FieldNumber(0, 0, 15), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Sets the strength of the redstone signal to emit on the specified side.");
 this.setHelpUrl("https://ocdoc.cil.li/component:redstone");
  }
};

Blockly.Blocks['sign_get_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Value");
    this.setOutput(true, "String");
    this.setColour(20);
 this.setTooltip("ets the text currently displayed on the sign in front of the robot, or nil if there is no sign.");
 this.setHelpUrl("https://ocdoc.cil.li/component:sign");
  }
};

Blockly.Blocks['sign_set_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Value");
    this.appendValueInput("value")
        .setCheck("String")
        .appendField("Value")
        .appendField(new Blockly.FieldTextInput(""), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("ets the text currently displayed on the sign in front of the robot, or nil if there is no sign.");
 this.setHelpUrl("https://ocdoc.cil.li/component:sign");
  }
};

Blockly.Blocks['generator_insert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Insert");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField(new Blockly.FieldNumber(-1, -1), "count");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Inserts up to the specified number of fuel items from the currently selected inventory slot into the generator's inventory.");
 this.setHelpUrl("https://ocdoc.cil.li/component:generator");
  }
};

Blockly.Blocks['generator_remove'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Remove");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField(new Blockly.FieldNumber(-1, -1), "count");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Removes up to the specified number of fuel items from the generator and places them into the currently selected slot or the first free slot after it.");
 this.setHelpUrl("https://ocdoc.cil.li/component:generator");
  }
};

Blockly.Blocks['generator_count'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Count");
    this.setOutput(true, "Number");
    this.setColour(20);
 this.setTooltip("The current number of fuel items still in the generator.");
 this.setHelpUrl("https://ocdoc.cil.li/component:generator");
  }
};
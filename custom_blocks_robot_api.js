Blockly.Blocks['name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Name");
    this.setOutput(true, "String");
    this.setColour(330);
 this.setTooltip("Returns the robot's name.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['detect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Detect");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("Detects what is directly in front of the robot and returns if the robot could move through it as well as a generic description.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['detectup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DetectUp");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("As robot.detect() except that it scans the block directly above the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['detectdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DetectDown");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("As robot.detect() except that it scans the block directly below the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Select");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("Selects the given inventory slot (if specified) and returns the current inventory slot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['inventorysize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("InventorySize");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("Returns the amount of select-able internal robot inventory slots.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['count'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Count");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot")
        .appendField("(optional)");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("Returns the amount of items currently in the specified or selected slot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['space'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Space");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot")
        .appendField("(optional)");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("Returns the amount of items that can still be added to the specified slot until it is filled up.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['transferto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TransferTo");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Moves all or up to count items from the currently selected slot to the specified slot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['compareto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CompareTo");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("Slot");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Compares the item of the currently selected slot to the item of the slot specified and returns whether they are equal or not.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['compare'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Compare");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Compares the block in front of the robot with the item in the currently selected slot and returns whether they are the same or not.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['compareup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CompareUp");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("As robot.compare just for the block directly above the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['comparedown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CompareDown");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("As robot.compare just for the block directly below the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['drop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Drop");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("ries to drop items from the currently selected inventory slot in front of the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['dropup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DropUp");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("ries to drop items from the currently selected inventory slot in front of the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['dropdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DropDown");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("ries to drop items from the currently selected inventory slot in front of the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['suck'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Suck");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Tries to pick up items from directly in front of the robot and puts it into the selected slot or (if occupied) first possible slot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['suckup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SuckUp");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("As robot.suck except that it tries to pick up items from directly above the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['suckdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SuckDown");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("As robot.suck except that it tries to pick up items from directly below the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['place'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Place");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side")
        .appendField("(optional)");
    this.appendValueInput("sneaky")
        .setCheck("Boolean")
        .appendField("Sneaky")
        .appendField("(optional)");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("Tries to place the block in the currently selected inventory slot in front of the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['placeup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PlaceUp");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side")
        .appendField("(optional)");
    this.appendValueInput("sneaky")
        .setCheck("Boolean")
        .appendField("Sneaky")
        .appendField("(optional)");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("As robot.place except that the robot tries to place the item into the space directly above it.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['placedown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PlaceDown");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side")
        .appendField("(optional)");
    this.appendValueInput("sneaky")
        .setCheck("Boolean")
        .appendField("Sneaky")
        .appendField("(optional)");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("As robot.place except that the robot tries to place the item into the space directly below it.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['durability'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Durability");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("Returns the durability of the item currently in the tool slot, followed by its current durability, followed by its maximum durability.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['swing'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Swing");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side")
        .appendField("(optional)");
    this.appendValueInput("sneaky")
        .setCheck("Boolean")
        .appendField("Sneaky")
        .appendField("(optional)");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("Makes the robot use the item currently in the tool slot against the block or space immediately in front of the robot in the same way as if a player would make a left-click.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['swingup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SwingUp");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side")
        .appendField("(optional)");
    this.appendValueInput("sneaky")
        .setCheck("Boolean")
        .appendField("Sneaky")
        .appendField("(optional)");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("As robot.swing except that the block or entity directly above the robot will be the target.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['swingdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SwingDown");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side")
        .appendField("(optional)");
    this.appendValueInput("sneaky")
        .setCheck("Boolean")
        .appendField("Sneaky")
        .appendField("(optional)");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("As robot.swing except that the block or entity directly below the robot will be the target.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['use'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Use");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side")
        .appendField("(optional)");
    this.appendValueInput("sneaky")
        .setCheck("Boolean")
        .appendField("Sneaky")
        .appendField("(optional)");
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField("Duration")
        .appendField("(optional)");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("Attempts to use the item currently equipped in the tool slot in the same way as if the player would make a right-click.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['useup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("UseUp");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side")
        .appendField("(optional)");
    this.appendValueInput("sneaky")
        .setCheck("Boolean")
        .appendField("Sneaky")
        .appendField("(optional)");
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField("Duration")
        .appendField("(optional)");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("As robot.use except that the item is used aiming at the area above the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['usedown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("UseDown");
    this.appendValueInput("side")
        .setCheck("Number")
        .appendField("Side")
        .appendField("(optional)");
    this.appendValueInput("sneaky")
        .setCheck("Boolean")
        .appendField("Sneaky")
        .appendField("(optional)");
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField("Duration")
        .appendField("(optional)");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("As robot.use except that the item is used aiming at the area below the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['back'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Back");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("As robot.forward() except that the robot tries to move backward.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Up");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("As robot.forward() except that the robot tries to move upwards.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Forward");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("Tries to move the robot forward.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Down");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("As robot.forward() except that the robot tries to move downwards.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['turnleft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TurnLeft");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Turns the robot 90° to the left.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['turnright'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TurnRight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("As robot.turnLeft except that the robot turns 90° to the right.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['turnaround'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TurnAround");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("This is the same as calling robot.turnRight twice.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['tankcount'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TankCount");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("This is the same as calling robot.turnRight twice.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['selecttank'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SelectTank");
    this.appendValueInput("tank")
        .setCheck("Number")
        .appendField("Tank");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Select the specified tank. This determines which tank most operations operate on.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['tankspace'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TankSpace");
    this.appendValueInput("tank")
        .setCheck("Number")
        .appendField("Tank")
        .appendField("(optional)");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("The the remaining fluid capacity in the specified tank, or, if none is specified, the selected tank.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['comparefluidto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CompareFluidTo");
    this.appendValueInput("tank")
        .setCheck("Number")
        .appendField("Tank")
        .appendField("(optional)");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("Tests whether the fluid in the selected tank is the same as in the specified tank.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['transferfluidto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TransferFluidTo");
    this.appendValueInput("tank")
        .setCheck("Number")
        .appendField("Tank")
        .appendField("(optional)");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Transfers the specified amount of fluid from the selected tank into the specified tank. If no volume is specified, tries to transfer 1000 mB.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['comparefluid'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CompareFluid");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Tests whether the fluid in the selected tank is the same as in the world or the tank in front of the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['comparefluidup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CompareFluidUp");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Like compareFluid, but operates on the block above the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['comparefluiddown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CompareFluidDown");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Like compareFluid, but operates on the block below the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['drain'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Drain");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Extracts the specified amount of fluid from the world or the tank in front of the robot. When no amount is specified, will try to drain 1000 mB. When the drained fluid is in the world and it cannot be fully stored in the selected tank, the operation fails, i.e. no fluid is lost.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['drainup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DrainUp");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Like drain, but operates on the block above the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['draindown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DrainDown");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Like drain, but operates on the block below the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['fillup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("FillUp");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Like fill, but operates on the block above the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};

Blockly.Blocks['filldown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("FillDown");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Like fill, but operates on the block below the robot.");
 this.setHelpUrl("https://ocdoc.cil.li/api:robot");
  }
};
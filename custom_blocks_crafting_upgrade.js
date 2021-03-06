Blockly.Blocks['craft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Craft");
    this.appendValueInput("count")
        .setCheck("Number")
        .appendField("Count")
        .appendField("(optional)");
    this.setOutput(true, "Boolean");
    this.setColour(230);
 this.setTooltip("Crafts up to count numbers or a full stack.");
 this.setHelpUrl("https://ocdoc.cil.li/component:crafting");
  }
};
Blockly.Blocks['address'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Address");
    this.setOutput(true, "String");
    this.setColour(330);
 this.setTooltip("The component address of this computer.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['tmpaddress'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TmpAddress");
    this.setOutput(true, "String");
    this.setColour(330);
 this.setTooltip("The component address of the computer's temporary file system (if any), used for mounting it on startup.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['freememory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("FreeMemory");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("The amount of memory currently unused, in bytes. If this gets close to zero your computer will probably soon crash with an out of memory error. Note that for OpenOS, it is highly recommended to at least have 1x tier 1.5 RAM stick or more. The os will boot on a single tier 1 ram stick, but quickly and easily run out of memory.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['totalmemory'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("TotalMemory");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("The total amount of memory installed in this computer, in bytes.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['energy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Energy");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("The amount of energy currently available in the network the computer is in. For a robot this is the robot's own energy / fuel level.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['maxenergy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("MaxEnergy");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("The maximum amount of energy that can be stored in the network the computer is in. For a robot this is the size of the robot's internal buffer (what you see in the robot's GUI).");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['uptime'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Uptime");
    this.setOutput(true, "Number");
    this.setColour(330);
 this.setTooltip("The time in real world seconds this computer has been running, measured based on the world time that passed since it was started - meaning this will not increase while the game is paused, for example.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['shutdown'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Shutdown");
    this.appendValueInput("reboot")
        .setCheck("Boolean")
        .appendField("Reboot")
        .appendField("(optional)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Shuts down the computer. Optionally reboots the computer, if reboot is true, i.e. shuts down, then starts it again automatically. This function never returns. This example will reboot the computer if it has been running for at least 300 seconds(5 minutes)");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['getbootaddress'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GetBootAddress");
    this.setOutput(true, "String");
    this.setColour(330);
 this.setTooltip("Get the address of the filesystem component from which to try to boot first. New since OC 1.3.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['setbootaddress'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("SetBootAddress");
    this.appendValueInput("address")
        .setCheck("String")
        .appendField("Address")
        .appendField("(optional)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Set the address of the filesystem component from which to try to boot first. Call with nil / no arguments to clear. New since OC 1.3.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['runlevel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RunLevel");
    this.setOutput(true, ["String", "Number"]);
    this.setColour(330);
 this.setTooltip("Returns the current runlevel the computer is in. Current Runlevels in OpenOS are:  S: Single-User mode, no components or filesystems initialized yet 1: Single-User mode, filesystems and components initialized - OpenOS finished booting");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['users'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Users");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("Set the address of the filesystem component from which to try to boot first. Call with nil / no arguments to clear. New since OC 1.3.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['adduser'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("AddUser");
    this.appendValueInput("name")
        .setCheck("String")
        .appendField("Name");
    this.setOutput(true, ["Boolean", "Array"]);
    this.setColour(330);
 this.setTooltip("Registers a new user with this computer. Returns true if the user was successfully added. Returns nil and an error message otherwise. The user must be currently in the game. The user will gain full access rights on the computer. In the shell, useradd USER is a command line option to invoke this method.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['removeuser'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("RemoveUser");
    this.appendValueInput("name")
        .setCheck("String")
        .appendField("Name");
    this.setOutput(true, "Boolean");
    this.setColour(330);
 this.setTooltip("Unregisters a user from this computer. Returns true if the user was removed, false if they weren't registered in the first place. The user will lose all access to this computer. When the last user is removed from the user list, the computer becomes accessible to all players. userdel USER is a command line option to invoke this method.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['pushsignal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PushSignal")
        .appendField(new Blockly.FieldTextInput("signal_name"), "name");
    this.appendValueInput("fields")
        .setCheck("Array")
        .appendField("Fields")
        .appendField("(optional)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Unregisters a user from this computer. Returns true if the user was removed, false if they weren't registered in the first place. The user will lose all access to this computer. When the last user is removed from the user list, the computer becomes accessible to all players. userdel USER is a command line option to invoke this method.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['pullsignal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PullSignal");
    this.appendValueInput("timeout")
        .setCheck("Number")
        .appendField("Timeout")
        .appendField("(optional)");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("Tries to pull a signal from the queue, waiting up to the specified amount of time before failing and returning nil. If no timeout is specified waits forever. The first returned result is the signal name, following results correspond to what was pushed in pushSignal, for example. These vary based on the event type. Generally it is more convenient to use event.pull from the event library. The return value is the very same, but the event library provides some more options.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['beep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Beep");
    this.appendValueInput("frequency")
        .setCheck(["String", "Number"])
        .appendField("Frequency")
        .appendField("(optional)");
    this.appendValueInput("duration")
        .setCheck("Number")
        .appendField("Duration")
        .appendField("(optional)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("Causes the computer to produce a beep sound at frequency Hz for duration seconds. This method is overloaded taking a single string parameter as a pattern of dots . and dashes - for short and long beeps respectively.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};

Blockly.Blocks['getdeviceinfo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("GetDeviceInfo");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("Returns a table of information about installed devices in the computer.");
 this.setHelpUrl("https://ocdoc.cil.li/api:computer");
  }
};
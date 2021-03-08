# BlocklyOC
https://towerofawesome.org/blocklyoc/

This web application uses the [Blockly library by Google](https://developers.google.com/blockly/) to provide a block-based programming interface for the Minecraft mod [OpenComputers](https://github.com/MightyPirates/OpenComputers/).

It is mainly intended for programming robots.

BlocklyOC has two modes, the default Beginner Mode contains a set of simplified instruction blocks for movement and interaction with the world. Most of these cover multiple methods within the OpenComputers APIs instead of being a one-to-one mapping.
For example the "Move" instruction can generate a `forward()`, `back()`, `up()`, or `down()` call depending on the direction chosen in the Direction dropdown.

The second mode, Advanced, provides a set of instruction blocks that is a one-to-one mapping of the provided APIs. For example instead of the Move instruction in the Beginner Mode, separate blocks are provided for `Forward`, `Back`, `Up`, and `Down`.

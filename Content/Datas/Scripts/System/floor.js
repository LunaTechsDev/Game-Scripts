/*
    RPG Paper Maker Copyright (C) 2017-2019 Wano

    RPG Paper Maker engine is under proprietary license.
    This source code is also copyrighted.

    Use Commercial edition for commercial use of your games.
    See RPG Paper Maker EULA here:
        http://rpg-paper-maker.com/index.php/eula.
*/

// -------------------------------------------------------
//
//  CLASS Floor
//
// -------------------------------------------------------

/** @class
*   @extends Land
*   A floor in the map.
*/
function Floor() {
    Land.call(this);
}

Floor.prototype = {

    /** Read the JSON associated to the floor.
    *   @param {Object} json Json object describing the object.
    */
    read: function(json) {
        Land.prototype.read.call(this, json);
    },

    /** Update the geometry associated to this floor.
    *   @returns {THREE.Geometry}
    */
    updateGeometry: function(geometry, position, width, height, i) {
        if (width === 0 || height === 0) {
            return null;
        }

        var x = (this.texture[0] * $SQUARE_SIZE) / width;
        var y = (this.texture[1] * $SQUARE_SIZE) / height;
        var w = (this.texture[2] * $SQUARE_SIZE) / width;
        var h = (this.texture[3] * $SQUARE_SIZE) / height;

        return Land.prototype.updateGeometry.call(this, geometry,
            $currentMap.mapInfos.tileset.picture.getCollisionAt(this.texture),
            position, width, height, x, y, w, h, i);
    }
}

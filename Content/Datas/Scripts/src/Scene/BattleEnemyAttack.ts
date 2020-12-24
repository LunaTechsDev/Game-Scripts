
/*
    RPG Paper Maker Copyright (C) 2017-2020 Wano

    RPG Paper Maker engine is under proprietary license.
    This source code is also copyrighted.

    Use Commercial edition for commercial use of your games.
    See RPG Paper Maker EULA here:
        http://rpg-paper-maker.com/index.php/eula.
*/

import { Battle } from "./Battle"

// -------------------------------------------------------
//
//  CLASS SceneBattle
//
//  Step 3 : Enemy attack (IA)
//
// -------------------------------------------------------

class BattleEnemyAttack {

    battle:Battle
    public constructor(battle:Battle) {
        this.battle = battle;
    }
}

export {BattleEnemyAttack}
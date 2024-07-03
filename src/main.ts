import { Game, Types } from 'phaser'

import { Boot } from './scenes/Boot'
import { Game as MainGame } from './scenes/Game'
import { GameOver } from './scenes/GameOver'
import { MainMenu } from './scenes/MainMenu'
import { Preloader } from './scenes/Preloader'

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
// As a reminder tiles are 16x16 pixels, 3:2 aspect ratio
const screenScale = 4
const widthPixels = 240
const heightPixels = 160
const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
    backgroundColor: '#028af8',
    pixelArt: true,
    roundPixels: true,
    scale: {
        parent: 'game-container',
        mode: Phaser.Scale.FIT,
        autoCenter: (window.innerWidth > window.innerHeight)
            ? Phaser.Scale.CENTER_BOTH
            : Phaser.Scale.CENTER_HORIZONTALLY,
        width: screenScale * ((window.innerWidth > window.innerHeight) ? widthPixels : heightPixels),
        height: screenScale * ((window.innerWidth > window.innerHeight) ? heightPixels : widthPixels),
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        MainGame,
        GameOver,
    ],
}

export default new Game(config)

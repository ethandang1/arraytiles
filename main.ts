namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function buildLevel () {
    if (next_level == list.length) {
        game.over(true)
    }
    scene.setTileMap(list[next_level], TileScale.Sixteen)
    for (let value of scene.getTilesByType(4)) {
        scene.place(value, player1)
    }
    next_level += 1
}
scene.onHitTile(SpriteKind.Player, 7, function (sprite) {
    buildLevel()
})
let player1: Sprite = null
let next_level = 0
let list: Image[] = []
list = [img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f 4 f f f f f f f f f f f f 7 f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 4 3 3 3 3 3 3 3 3 3 3 3 3 7 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`, img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a 4 a a a a a a a a a a a a 7 a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
`]
scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 5 5 7 7 7 7 7 7 7 
7 7 7 7 7 7 5 5 5 7 7 7 7 7 7 7 
7 7 5 5 5 5 5 5 5 5 7 7 7 7 7 7 
7 7 7 7 5 5 5 5 5 5 5 5 5 5 5 7 
7 7 7 7 7 5 5 5 5 5 5 5 5 5 7 7 
7 7 7 7 5 5 5 5 5 5 5 5 7 7 7 7 
7 7 7 7 5 5 5 5 5 5 5 5 7 7 7 7 
7 7 7 5 5 5 5 7 7 7 7 5 5 7 7 7 
7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)
next_level = 0
player1 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . d d d d d d d . . . . . 
. . . . d . . . . . d . . . . . 
. . . . d . . . . . d . . . . . 
. . . . d . . . . . d . . . . . 
. . . . d d d d d d d . . . . . 
. . . . . . . d . . . . . . . . 
. . . . d d d d d d d . . . . . 
. . . . d . . d . . . . . . . . 
. . . . . . . d . . . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d . . . d . . . . . . 
. . . . . d . . . d . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(player1, 100, 100)
buildLevel()

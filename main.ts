namespace SpriteKind {
    export const coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(coin)
})
let coin: Sprite = null
scene.setBackgroundColor(8)
coin = sprites.create(img`
    ...........44.......
    ...........4........
    ...........2........
    ...........2........
    .........44444......
    .........44444......
    .........44444......
    .......444444444d88.
    ...44.444444444d6698
    ...4424554dd455d6668
    ..2442454d89d45d8868
    ..2442444d88d44d8868
    ..24424444dd4444dddd
    ...44224444444444422
    ...44.2222222222222.
    .......22222222222..
    `, SpriteKind.Player)
controller.moveSprite(coin, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(coin)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 4 4 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}

input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showNumber(3)
        basic.showNumber(2)
        basic.showNumber(1)
        basic.showNumber(0)
        basic.pause(2000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0)
})
basic.showString("2F 14 Rachel")

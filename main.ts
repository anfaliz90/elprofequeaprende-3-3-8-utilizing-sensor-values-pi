let motion = 0
radio.setGroup(1)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    motion = input.acceleration(Dimension.Strength)
    radio.sendNumber(motion)
})

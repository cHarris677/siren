let Volt = 0
basic.forever(function () {
    Volt = pins.analogReadPin(AnalogPin.P1)
    Volt = pins.map(
    Volt,
    0,
    1023,
    2000,
    1000
    )
    pins.analogSetPeriod(AnalogPin.P0, Volt)
    pins.analogWritePin(AnalogPin.P0, 512)
})

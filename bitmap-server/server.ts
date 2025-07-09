namespace jacdac {
    export class BitmapServer extends jacdac.SensorServer {
        constructor(
            public readonly bitmap: Bitmap,
            options?: jacdac.SensorServerOptions
        ) {
            super(jacdac.SRV_BITMAP, options)
            // this.button.onEvent(MkcdButtonEvent.Down, () =>
            //     this.sendEvent(JDButtonEvent.Down)
            // )
            // this.button.onEvent(MkcdButtonEvent.Up, () =>
            //     this.sendEvent(JDButtonEvent.Up)
            // )
            // this.button.onEvent(<number>DAL.DEVICE_BUTTON_EVT_HOLD, () =>
            //     this.sendEvent(JDButtonEvent.Hold)
            // )
        }

        // serializeState(): Buffer {
        //     const pressed = this.button.isPressed()
        //     return jacdac.jdpack(jacdac.ButtonRegPack.Pressure, [
        //         pressed ? 1 : 0,
        //     ])
        // }
    }
}

import JDButtonEvent = jacdac.ButtonEvent
import MkcdButtonEvent = ButtonEvent

namespace jacdac {
    export class DisplayServer extends jacdac.SensorServer {
        constructor(
            public readonly display: Display,
            options?: jacdac.SensorServerOptions
        ) {
            super(jacdac.SRV_DISPLAY, options)
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

        public hello(): string {
            // const pressed = this.button.isPressed()
            // return jacdac.jdpack(jacdac.ButtonRegPack.Pressure, [
            //     pressed ? 1 : 0,
            // ])
            return "hello";
        }
    }
}

namespace jacdac {
    // Service Display constants
    export const SRV_DISPLAY = 0xaa5b7d92
    export const enum DisplayReg {
        /**
         * Read-only x uint8_t. Indicates which display is being used.
         *
         * ```
         * const [x] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        WhichDisplay = 0x101,
    }

    export namespace DisplayRegPack {
        /**
         * Pack format for 'which_display' data.
         */
        export const WhichDisplay = "u8"
    }

    export const enum DisplayCmd {
        /**
         * No args. Initialise the display, so that it is ready to receive commands.
         */
        Calibrate = 0x2,
    }
}

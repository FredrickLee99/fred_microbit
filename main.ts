function Turn_Right_2 () {
    wuKong.setAllMotor(100, 40)
}
function Turn_Right_0 () {
    wuKong.setAllMotor(100, -100)
}
function Turn_Left_0 () {
    wuKong.setAllMotor(-100, 100)
}
function Forward () {
    wuKong.setAllMotor(100, 100)
}
function 手臂抓取物件 () {
    手臂校正 = 90
    爪子校正 = 90
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 手臂校正)
    basic.pause(1000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S7, 爪子校正)
    basic.pause(1000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 140)
    basic.pause(1000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S7, 爪子校正)
    basic.pause(1000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S7, 30)
    basic.pause(1000)
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
    basic.pause(1000)
}
function Turn_Left_1 () {
    wuKong.setAllMotor(0, 100)
}
function Turn_Right_1 () {
    wuKong.setAllMotor(100, 0)
}
function Backword () {
    wuKong.setAllMotor(-100, -100)
}
function 循跡函式 () {
    Left = 292
    Right = 136
    while (pins.digitalReadPin(DigitalPin.P0) <= Left || pins.digitalReadPin(DigitalPin.P1) <= Right) {
        if (pins.digitalReadPin(DigitalPin.P0) <= Left && pins.digitalReadPin(DigitalPin.P1) <= Right) {
            Forward()
        } else if (pins.digitalReadPin(DigitalPin.P0) >= Left && pins.digitalReadPin(DigitalPin.P1) <= Right) {
            Turn_Left_0()
        } else if (pins.digitalReadPin(DigitalPin.P0) <= Left && pins.digitalReadPin(DigitalPin.P1) >= Right) {
            Turn_Right_0()
        }
    }
    Forward()
    basic.pause(1000)
    while (pins.digitalReadPin(DigitalPin.P0) <= Left || pins.digitalReadPin(DigitalPin.P1) <= Right) {
        if (pins.digitalReadPin(DigitalPin.P0) <= Left && pins.digitalReadPin(DigitalPin.P1) <= Right) {
            Forward()
        } else if (pins.digitalReadPin(DigitalPin.P0) >= Left && pins.digitalReadPin(DigitalPin.P1) <= Right) {
            Turn_Left_0()
        } else if (pins.digitalReadPin(DigitalPin.P0) <= Left && pins.digitalReadPin(DigitalPin.P1) >= Right) {
            Turn_Right_0()
        }
    }
    Stop()
}
function Turn_Left_2 () {
    wuKong.setAllMotor(40, 100)
}
function Stop () {
    wuKong.setAllMotor(0, 0)
}
let Right = 0
let Left = 0
let 爪子校正 = 0
let 手臂校正 = 0
手臂校正 = 90
爪子校正 = 90
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 手臂校正)
basic.pause(1000)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S7, 爪子校正)
basic.pause(1000)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 140)
basic.pause(1000)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S7, 爪子校正)
basic.pause(1000)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S7, 30)
basic.pause(1000)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
basic.pause(1000)
basic.forever(function () {
    for (let index = 0; index < 2; index++) {
        serial.writeString("L=" + pins.digitalReadPin(DigitalPin.P0) + ",R=" + pins.digitalReadPin(DigitalPin.P1))
        serial.writeLine("")
        basic.pause(1000)
    }
})
basic.forever(function () {
    Left = 292
    Right = 136
    while (pins.digitalReadPin(DigitalPin.P0) <= Left || pins.digitalReadPin(DigitalPin.P1) <= Right) {
        if (pins.digitalReadPin(DigitalPin.P0) <= Left && pins.digitalReadPin(DigitalPin.P1) <= Right) {
            Forward()
        } else if (pins.digitalReadPin(DigitalPin.P0) >= Left && pins.digitalReadPin(DigitalPin.P1) <= Right) {
            Turn_Left_0()
        } else if (pins.digitalReadPin(DigitalPin.P0) <= Left && pins.digitalReadPin(DigitalPin.P1) >= Right) {
            Turn_Right_0()
        }
    }
    Forward()
    basic.pause(1000)
    while (pins.digitalReadPin(DigitalPin.P0) <= Left || pins.digitalReadPin(DigitalPin.P1) <= Right) {
        if (pins.digitalReadPin(DigitalPin.P0) <= Left && pins.digitalReadPin(DigitalPin.P1) <= Right) {
            Forward()
        } else if (pins.digitalReadPin(DigitalPin.P0) >= Left && pins.digitalReadPin(DigitalPin.P1) <= Right) {
            Turn_Left_0()
        } else if (pins.digitalReadPin(DigitalPin.P0) <= Left && pins.digitalReadPin(DigitalPin.P1) >= Right) {
            Turn_Right_0()
        }
    }
    Stop()
})

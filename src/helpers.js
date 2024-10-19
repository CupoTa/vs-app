import { CONFIG } from './config'

export function formatPoints (points){
    const formatPoints = new Intl.NumberFormat('en-En').format(points)
    
    return formatPoints;
}

export function checkTime (user)  {
    if(user?.lastTimeTap + CONFIG.PERIOD_COOLING * 1000 > Date.now())
        return false
    return true
}

export function checkTestTime (user) {
    if(user?.lastTimeTap + 20 * 1000 > Date.now())
        return false
    return true
}

export function getAutoFarmPoints(lastTimeClaim, amount) {
    const time = Date.now() - lastTimeClaim
    if(lastTimeClaim == 0)
        return CONFIG.HELLO_BONUS
    if(time < CONFIG.PERIOD_COOLING * 1000){
        return (Math.floor(time / 60 / 1000)) * amount
    } else {
        return (CONFIG.PERIOD_COOLING / 60) * amount
    }
}
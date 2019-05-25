let humidity
let isRaining
let isOn
let waterConsumption

class System {
    constructor() {
        humidity = 0;
        isRaining = false;
        isOn = false;
        waterConsumption = 0; 
    }    

    getHumidity() {
        return humidity
    }
    
    getIsRaining() {
        return isRaining
    }

    getIsOn() {
        return isOn
    }

    getWaterConsumption() {
        return waterConsumption
    }

    setHumidity(newHumidity) {
        humidity = newHumidity
    }

    setIsRaining(rainingState) {
        isRaining = rainingState
    }

    setIsOn(state) {
        isOn = state
    }

    setHumidity(newWaterConsumption) {
        waterConsumption = newWaterConsumption
    }
}
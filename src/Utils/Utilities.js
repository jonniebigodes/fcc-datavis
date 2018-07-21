import { dataVisConstant } from './Constants'

class Utilities {
  static setStorageData(token, value) {
    localStorage.setItem(token, JSON.stringify(value))
  }
  static getStorageData(value) {
    return localStorage.getItem(value)
  }
  static clearStorage() {
    localStorage.clear()
  }
  static loadCountryInfo(value) {
    return dataVisConstant.countryInfo[value]
  }
}
export default Utilities

/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.getNum = function (input) {
    let resultFloat = input.match(/([-?\d\.?|\/?]+)(.*)/)

    if (resultFloat !== null && /[\.|\/]/.test(input) === false) {
      let resultNonFloat = input.match(/[-?\d]+/)
      return parseInt(resultNonFloat[0]) > 0 ? parseInt(resultNonFloat[0]) : "invalid number"
    } else if (resultFloat !== null && /[\.|\/]/.test(input) === true) {

      let splittedResult = resultFloat[1].split("")
      let sliceFirst = splittedResult.slice(0, 3)
      let sliceLast = splittedResult.slice(2, 5)

      return splittedResult[1].match(/\./) && splittedResult[3] === undefined && splittedResult[4] === undefined && splittedResult[5] === undefined
        ? parseFloat(resultFloat[1])
        : splittedResult[1].match(/\//) && splittedResult[3] === undefined && splittedResult[4] === undefined && splittedResult[5] === undefined
          ? parseFloat(parseInt(splittedResult[0]) / parseInt(splittedResult[2]))
          : splittedResult[3].match(/\//) && splittedResult[1].match(/\./) && splittedResult[5] === undefined
            ? parseFloat(parseFloat(sliceFirst.join("")) / parseInt(splittedResult[4]))
            : splittedResult[3].match(/\./) && splittedResult[1].match(/\//) && splittedResult[5] === undefined
              ? parseFloat(parseInt(splittedResult[0]) / parseFloat(sliceLast.join("")))
              : splittedResult[1].match(/\//) && splittedResult[2].match(/\//)
                ? "invalid number"
                : splittedResult[1].match(/\//) && splittedResult[3].match(/\//)
                  ? "invalid number"
                  : splittedResult[1].match(/\//) && splittedResult[5].match(/\//)
                    ? "invalid number"
                    : "invalid number"
    } else {
      resultFloat = 1
      return resultFloat
    }
  };

  this.getUnit = function (input) {

    let getInit = input.match(/([^\d\/\.]+)/)
    let result = ""

    if (getInit === null) {
      result = "invalid unit"
      return result
    } else {
      let chooseInit = getInit[0]
      switch (chooseInit) {
        case "mi":
        case "MI":
          result = "mi"
          break
        case "km":
        case "KM":
          result = "km"
          break
        case "kg":
        case "KG":
          result = "kg"
          break
        case "lbs":
        case "LBS":
          result = "lbs"
          break
        case "gal":
        case "GAL":
          result = "gal"
          break
        case "l":
        case "L":
          result = "L"
          break
        default:
          result = "invalid unit"
          break;
      }
      return result
    }
  };

  this.getReturnUnit = function (initUnit) {
    let result = "";

    switch (initUnit) {
      case "mi":
      case "MI":
        result = "km"
        break
      case "km":
      case "KM":
        result = "mi"
        break
      case "kg":
      case "KG":
        result = "lbs"
        break
      case "lbs":
      case "LBS":
        result = "kg"
        break
      case "gal":
      case "GAL":
        result = "L"
        break
      case "l":
      case "L":
        result = "gal"
        break
      default:
        result = "Invalid Unit"
        break;
    }
    return result
  };

  this.spellOutUnit = function (unit) {
    let result;

    switch (unit) {
      case "mi":
      case "MI":
        result = "miles"
        break
      case "km":
      case "KM":
        result = "kilometers"
        break
      case "kg":
      case "KG":
        result = "kilograms"
        break
      case "lbs":
      case "LBS":
        result = "pounds"
        break
      case "gal":
      case "GAL":
        result = "gallons"
        break
      case "l":
      case "L":
        result = "liters"
        break
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case "mi":
      case "MI":
        result = parseFloat(initNum * miToKm).toFixed(5)
        break
      case "km":
      case "KM":
        result = parseFloat(initNum / miToKm).toFixed(5)
        break
      case "kg":
      case "KG":
        result = parseFloat(initNum / lbsToKg).toFixed(5)
        break
      case "lbs":
      case "LBS":
        result = parseFloat(initNum * lbsToKg).toFixed(5)
        break
      case "gal":
      case "GAL":
        result = parseFloat(initNum * galToL).toFixed(5)
        break
      case "l":
      case "L":
        result = parseFloat(initNum / galToL).toFixed(5)
        break
    }
    return parseFloat(result);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return isNaN(initNum) && initUnit === "invalid unit"
      ? "invalid number and unit"
      : initUnit === "invalid unit"
        ? "invalid unit"
        : initNum === "invalid number" || isNaN(initNum)
          ? "invalid number"
          : { initNum: initNum, initUnit: initUnit, returnNum: parseFloat(returnNum), returnUnit: returnUnit, string: `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}` }
  };

}

module.exports = ConvertHandler;

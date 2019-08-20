const _ = {
    clamp(num, lowBound, uppBound){ /*clamps num withing the lowBound and uppBound*/
      var lowerClampedValue = Math.max(num, lowBound)
      var clampedValue = Math.min(lowerClampedValue, uppBound)
      return clampedValue
    },
    inRange(num, stVal, endVal){ /*checks to see if num is in range of stVal(start value) and endVal(end value)*/
      if (endVal === undefined){
        endVal = stVal
        stVal = 0
      }
        if (stVal > endVal){
        let swapVal = endVal
        endVal = stVal
        stVal = swapVal
      }
      if(num < stVal){
        return false
      }
      if (num === stVal){
        return true
      }
      if (num >= endVal){
        return false
      }
      if (num > stVal && num < endVal){
        return true
      }
      return (num, stVal, endVal)
    },
    words(string){ /*this method will take a string passed to it, and turn each word in that string into it's own element in an array*/
      var words = string.split(' ')
      return words
    },
    pad(string, length){
      if (length <= string.length){
        return string
      }
        let prePadding = Math.floor((length - string.length) / 2)
      let postPadding = length - string.length - prePadding
      let paddedString = (' '.repeat(prePadding) + string + ' '.repeat(postPadding))
      return paddedString
    },
    has(object, key){
      var hasValue = object[key]
      if (hasValue != undefined){
        return true
      }
      else{
        return false
      }
      return hasValue
    },
    invert(object){
      let newObject = {}
      for (key in object){
        let originalValue = object[key]
        newObject = {originalValue : key}
      }
      return newObject
    },
    findKey(obj, predFunction){
      for (key in obj){
        var value = obj[key]
        var predicateReturnValue = predFunction(value)
        if (predicateReturnValue === true){
          return key
        }
        else{
          return undefined
        } //end of conditional
      }//end of loop
    },
    drop(array, number){
      if(number === undefined){
        number = 1
      }
      let newArray = array.slice(number)
      return newArray
    },
    dropWhile(array, predicate){
      const callBack = (element, index) =>{
        return !predicate(element, index, array)
      }
      let dropNumber = array.findIndex(callBack)
      let droppedArray = this.drop(array, dropNumber)
      return droppedArray
      },
    chunk(array, size){
      if (size === undefined){
        size = 1
      }
        let arrayChunks = []
        for(let i = 0; i < array.length; i += size){
          let arrayChunk = array.slice(i, i + size)
          arrayChunks.push(arrayChunk)
        }
      return arrayChunks
    }
  };
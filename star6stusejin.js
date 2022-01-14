const _repeat = (target, count) => {
    let str = "";
    for (let i = 0; i < count; i++) {
      str += target;
    }
    return str;
  };
  
  const createTopRowShape = (rhombus, starCount, columnCount, type) => {
    const blankCount = columnCount - starCount;
    if (type === "odd") {
      rhombus = `${rhombus + _repeat(" ", blankCount + 1) + _repeat("*", starCount) + _repeat("*", starCount - 1) + _repeat(" ", blankCount + 1)
        }\n`;
  
      return rhombus;
    }
    rhombus = `${rhombus + _repeat(" ", blankCount + 1) + _repeat("*", starCount) + _repeat("*", starCount) + _repeat(" ", blankCount)}\n`;
  
    return rhombus;
  };
  
  const createBottomRowShape = (rhombus, blankCount, columnCount, type) => {
    const starCount = columnCount - blankCount;
    if (type === "odd") {
      rhombus =
        rhombus +
        _repeat(" ", blankCount) +
        _repeat("*", starCount + 1) +
        _repeat("*", starCount) +
        _repeat(" ", blankCount);
      blankCount !== columnCount && (rhombus += "\n");
  
      return rhombus;
    }
    rhombus =
      rhombus +
      _repeat(" ", blankCount) +
      _repeat("*", starCount + 1) +
      _repeat("*", starCount + 1) +
      _repeat(" ", blankCount);
    blankCount !== columnCount && (rhombus += "\n");
  
    return rhombus;
  };


  const topShape = (topColumnCount, type) => {
    let rhombus = "";
  
    for (let i = 1; i <= topColumnCount; i++) {
      const row = "";
      rhombus += createTopRowShape(row, i, topColumnCount, type);
    }
  
    return rhombus;
  };
  
  const middleShape = (col, type) => {
    let rhombus = "";
    return type === "odd"
      ? rhombus += `${_repeat("*", col)}\n` // 홀
      : _repeat(`${_repeat("*", col)}\n`, 2); // 짝
  };
  
  const bottomShape = (bottomColumnCount, type) => {
    // 홀수 식일 때
    let rhombus = "";
    for (let i = 1; i <= bottomColumnCount; i++) {
      const row = "";
      rhombus += createBottomRowShape(row, i, bottomColumnCount, type);
    }
  
    return rhombus;
  };
  
  const solution = (col) => {  //col = 6
    let rhombus = "";
    // 5나누기 2는 2
    // 4나누기 2는 2
    // 홀수 짝수 구분
    const type = col % 2 === 0 ? "even" : "odd";  //type = even
    const dividedCol = col % 2 === 0 ? Math.floor(col / 2) - 1 : Math.floor(col / 2);
    // 줄수가 하나 짧다. (첫번째를 생략)  //divideCol = 2
    rhombus = topShape(dividedCol, type) + middleShape(col, type) + bottomShape(dividedCol, type);
  
    return rhombus;
  };
  
console.log(solution(6));

/*

  **
 ****
******
******
 ****
  ** 

  */
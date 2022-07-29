enum StatusCodes {
    NotFound = 100,
    Success = 200,
    Accepted = 300,
    BadRequest = 400
  };
  
  // logs 100
  console.log(StatusCodes.NotFound);
  
  // logs 200
  console.log(StatusCodes.Success);

  // output
  // 100
  // 200
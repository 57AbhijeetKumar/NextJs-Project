const { NextResponse } = require("next/server")

const getErrorResponse = (msg,statusCode,successStatus) => {
    return NextResponse.json({
        msg:msg,
        success:successStatus,
        status:statusCode
    })
}

export {getErrorResponse}
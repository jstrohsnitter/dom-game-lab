function compileLogs () {
    const logCount = normalLogs ();
    const robbedLogs = robbedLogFunction ();
    const wasRobbed = wasRobbedFunction () ;
    const outcome = combinedLogFunction (logCount, robbedLogs);
    generateLogMessage (outcome, wasRobbed)
}

logCountLog.textContent = compileLogs ();

function normalLogs(swingCount) {
    if (swingCount % 5 === 0) {
        return swingCount / 5;       
    }
}

function robbedLogFunction (swingCount) {
    if (swingCount === 10){
        function logDeduction () {
            return (Math.floor(Math.random() * 3)) 
        }
       return logDeduction ()
    } else {
        return 0
    }
}

function wasRobbedFunction (robbedLogs) {
    if (robbedLogs > 0) {
        return true
    } else {
        return false
    }
}

function combinedLogFunction () {
    if (robbedLogs > 0) {
        return logCount - robbedLogs
    } else {
        return logCount
    }
    
}



function generateLogMessage (outcome, wasRobbed) {
    if (wasRobbed === true) {
        return "you have been robbed! you now have " + outcome + " log(s)"
    }
    else {
        return "you have " + outcome + " log(s)"
    }
}


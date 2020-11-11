exports.handler = (event, context, callback) => {
    var name = event.currentIntent.slots.name;
    var salary = event.currentIntent.slots.salary;
    var ID = evetn.currentIntent.slots.ID;
    var hoursBiWeekly = event.currentIntent.slots.hoursBiWeekly;
    var terms = event.currentIntent.slots.terms;

    switch (terms) {
        case "weekly":
            if(hoursBiWeekly > 40) {
                var overtime = hoursBiWeekly - 40;
                var overtimePay = overtime * (salary * 1.5);
                var sum = overtimePay + (40 * salary);
            } else {
                sum = hoursBiWeekly * salary;
            }
            callback(null, {
                "dialogAction": {
                    "type": "Close",
                    "fulfillmentState": "Fulfilled",
                    "message": {
                        "contentType": "PlainText",
                        "content": "Due to the info gathered, " + name + "'s paycheck will be: $" + parseFloat(sum).toFixed(2)
                    }
                }
            });
            break;
        case "biweekly":
            if(hoursBiWeekly > 80){
                var overtime = hoursBiWeekly - 80;
                var overtimePay = overtime * (salary * 1.5);
                sum = overtimePay + (80 * salary);
            }else {
                sum = hoursBiWeekly * salary;
            }
            callback(null, {
                "dialogAction": {
                    "type": "Close",
                    "fulfullmentState": "Fulfilled",
                    "message": {
                        "contentType": "PlainText",
                        "content": "Due to teh info gathered, " + name + "' s paycheck will be: $" + parseFloat(sum).toFixed(2)
                    }
                }
            });
            break;
    }
};
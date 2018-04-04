/**
 * 
 * Example of sending an SMS with TwilioSMS Library
 * 
 */
function ExampleSendSMS(req, resp){
    
        // TODO Create an account on twilio.com, and enter account credentials below
    
        // ex. "BC218b72987d86855a5adb921370115a20"
        TWILIO_USER = "";
        // ex. "4579ac6ba4fae7b452c03c64aeae40e7"
        TWILIO_PASS = "";
        // ex. "(+1 512-713-2783)"
        TWILIO_SOURCE_NUMBER = "";
        
        var text = "Geofence Breached - Dispatching Engineer";
        var recipientNumber = "(+1 512-867-5309)";
        
        var twilio = Twilio(TWILIO_USER, TWILIO_PASS, TWILIO_SOURCE_NUMBER);
        
        twilio.sendSMS(text, recipientNumber, callback);
        
        function callback(err, data){
            if(err){
                resp.error(err);
            }
            resp.success(data);
        }
}
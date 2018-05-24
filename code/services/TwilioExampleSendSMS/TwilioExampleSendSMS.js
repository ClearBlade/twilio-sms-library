/**
 * 
 * Example of sending an SMS with TwilioSMS Library
 * 
 */
function TwilioExampleSendSMS(req, resp){
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
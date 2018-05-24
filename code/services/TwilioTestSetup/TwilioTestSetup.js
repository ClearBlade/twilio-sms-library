
/**
 * This service just ensures whether the MailgunConstants are set or not.
 */
function TwilioTestSetup(req, resp){
    
    function checkConstants() {
        var checkConstantEmpty = function (constant) {
            if (constant === "") {
                return true;
            } else {
                return false;
            }
        }
        
        var response = {
            err: false,
            messages: []
        };
    
        var sendResponse = function(){
            if (response.err){
                resp.error(response)
            }else{
                resp.success(response);    
            }
        };
    var templateMessage = " not set in TwilioConstants Library";
    if (checkConstantEmpty(TWILIO_USER)) {
        response.err = true;
        response.messages.push("TWILIO_USER" +templateMessage);
    }
    if (checkConstantEmpty(TWILIO_PASS)) {
        response.err = true;
        response.messages.push("TWILIO_PASS" +templateMessage);
    }
    if (checkConstantEmpty(TWILIO_SOURCE_NUMBER)) {
        response.err = true;
        response.messages.push("TWILIO_SOURCE_NUMBER" +templateMessage);
    }
    
    sendResponse();
        
    }
    
    checkConstants();
}
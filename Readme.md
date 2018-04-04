
# ipm package: twilio-sms-library

## Overview

Communication API for SMS

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

1. Create an account on [https://twilio.com](https://twilio.com)
2. Obtain your Username, Password, and Origin Number
3. Configure in your code service, (example provided in ExampleSendSMS)

## Usage

### Code Libraries

`TwilioSMS` - Library for sending SMS Messages

### Code Services

`ExampleSendSMS` - Configures Twilio and sends an SMS

## API


### Twilio(user, pass, sourceNumber)
Sends a text message using Twilio's REST API.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> | Twilio API account ex. "BC218b72987d86855a5adb921370115a20" |
| pass | <code>string</code> | Twilio API passcode ex. "4579ac6ba4fae7b452c03c64aeae40e7" |
| sourceNumber | <code>string</code> | Origin phone number of text message, ex "(+1 512-713-2783)" |

<a name="Twilio..sendSMS"></a>

#### Twilio~sendSMS(text, recipientNumber, callback)
Send SMS message

**Kind**: inner method of [<code>Twilio</code>](#Twilio)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | text body |
| recipientNumber | <code>string</code> | Formatted phone number ex. "(+1 339-987-2816)" |
| callback | <code>callback</code> | ex. function(err, data){} |


## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
<a name="Twilio"></a>
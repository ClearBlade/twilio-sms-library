
# ipm package: twilio-sms-library

## Overview

Communication API for SMS

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

1. Create an account on [https://twilio.com](https://twilio.com)
2. Obtain your Username, Password, and Origin Number
3. Configure your constants in the _TwilioConstants_ library.
4. Test using the example service _TwilioExampleSendSMS_.

## Usage
This library gives user the ability to send sms using the _Twilio API_.

## Assets
### Code Libraries

* `TwilioSMSLib` - Library for sending SMS Messages. It can be accessed using the _Twilio_ object. 

* `TwilioConstants` - A constants library to have a centralized location for constants like API-key.


### Code Services

#### Example
`TwilioExampleSendSMS` - An example service showing how to use the twilio library to send SMS.

#### Test
`TwilioTestSetup` - Tests if the constants for this package are set or not.

## API

### Typedefs

<dl>
<dt><a href="#callback">callback</a> : <code>function</code></dt>
<dd><p>This callback is displayed as part of this Library.</p>
</dd>
<dt><a href="#Twilio">Twilio</a> : <code>Object</code></dt>
<dd><p>Sends a text message using Twilio&#39;s REST API.</p>
</dd>
</dl>

<a name="callback"></a>

### callback : <code>function</code>
This callback is displayed as part of this Library.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| err | <code>Object</code> | 
| resp | <code>Object</code> | 

<a name="Twilio"></a>

### Twilio : <code>Object</code>
Sends a text message using Twilio's REST API.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> | Twilio API account ex. "BC218b72987d86855a5adb921370115a20" |
| pass | <code>string</code> | Twilio API passcode ex. "4579ac6ba4fae7b452c03c64aeae40e7" |
| sourceNumber | <code>string</code> | Origin phone number of text message, ex "(+1 512-713-2783)" |

**Example**  

```js
var twilio = Twilio(TWILIO_USER, TWILIO_PASS, TWILIO_SOURCE_NUMBER);
```
<a name="Twilio.sendSMS"></a>

#### Twilio.sendSMS(text, recipientNumber, callback)
Send SMS message

**Kind**: static method of [<code>Twilio</code>](#Twilio)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | text body |
| recipientNumber | <code>string</code> | Formatted phone number ex. "(+1 339-987-2816)" |
| callback | [<code>callback</code>](#callback) | ex. function(err, data){} |

**Example**
  
```js
var twilio = Twilio(TWILIO_USER, TWILIO_PASS, TWILIO_SOURCE_NUMBER);

twilio.sendSMS(text, recipientNumber, function(err, data){
    if(err){
        resp.error(err);
    }
    resp.success(data);
});
```

# cordova-plugin-ios-aswebauthenticationsession-api

Cordova Plugin for iOS 12 ASWebAuthenticationSession API. Originally forked from [rak13/cordova-plugin-ios-aswebauthenticationsession](https://github.com/rak13/cordova-plugin-ios-aswebauthenticationsession) and updated to address an [issue](https://github.com/rak13/cordova-plugin-ios-aswebauthenticationsession/issues/1) present after updating to iOS 13.

## Usage

    window.plugins.ASWebAuthSession.start({
      callbackURLScheme: "myappurlscheme",
      url: 'https://linktoopen.someplace.com/index.html',
      prefersEphemeralWebBrowserSession: false // Available on iOS 13+, default: false
    }, function (msg) {
      console.log("Success ", msg);
    }, function (err) {
      if (err && err.code === 1) {
        // Ignore, this means the user cancelled
      } else {
        console.log("Error " + JSON.stringify(err));
      }
    });

### Config

| Param                             | Type                 | Default            | Description                                                                                                                       |
| --------------------------------- | -------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| callbackURLScheme                 | <code>String</code>  |                    | The custom URL scheme that the app expects in the callback URL.                                                                   |
| url                               | <code>String</code>  |                    | A URL with the http or https scheme pointing to the authentication webpage.                                                       |
| prefersEphemeralWebBrowserSession | <code>Boolean</code> | <code>false</code> | **iOS13+ only** - A Boolean value that indicates whether the session should ask the browser for a private authentication session. |

### Error Codes

| Value                                                             | Code           | Description                  |
| ----------------------------------------------------------------- | -------------- | ---------------------------- |
| ASWebAuthenticationSessionErrorCodeCanceledLogin                  | <code>1</code> | The login has been canceled. |
| ASWebAuthenticationSessionErrorCodePresentationContextNotProvided | <code>2</code> | A context wasn’t provided.   |
| ASWebAuthenticationSessionErrorCodePresentationContextInvalid     | <code>3</code> | The context was invalid.     |

#### Additional information

iOS 13 introduced a requirement that ASWebAuthenticationSession needs a [presentationContextProvider](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession/3237232-presentationcontextprovider) to provide a "display context in which the system can present an authentication session to the user."

The changes in this plugin should address an error that was thrown when trying to use ASWebAuthenticationSession after updating to iOS 13:
"Cannot start ASWebAuthenticationSession without providing presentation context. Set presentationContextProvider before calling -start."


#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

#import <IBGxNetworkManager/IBGxNetworkManager.h>

@interface RNIOsLibrary : IBGxNetworkManager <RCTBridgeModule>


@end
  

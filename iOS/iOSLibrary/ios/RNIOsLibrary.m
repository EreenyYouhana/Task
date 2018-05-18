
#import "RNIOsLibrary.h"

@implementation RNIOsLibrary

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(GET:(nonnull NSString *)urlString
                  completionHandler:(RCTResponseSenderBlock)callback) {
    IBGxNetworkManager* request = [[IBGxNetworkManager alloc] init];
    NSURL *url = [[NSURL alloc] initWithString:urlString];
    [request GET: url parameters: nil completionHandler:^(id  _Nullable response, NSError * _Nullable error) {
        if(!error){
            callback(@[[NSNull null], response]);

        }else{
            callback(@[[error localizedDescription], [NSNull null]]);
        }
    }];
}
   
@end
  

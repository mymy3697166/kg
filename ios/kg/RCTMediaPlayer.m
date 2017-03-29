//
//  RCTMediaPlayer.m
//  kg
//
//  Created by zjz on 17/3/29.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RCTMediaPlayer.h"
#import <AVFoundation/AVFoundation.h>

@implementation RCTMediaPlayer {
  UIView *screenView;
  AVPlayerLayer *videoPlayerLayer;
  AVPlayer *videoPlayer;
}

RCT_EXPORT_MODULE()

RCT_CUSTOM_VIEW_PROPERTY(source, NSString, UIView) {
  videoPlayer = [[AVPlayer alloc] initWithURL:[NSURL URLWithString:json]];
  videoPlayerLayer = [AVPlayerLayer playerLayerWithPlayer:videoPlayer];
  videoPlayerLayer.backgroundColor = [UIColor blackColor].CGColor;
  videoPlayerLayer.videoGravity = AVLayerVideoGravityResizeAspect;
  [view.layer addSublayer:videoPlayerLayer];
  [videoPlayer play];
}

- (UIView *)view {
  screenView = [[UIView alloc] init];
  [screenView addObserver:self forKeyPath:@"bounds" options:NSKeyValueObservingOptionNew context:nil];
  return screenView;
}

- (void)observeValueForKeyPath:(NSString *)keyPath ofObject:(id)object change:(NSDictionary<NSKeyValueChangeKey,id> *)change context:(void *)context {
  videoPlayerLayer.frame = screenView.bounds;
}

- (void)dealloc {
  [screenView removeObserver:self forKeyPath:@"bounds"];
}
@end

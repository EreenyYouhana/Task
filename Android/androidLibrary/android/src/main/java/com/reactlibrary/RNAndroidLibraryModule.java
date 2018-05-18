
package com.reactlibrary;

import android.graphics.Bitmap;
import android.util.Base64;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.tarek360.instacapture.Instacapture;
import com.tarek360.instacapture.listener.SimpleScreenCapturingListener;

import java.io.ByteArrayOutputStream;

public class RNAndroidLibraryModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNAndroidLibraryModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNAndroidLibrary";
  }

  @ReactMethod
  public void screenShot(final Callback onCaptureComplete, final Callback onCaptureFailed) {
    Instacapture.capture(getCurrentActivity(), new SimpleScreenCapturingListener() {
      @Override
      public void onCaptureComplete(Bitmap bitmap) {
        onCaptureComplete.invoke(encodeToBase64(bitmap));
      }
      
      @Override
      public void onCaptureFailed(Throwable e) {
        super.onCaptureFailed(e);
        onCaptureFailed.invoke(e.getMessage());
      }
    }, null);
  }
  public static String encodeToBase64(Bitmap image)
  {
    Bitmap immagex=image;
    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    immagex.compress(Bitmap.CompressFormat.JPEG, 100, baos);
    byte[] b = baos.toByteArray();
    String imageEncoded = Base64.encodeToString(b, Base64.DEFAULT);

    Log.e("LOOK", imageEncoded);
    return imageEncoded;
  }

}


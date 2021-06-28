package com.appdemosdk;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import android.content.Intent;
import com.facebook.react.ReactInstanceManager;
import com.reactnativepaymesdk.PaymeSdkModule;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AppDemoSDK";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);  // here
    super.onCreate(savedInstanceState);
  }

   @Override
  public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    PaymeSdkModule.Companion.onActivityResult(this,requestCode, resultCode, data);

  }

  @Override
  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    PaymeSdkModule.Companion.onRequestPermissionsResult(requestCode, permissions, grantResults);
  }
}

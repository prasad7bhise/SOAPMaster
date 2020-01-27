package com.sunbeaminfo.ecomm.activity;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.preference.PreferenceManager;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;
import com.sunbeaminfo.ecomm.R;
import com.sunbeaminfo.ecomm.utils.Constants;
import com.sunbeaminfo.ecomm.utils.Utils;

import butterknife.BindView;
import butterknife.ButterKnife;

public class LoginActivity extends AppCompatActivity {

    @BindView(R.id.editEmail) EditText editEmail;
    @BindView(R.id.editPassword) EditText editPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        ButterKnife.bind(this);
    }

    public void onLogin(View v) {
        String email = editEmail.getText().toString();
        String password = editPassword.getText().toString();

        if (email.length() == 0) {
            editEmail.setError("Email is mandatory");
        } else if (password.length() == 0) {
            editPassword.setError("Password is mandatory");
        } else {

            SharedPreferences preferences =
                    PreferenceManager.getDefaultSharedPreferences(this);

            String device_token = preferences.getString("device_token", "");
            final String url = Utils.getUrl(Constants.PATH_USER + "/login");

            final JsonObject body = new JsonObject();
            body.addProperty("email", email);
            body.addProperty("password", password);
            body.addProperty("device_token", device_token);

            Ion.with(this)
                .load("POST", url)
                .setJsonObjectBody(body)
                .asJsonObject()
                .setCallback(new FutureCallback<JsonObject>() {
                    @Override
                    public void onCompleted(Exception e, JsonObject result) {
                        String status = result.get("status").getAsString();
                        if (status.equals("success")) {
                            Intent intent = new Intent(LoginActivity.this, ProductListActivity.class);
                            startActivity(intent);
                            finish();
                        } else {
                            String error = result.get("error").getAsString();
                            Toast.makeText(LoginActivity.this, error, Toast.LENGTH_SHORT).show();
                        }
                    }
                });

        }
    }

    public void onRegister(View v) {
        Intent intent = new Intent(LoginActivity.this, RegistrationActivity.class);
        startActivity(intent);
    }
}

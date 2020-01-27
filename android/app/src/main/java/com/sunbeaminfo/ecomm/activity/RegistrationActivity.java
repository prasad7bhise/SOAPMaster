package com.sunbeaminfo.ecomm.activity;

import android.content.Intent;
import android.os.Bundle;
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

public class RegistrationActivity extends AppCompatActivity {

    @BindView(R.id.editName) EditText editName;
    @BindView(R.id.editEmail) EditText editEmail;
    @BindView(R.id.editPhone) EditText editPhone;
    @BindView(R.id.editPassword) EditText editPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registration);
        ButterKnife.bind(this);
    }

    public void onRegister(View v) {
        String name = editName.getText().toString();
        String phone =editPhone.getText().toString();
        String email = editEmail.getText().toString();
        String password = editPassword.getText().toString();



        if (name.length() == 0) {
            editName.setError("Name is mandatory");
        } else if (email.length() == 0) {
            editEmail.setError("Email is mandatory");
        } else if (password.length() == 0) {
            editPassword.setError("Password is mandatory");
        }else if (phone.length() == 0){
            editPhone.setError("Enter valid phone number");
        } else {

            final String url = Utils.getUrl(Constants.PATH_USER + "/register");

            final JsonObject body = new JsonObject();
            body.addProperty("name", name);
            body.addProperty("email", email);
            body.addProperty("phone", phone);
            body.addProperty("password", password);


            Ion.with(this)
                    .load("POST", url)
                    .setJsonObjectBody(body)
                    .asJsonObject()
                    .setCallback(new FutureCallback<JsonObject>() {
                        @Override
                        public void onCompleted(Exception e, JsonObject result) {
                            String status = result.get("status").getAsString();
                            if (status.equals("success")) {
                                finish();
                            } else {
                                String error = result.get("error").getAsString();
                                Toast.makeText(RegistrationActivity.this, error, Toast.LENGTH_SHORT).show();
                            }
                        }
                    });

        }
    }

    public void onCancel(View v) {
        finish();
    }
}

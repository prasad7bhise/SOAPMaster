package com.sunbeaminfo.ecomm.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.sunbeaminfo.ecomm.R;

import com.sunbeaminfo.ecomm.adapter.MenulistAdapater;
import com.sunbeaminfo.ecomm.model.Menu_list;

import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;
import com.sunbeaminfo.ecomm.utils.Constants;
import com.sunbeaminfo.ecomm.utils.Utils;

import org.json.JSONObject;

import java.util.ArrayList;

import butterknife.BindView;
import butterknife.ButterKnife;

public class MenuListActivity extends AppCompatActivity{

    ArrayList<Menu_list> menus = new ArrayList<>();
    MenulistAdapater adapter;
    @BindView(R.id.recycleView) RecyclerView recyclerView;

    @Override
   protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
         setContentView(R.layout.activity_menu_list);
       ButterKnife.bind(this);

        adapter = new MenulistAdapater (this, menus);
        recyclerView.setAdapter(adapter);
        recyclerView.setLayoutManager(new GridLayoutManager(this,1));
    }

     @Override
     protected void onResume(){
        super.onResume();
        loadMenus();

    }

    void loadMenus()
    {
        menus.clear();
        final String url = Utils.getUrl(Constants.PATH_MENU);
        Log.e("MenuListActivity","url:"+url);

        Ion.with(this).load("GET",url).asJsonObject()
                .setCallback( new FutureCallback<JsonObject>() {
                    @Override
                    public void onCompleted(Exception e, JsonObject result) {
                       {
                           // check the status here
                            String status = result.get("status").getAsString();
                            if(status.equals("success")){
                                Log.e("MenulistActivity",result.toString());

                                  //get the product here
                                JsonArray temp = result.get("data").getAsJsonArray();
                                for(int index = 0; index<temp.size(); index++){
                                    JsonObject object =temp.get(index).getAsJsonObject();

                                    int category_id = object.get("category_id").getAsInt();
                                    int menu_id = object.get("menu_id").getAsInt();
                                    String menu_name = object.get("menu_name").getAsString();
                                    int price = object.get("price").getAsInt();
                                    menus.add(new Menu_list( category_id, menu_id,  menu_name, price));
                                }


                            }
                            else{
                                Log.e("MenuListActivity",result.get("error").getAsJsonObject().toString());
                                Toast.makeText(MenuListActivity.this, "Error..", Toast.LENGTH_SHORT).show();
                            }
                            adapter.notifyDataSetChanged();


                            }



                    }

                });
    }
}













































//
//public class MenuListActivity extends AppCompatActivity {
//    ArrayList<Menu_list> menus = new ArrayList<>();
//    @BindView(R.id.recycleView) RecyclerView recyclerView;
//    MenulistAdapater adapter;
//
//    @Override
//    protected void onCreate(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        ButterKnife.bind(this);
//        adapter = new MenulistAdapater (this, menus);
//        recyclerView.setAdapter(adapter);
//        recyclerView.setLayoutManager(new GridLayoutManager(this,1));
//    }
//
//    @Override
//    protected  void onResume(){
//        super.onResume();
//        loadMenus();
//    }
//
//    void loadMenus(){
//        menus.clear();
//        final String url = Utils.getUrl(Constants.PATH_MENU);
//        Log.e("MenuListActivity","url:"+url);
//        Ion.with(this)
//                .load("GET",url)
//                .asJsonObject()
//                .setCallback(new FutureCallback<JsonObject>() {
//                    @Override
//                    public void onCompleted(Exception e, JsonObject result) {
//                        String status = result.get("status").getAsString();
//                        if (status.equals("Success")){
//                            Log.e("MenuListActivity",result.toString());
//                            JsonArray tempMenus = result.get("data").getAsJsonArray();
//                            for (int index = 0; index< tempMenus.size();index++){
//                                JsonObject object = tempMenus.get(index).getAsJsonObject();
//
//                                Menu_list menus = new Menu_list();
//                                menus.setCategory_id(object.get("category_id").getAsInt());
//                                menus.setMenu_id(object.get("menu_id").getAsInt());
//                                menus.setMenu_name(object.get("menu_name").getAsString());
//                                menus.setPrice(object.get("price").getAsInt());
//                                //Menu_list.add(menus);
//                            }
//                            adapter.notifyDataSetChanged();
//                        }
//                    }
//                });
//    }
//}

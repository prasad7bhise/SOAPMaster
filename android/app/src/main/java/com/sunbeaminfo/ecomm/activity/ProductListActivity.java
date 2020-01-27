package com.sunbeaminfo.ecomm.activity;

import android.os.Bundle;
import android.util.Log;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;
import com.sunbeaminfo.ecomm.R;
import com.sunbeaminfo.ecomm.adapter.ProductListAdapter;
import com.sunbeaminfo.ecomm.model.Product;
import com.sunbeaminfo.ecomm.utils.Constants;
import com.sunbeaminfo.ecomm.utils.Utils;

import java.util.ArrayList;

import butterknife.BindView;
import butterknife.ButterKnife;

public class ProductListActivity extends AppCompatActivity {

    ArrayList<Product> products = new ArrayList<>();
    @BindView(R.id.recycleView) RecyclerView recycleView;
    ProductListAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product_list);
        ButterKnife.bind(this);

        adapter = new ProductListAdapter(this, products);
        recycleView.setAdapter(adapter);
        recycleView.setLayoutManager(new GridLayoutManager(this, 1));
    }

    @Override
    protected void onResume() {
        super.onResume();
        loadProducts();
    }

    void loadProducts() {
        products.clear();
        final String url = Utils.getUrl(Constants.PATH_PRODUCT);
        Ion.with(this)
            .load(url)
            .asJsonObject()
            .setCallback(new FutureCallback<JsonObject>() {
                @Override
                public void onCompleted(Exception e, JsonObject result) {
                    String status = result.get("status").getAsString();
                    if (status.equals("success")) {
                        JsonArray tempProducts = result.get("data").getAsJsonArray();
                        for (int index = 0; index < tempProducts.size(); index++) {
                            JsonObject object = tempProducts.get(index).getAsJsonObject();

                            Product product = new Product();
                            product.setId(object.get("id").getAsInt());
                            product.setTitle(object.get("title").getAsString());
                            product.setDescription(object.get("description").getAsString());
                            product.setPrice(object.get("price").getAsFloat());
                            product.setImage(object.get("image").getAsString());
                            products.add(product);
                        }
                        adapter.notifyDataSetChanged();
                    }
                }
            });

    }
}

package com.sunbeaminfo.ecomm.adapter;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.koushikdutta.async.Util;
import com.koushikdutta.ion.Ion;
import com.sunbeaminfo.ecomm.R;
import com.sunbeaminfo.ecomm.model.Product;
import com.sunbeaminfo.ecomm.utils.Utils;

import java.util.ArrayList;

public class ProductListAdapter extends RecyclerView.Adapter<ProductListAdapter.ViewHolder> {

    private final Context context;
    private final ArrayList<Product> products;

    public ProductListAdapter(Context context, ArrayList<Product> products) {
        this.context = context;
        this.products = products;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater = LayoutInflater.from(context);
        return new ViewHolder(inflater.inflate(R.layout.recycler_item_product, null));
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Product product = products.get(position);

        holder.textTitle.setText(product.getTitle());
        holder.textDescription.setText(product.getDescription());
        holder.textPrice.setText("" + product.getPrice());

        String url = Utils.getUrl("/" + product.getImage());
        Ion.with(context)
            .load(url)
            .withBitmap()
            .intoImageView(holder.imageView);

    }

    @Override
    public int getItemCount() {
        return products.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        ImageView imageView;
        TextView textTitle, textDescription, textPrice;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            imageView = itemView.findViewById(R.id.imageView);
            textTitle = itemView.findViewById(R.id.textTitle);
            textDescription = itemView.findViewById(R.id.textDescription);
            textPrice = itemView.findViewById(R.id.textPrice);
        }
    }
}
